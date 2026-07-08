import os
import json
from datetime import datetime
from fastapi import APIRouter

from app.schemas.request import PredictionRequest
from app.schemas.response import PredictionResponse
from app.services.predictor import predict, metadata

router = APIRouter()

MODEL_DIR = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "..",
        "..",
        "model",
    )
)

HISTORY_FILE = os.path.join(MODEL_DIR, "prediction_history.json")


def save_prediction_history(features, prediction):
    print(f"\nSaving history to: {HISTORY_FILE}")

    if os.path.exists(HISTORY_FILE):
        try:
            with open(HISTORY_FILE, "r") as file:
                history = json.load(file)
        except json.JSONDecodeError:
            history = []
    else:
        history = []

    new_prediction = {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "inputs": {
            "year": features[0],
            "brent_oil": features[1],
            "usd_inr": features[2],
            "global_demand": features[3],
            "global_conflict": features[4],
        },
        "predicted_price": round(float(prediction), 2),
    }

    history.insert(0, new_prediction)

    history = history[:20]

    with open(HISTORY_FILE, "w") as file:
        json.dump(history, file, indent=4)

    print(f"History saved successfully. Total records: {len(history)}")


@router.get("/")
def root():
    return {
        "message": "Welcome to OilVision AI API",
        "status": "running",
    }


@router.get("/health")
def health():
    return {
        "status": "healthy",
    }


@router.get("/dashboard")
def get_dashboard_data():

    dashboard_file = os.path.join(MODEL_DIR, "dashboard_data.json")

    with open(dashboard_file, "r") as file:
        return json.load(file)


@router.post("/predict", response_model=PredictionResponse)
def make_prediction(request: PredictionRequest):

    features = [
        request.Year,
        request.Brent_Oil_Price_US_b,
        request.USD_INR,
        request.Global_Oil_Demand_mb_d,
        request.Global_Conflict,
    ]

    prediction = predict(features)

    save_prediction_history(features, prediction)

    return PredictionResponse(
        predicted_price=prediction,
        model=metadata["model_name"],
        version=metadata["version"],
    )


@router.get("/history")
def get_prediction_history():

    if not os.path.exists(HISTORY_FILE):
        return []

    with open(HISTORY_FILE, "r") as file:
        history = json.load(file)

    return history