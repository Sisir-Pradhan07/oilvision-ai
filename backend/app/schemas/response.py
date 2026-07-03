from pydantic import BaseModel


class PredictionResponse(BaseModel):
    predicted_price: float
    model: str
    version: str