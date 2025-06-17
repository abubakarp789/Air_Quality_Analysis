# Air Quality Analysis Web Application

## Project Overview

A modern, responsive web application to showcase air quality analysis results from a dataset containing hourly air quality readings and sensor data (2004-2005). Features interactive data visualizations, research findings, and methodology in a professional interface, ready for Microsoft Azure deployment.

## Tech Stack

- **Frontend:** React.js (TypeScript), Tailwind CSS
- **Backend:** Node.js (Express.js)
- **Data Processing & Visualization:** Python (Plotly, FastAPI)
- **API Integration:** REST API
- **Deployment:** Microsoft Azure (App Service, Functions, Blob Storage)

## Structure

```
Air_Quality_Analysis/
│
├── backend/                # Node.js + Express API Gateway
├── frontend/               # React + TypeScript + Tailwind
├── python_service/         # Python FastAPI microservice for Plotly
├── data/                   # Dataset and processed files
├── azure/                  # Azure deployment scripts/configs
├── README.md
└── .env.example
```

## Main Features

- Interactive Plotly visualizations (correlation heatmap, time series, bar charts, scatter plots, feature importance, seasonal/weekly patterns)
- Professional, scientific UI
- Azure-ready deployment

## Setup & Deployment

See detailed instructions in each subdirectory and the Azure deployment section.
