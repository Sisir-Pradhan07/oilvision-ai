import { jsPDF } from "jspdf";

export default function generateReport(result, inputs) {
  const doc = new jsPDF("p", "mm", "a4");

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  const blue = [37, 99, 235];
  const dark = [15, 23, 42];
  const gray = [100, 116, 139];
  const border = [226, 232, 240];

  const now = new Date();

  const reportId =
    "OV-" +
    now.getFullYear() +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0") +
    "-" +
    Math.floor(Math.random() * 900 + 100);

  // ================= HEADER =================

  doc.setFillColor(...dark);
  doc.rect(0, 0, width, 35, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("OilVision AI", 20, 15);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Oil Price Prediction Report", 20, 24);

  doc.setFontSize(10);
doc.text(`ID: ${reportId}`, width - 20, 24, {
  align: "right",
});

  // ================= PREDICTION CARD =================

  let y = 48;

  doc.setDrawColor(...border);

  doc.setTextColor(...gray);
  doc.setFontSize(12);
  doc.text("Predicted Oil Price", width / 2, y + 10, {
    align: "center",
  });

  doc.setTextColor(...blue);
  doc.setFont("helvetica", "bold");
const price = Number(result.predicted_price)
  .toFixed(2)
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

doc.setFontSize(22);
doc.text(`Rs. ${price}`, width / 2, y + 20, {
  align: "center",
});

doc.setFontSize(11);

doc.setTextColor(34, 197, 94);

doc.text("Strong Model Fit • R² Score: 0.9859", width / 2, y + 35, {
  align: "center",
});

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...gray);
  doc.setFontSize(10);

  doc.text(
    now.toLocaleString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
}),
    width / 2,
    y + 28,
    { align: "center" }
  );

  y += 56;

  // ================= LEFT CARD =================

  doc.setDrawColor(...border);
  // doc.roundedRect(15, 48, 180, 32, 3, 3);

  doc.setTextColor(...dark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setFillColor(245,247,250);
// Card
doc.setDrawColor(...border);
doc.roundedRect(15, y, 85, 72, 3, 3, "S");

doc.setDrawColor(...border);
// Header background
doc.setFillColor(245, 247, 250);
doc.rect(15.5, y + 0.5, 84, 11, "F");
  doc.text("Market Inputs",20,y+10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  const inputsData = [
    ["Year", inputs.Year],
    ["Brent Oil Price", `$${inputs.Brent_Oil_Price_US_b}`],
    ["USD / INR", inputs.USD_INR],
    ["Global Demand", inputs.Global_Oil_Demand_mb_d + " mb/d"],
    ["Global Conflict", inputs.Global_Conflict ? "Yes" : "No"],
  ];

  let rowY = y + 22;

  inputsData.forEach(([label, value]) => {
    doc.setTextColor(...gray);
    doc.text(label, 20, rowY);

    doc.setTextColor(...dark);
    doc.text(String(value), 92, rowY, { align: "right" });

    rowY += 10;
  });

  // ================= RIGHT CARD =================

doc.setDrawColor(...border);
doc.roundedRect(110, y, 85, 72, 3, 3, "S");

// Header background
doc.setFillColor(245, 247, 250);
doc.rect(110.5, y + 0.5, 84, 11, "F");

doc.setFont("helvetica", "bold");
doc.setTextColor(...dark);
doc.setFontSize(14);
doc.text("Model Information",115,y+10);

  const modelData = [
  ["Algorithm", result.model],
  ["R² Score", "0.9859"],
  ["Version", result.version],
];

  rowY = y + 22;

  modelData.forEach(([label, value]) => {
    doc.setTextColor(...gray);
    doc.text(label, 115, rowY);

    doc.setTextColor(...dark);
    doc.text(String(value), 190, rowY, {
      align: "right",
    });

    rowY += 10;
  });

  y += 80;

  // ================= MARKET SUMMARY =================

doc.roundedRect(15, y, 180, 48, 3, 3);

doc.setFillColor(245,247,250);
doc.rect(15.5, y + 0.5, 179, 11, "F");

doc.setFont("helvetica", "bold");
doc.setFontSize(14);
doc.setTextColor(...dark);

doc.text("Market Summary",20,y+10);

const brent =
inputs.Brent_Oil_Price_US_b > 100
? "High"
: inputs.Brent_Oil_Price_US_b < 60
? "Low"
: "Stable";

const usd =
inputs.USD_INR > 90
? "Weak INR"
: inputs.USD_INR < 75
? "Strong INR"
: "Stable INR";

const demand =
inputs.Global_Oil_Demand_mb_d > 105
? "Strong Demand"
: "Moderate Demand";

const trend =
inputs.Global_Conflict === 1 ||
inputs.Brent_Oil_Price_US_b > 100
? "Upward Pressure"
: "Stable Market";

const summary = [
["Brent Oil", brent],
["USD / INR", usd],
["Demand", demand],
["Conflict", inputs.Global_Conflict ? "Yes" : "No"],
["Expected Trend", trend],
];

let sy = y + 20;

summary.forEach(([label,value])=>{

doc.setTextColor(...gray);
doc.text(label,20,sy);

doc.setTextColor(...blue);
doc.text(value,190,sy,{align:"right"});

sy += 6;

});

y += 54;

// ================= AI INSIGHT =================

const conflictStatus =
  inputs.Global_Conflict === 1 ? "Conflict" : "No Conflict";

const insight =
  `OilVision AI analyzed Brent crude ($${inputs.Brent_Oil_Price_US_b}/barrel), ` +
  `USD/INR (${inputs.USD_INR}), Global Demand (${inputs.Global_Oil_Demand_mb_d} mb/d), ` +
  `and Geopolitical Status (${conflictStatus}). ` +
  `The trained Linear Regression model predicts an Indian oil price of Rs. ${price}.`;
const wrappedInsight = doc.splitTextToSize(insight, 170);

// Calculate card height automatically
const insightHeight = wrappedInsight.length * 5 + 18;

doc.roundedRect(15, y, 180, insightHeight, 3, 3);

doc.setFillColor(245,247,250);
doc.rect(15.5, y + 0.5, 179, 11, "F");

doc.setFont("helvetica","bold");
doc.setFontSize(14);
doc.setTextColor(...dark);

doc.text("AI Insight",20,y+8);

doc.setFont("helvetica","normal");
doc.setFontSize(10);
doc.setTextColor(...gray);

doc.text(wrappedInsight, 20, y + 18, {
  lineHeightFactor: 1.35,
});

y += insightHeight + 8;
y += 4;



  // ================= FOOTER =================

  doc.setDrawColor(...border);
  doc.line(15, height - 16, width - 15, height - 16);

  doc.setTextColor(...gray);
  doc.setFontSize(9);

doc.text(
  [
    "Generated by OilVision AI v1.0",
    "For educational and analytical purposes only.",
    "© 2026 Sisir Pradhan",
  ],
  width / 2,
  height - 11,
  { align: "center" }
);

  doc.save(`OilVisionAI_Report_${reportId}.pdf`);
}