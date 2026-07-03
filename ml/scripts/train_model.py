# ==========================================
# Libraries
# ==========================================

import os
import json
import joblib

import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

from sklearn.linear_model import LinearRegression
from sklearn.linear_model import Ridge
from sklearn.neighbors import KNeighborsRegressor

from sklearn.metrics import (
    r2_score,
    mean_squared_error,
    mean_absolute_error,
)

# ==========================
# Load Dataset
# ==========================

DATA_PATH = "../dataset/Oil_Price_India_Prediction_dataset.csv"

df = pd.read_csv(DATA_PATH)

# ==========================
# Feature Selection
# ==========================

# Remove less important features
df = df.drop(
    columns=[
        "Month",
        "WTI_Oil_Price(US/b)",
        "OPEC_Production(mb/d)"
    ]
)

X = df.drop("Oil_Price_India(INR/b)", axis=1)
y = df["Oil_Price_India(INR/b)"]
# ==========================
# Train Test Split
# ==========================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# ==========================
# Feature Scaling
# ==========================

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
# ==========================
# Train Model
# ==========================

model = LinearRegression()

model.fit(X_train_scaled, y_train)

# ==========================
# Evaluation
# ==========================

predictions = model.predict(X_test_scaled)

r2 = r2_score(y_test, predictions)
rmse = mean_squared_error(y_test, predictions) ** 0.5
mae = mean_absolute_error(y_test, predictions)

print(f"R² Score : {r2:.4f}")
print(f"RMSE     : {rmse:.2f}")
print(f"MAE      : {mae:.2f}")
# ==========================
# Save Artifacts
# ==========================

MODEL_DIR = "../../backend/model"

os.makedirs(MODEL_DIR, exist_ok=True)

joblib.dump(model, os.path.join(MODEL_DIR, "model.pkl"))
joblib.dump(scaler, os.path.join(MODEL_DIR, "scaler.pkl"))

metadata = {
    "model_name": "Linear Regression",
    "version": "1.0.0",
    "r2_score": round(r2, 4),
    "rmse": round(rmse, 2),
    "mae": round(mae, 2),
    "features": list(X.columns)
}
with open(os.path.join(MODEL_DIR, "metadata.json"), "w") as file:
    json.dump(metadata, file, indent=4)

print("\n✅ Training completed successfully.")
print("✅ Artifacts saved to backend/model/")