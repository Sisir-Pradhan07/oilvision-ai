from pydantic import BaseModel, Field


class PredictionRequest(BaseModel):
    Year: int = Field(..., ge=2003, le=2035)

    Brent_Oil_Price_US_b: float = Field(
        ...,
        ge=20,
        le=200
    )

    USD_INR: float = Field(
        ...,
        ge=50,
        le=120
    )

    Global_Oil_Demand_mb_d: float = Field(
        ...,
        ge=80,
        le=130
    )

    Global_Conflict: int = Field(
        ...,
        ge=0,
        le=1
    )