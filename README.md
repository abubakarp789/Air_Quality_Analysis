# 🌬️ Air Quality Analysis — Unmasking the Invisible Enemy!

> **Breathe in.** Did you know that 9 out of 10 people worldwide breathe polluted air every day?  
> What if you could predict the next pollution spike, spot hidden patterns, and help make your city healthier—all with Python?

---

## 🚀 What Makes This Project Awesome?

- **Real-world data, real impact:** Analyze 9,000+ hours of air quality from Italy's streets.
- **From raw numbers to "aha!" moments:** See pollution trends, weather effects, and more.
- **Interactive dashboards:** Play with the data—don't just look at it!
- **Machine learning magic:** Predict high-pollution events before they happen.
- **For everyone:** Whether you're a student, scientist, or just curious, you'll find something to love.

---

## 👀 See It in Action!

- 📈 **Stunning plots:** Hourly, daily, and seasonal pollution trends.
- 🔥 **Hotspot detection:** Where and when is the air dirtiest?
- 🤖 **AI-powered predictions:** Will tomorrow be a "bad air" day?
- 🕹️ **Interactive dashboards:** Explore with a click!

*All outputs and dashboards are in the `exploratory_data_analysis/`, `feature_engineering/`, and `modelling_analysis_results/` folders. Try `Air_Quality_Analysis_Plotly.ipynb` for the full interactive experience!*

---

## 🎯 Who Should Use This?

- **Students:** Ace your data science class with a real-world project.
- **Researchers:** Build on our models or test new ideas.
- **City planners:** Get inspired to make data-driven decisions.
- **Anyone who breathes air!**

---

## 💡 Did You Know?

> *Air pollution kills 7 million people every year—more than car accidents and diabetes combined.*

---

## 🏃‍♂️ Ready to Dive In?

**Fork it, run it, and start exploring! Your journey from raw data to clean air starts here.**

---

## ⚡ Quick Start

1. **Clone & Set Up**
   ```bash
   git clone https://github.com/abubakarp789/Air_Quality_Analysis.git
   cd Air_Quality_Analysis
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On Mac/Linux:
   source venv/bin/activate
   pip install -r requirements.txt
   ```
2. **Launch the Notebooks**
   ```bash
   jupyter notebook
   ```
   - Open `Air_Quality_Analysis_Enhanced.ipynb` for static visualizations
   - Open `Air_Quality_Analysis_Plotly.ipynb` for interactive dashboards

---

## 🛠️ Tech Stack & Tools
- **Python 3.8+** (core language)
- **Pandas, NumPy, SciPy** (data wrangling)
- **Matplotlib, Seaborn, Plotly** (visualization)
- **Scikit-learn, StatsModels** (ML & time series)
- **TensorFlow/Keras** (deep learning)
- **Jupyter Notebook, Google Colab** (development)

---

## 📊 Project Workflow at a Glance
1. **Data Loading & Exploration:**
   - 9,357 hourly records from the [UCI Air Quality Dataset](https://archive.ics.uci.edu/dataset/360/air+quality)
   - Initial checks for missing values, outliers, and data types
2. **Exploratory Data Analysis (EDA):**
   - Univariate, bivariate, and temporal analysis
   - Outlier detection, distribution plots, and correlation heatmaps
3. **Data Preprocessing:**
   - Imputation, outlier capping, normalization, and feature engineering
   - Creation of rush hour, weekend, season, lag, rolling, and interaction features
4. **Correlation Analysis:**
   - Identify strong relationships between pollutants, sensors, and weather
   - Visualize with heatmaps and scatter plots
5. **Time Series Analysis:**
   - Decomposition (trend, seasonality, residuals)
   - Stationarity tests, ACF/PACF, ARIMA forecasting
6. **Modeling & Prediction:**
   - Regression (Linear, Random Forest, Gradient Boosting)
   - Classification (Logistic Regression, Random Forest, KNN, SVM, RNN)
   - Model evaluation: MSE, R², accuracy, F1, ROC/AUC
7. **Results & Insights:**
   - Key findings, best models, and actionable conclusions

---

## 🏆 Results Snapshot
- **Best classification model:** Random Forest & RNN (highest AUC and accuracy)
- **Key correlations:** C6H6(GT) ↔ PT08.S2(NMHC) (r=0.99), CO(GT) ↔ C6H6(GT) (r=0.90)
- **Impactful features:** Rush hour, weekend, season, lagged pollutant values
- **Forecasting:** ARIMA predicts future CO(GT) trends with strong performance

---

## 👩‍💻 For Learners & Practitioners
- **Students:** Use this as a template for your own data science projects
- **Researchers:** Extend the analysis, try new models, or apply to other datasets
- **Data Scientists:** Benchmark your own pipelines or feature engineering ideas
- **Anyone:** Learn by example—every step is documented and reproducible!

---

## 👥 Team
- Abu Bakar (Team Lead)
- Raqib Hayat

## 📄 License
MIT License — see [LICENSE](LICENSE)

## 🙏 Acknowledgments
- Namal University, CS-352 Data Analysis & Visualization
- UCI Machine Learning Repository
- Open-source Python community

---

> *"Turning raw data into clean air — one line of code at a time."*
