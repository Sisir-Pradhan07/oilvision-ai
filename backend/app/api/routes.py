from fastapi import APIRouter

from app.schemas.request import PredictionRequest
from app.schemas.response import PredictionResponse
from app.services.predictor import predict, metadata

router = APIRouter()


@router.get("/")
def root():
    return {
        "message": "Welcome to OilVision AI API",
        "status": "running"
    }


@router.get("/health")
def health():
    return {
        "status": "healthy"
    }


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

    return PredictionResponse(
        predicted_price=prediction,
        model=metadata["model_name"],
        version=metadata["version"],
    )