# OilVision AI

AI-powered oil price prediction and analytics platform for India, built with Machine Learning, React, and FastAPI.

## 🚀 Overview

OilVision AI is a full-stack web application that applies Machine Learning to predict India's oil prices using historical and economic indicators.

The platform provides an interactive prediction system, analytics dashboard, historical price visualization, prediction history, and downloadable PDF reports.

## ✨ Features

- 🧠 Machine Learning based oil price prediction
- 📊 Interactive analytics dashboard
- 📈 Historical oil price trend visualization
- 🔮 Prediction confidence indicator
- 🧾 Prediction history
- 📄 PDF prediction reports
- 📋 Model performance metrics
- 🌐 Responsive React interface
- 🎨 Modern dark glassmorphism UI
- ⚡ FastAPI backend
- 🔗 REST API integration

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- React Router
- Lucide Icons

### Backend

- Python
- FastAPI
- Uvicorn
- Pydantic

### Machine Learning

- Scikit-Learn
- Pandas
- NumPy
- Joblib

## 🤖 Machine Learning Model

The current OilVision AI model uses **Linear Regression** for oil price prediction.

### Input Features

- Year
- Brent Oil Price
- USD / INR Exchange Rate
- Global Oil Demand
- Global Conflict

### Model Performance

| Metric | Value |
|---|---:|
| R² Score | 0.9859 |
| RMSE | 210.52 |
| MAE | 160.49 |

## 🖥️ Application

### Prediction

Enter the required economic indicators and generate an estimated Indian oil price.

### Dashboard

The dashboard provides:

- Latest prediction
- Brent oil data
- USD / INR data
- Global demand
- Model accuracy
- Historical price chart
- Model performance
- Recent predictions

### Prediction History

Previously generated predictions can be viewed directly from the dashboard.

### PDF Reports

Prediction results can be exported as PDF reports for further reference.

## 📁 Project Structure

```text
oilvision-ai/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── ml/
│   ├── dataset/
│   ├── notebooks/
│   └── scripts/
│
├── model/
│   ├── model.pkl
│   └── scaler.pkl
│
├── dataset/
│
├── notebooks/
│
├── scripts/
│
└── README.md