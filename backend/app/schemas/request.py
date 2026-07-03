from pydantic import BaseModel


class PredictionRequest(BaseModel):
    Year: int
    Brent_Oil_Price_US_b: float
    USD_INR: float
    Global_Oil_Demand_mb_d: float
    Global_Conflict: int