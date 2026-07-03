import json
import joblib
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
MODEL_DIR = BASE_DIR / "model"

model = joblib.load(MODEL_DIR / "model.pkl")
scaler = joblib.load(MODEL_DIR / "scaler.pkl")

with open(MODEL_DIR / "metadata.json", "r") as f:
    metadata = json.load(f)


def predict(features):
    scaled = scaler.transform([features])
    prediction = model.predict(scaled)[0]
    return round(float(prediction), 2)
