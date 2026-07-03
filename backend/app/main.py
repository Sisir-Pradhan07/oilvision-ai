from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(
    title="OilVision AI API",
    description="Production-ready ML API for predicting oil prices in India",
    version="1.0.0",
)

app.include_router(router)