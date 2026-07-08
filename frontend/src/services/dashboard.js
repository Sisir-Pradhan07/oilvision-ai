import api from "./api";

export async function getDashboardData() {
  const response = await api.get("/dashboard");
  return response.data;
}
export async function getPredictionHistory() {
  const response = await api.get("/history");
  return response.data;
}