# Air Quality Analysis Project

## 📋 Project Overview
This project is part of the CS-352 Data Analysis and Visualization course at Namal University's Department of Computer Science. The goal is to analyze air quality data, apply various data analysis techniques, and derive meaningful insights through visualization and modeling, following the academic project requirements.
This project is a comprehensive analysis of air quality data, developed as part of the Data Analysis and Visualization course. The project aims to analyze, visualize, and model air quality data to understand pollution patterns, identify key factors affecting air quality, and predict high pollution events.

## 📚 Course Information
- **Institution**: Namal University Mianwali
- **Department**: Computer Science
- **Program**: BS Computer Science
- **Semester**: 6th Semester, Session 2024
- **Course**: CS-352 Data Analysis and Visualization
- **Instructor**: M. Bilal Hadral

## 🎯 Project Objectives
- Perform exploratory data analysis on air quality data
- Identify temporal patterns and trends in pollutant concentrations
- Engineer relevant features for better predictive modeling
- Apply machine learning techniques for pollution prediction
- Visualize findings using interactive plots
- Develop a classification system for high pollution events

## 📝 Project Phases

### Phase 1: Project Proposal
- **Dataset**: [Air Quality Dataset](https://archive.ics.uci.edu/dataset/360/air+quality) from UCI Machine Learning Repository
- **Research Questions**:
  - What are the main factors affecting air quality?
  - How does air quality vary over time?
  - What are the relationships between different air pollutants?
  - Can we predict high pollution events based on current conditions?

### Phase 2: Exploratory Data Analysis (EDA)
- Data description and summary statistics
- Visualization of air quality metrics
- Initial insights and observations

### Phase 3: Data Preprocessing
- Handling missing values and outliers
- Removing duplicates
- Data transformation and normalization
- Feature engineering for time series analysis

### Phase 4: Correlation Analysis
- Correlation matrix of air quality parameters
- Identification of significant relationships between pollutants
- Time-lagged correlation analysis

### Phase 5: Time Series Analysis
- Analysis of air quality trends over time
- Seasonal pattern identification
- Time-based forecasting using ARIMA

### Phase 6: Modeling
- Regression analysis for air quality prediction
- Classification of air quality levels
- Model evaluation and comparison

### Phase 7: Final Report and Presentation
- Comprehensive report in IEEE format
- 10-minute presentation summarizing key findings
- Code documentation and reproducibility

## 📊 Dataset
This project uses the [Air Quality Dataset](https://archive.ics.uci.edu/dataset/360/air+quality) from the UCI Machine Learning Repository. The dataset contains 9358 instances of hourly averaged responses from an array of 5 metal oxide chemical sensors embedded in an Air Quality Chemical Multisensor Device.

### Key Features
- **Date/Time**: Timestamp of the measurement
- **CO(GT)**: True hourly averaged concentration CO in mg/m³
- **PT08.S1(CO)**: Tin oxide (SnO2) sensor response for CO
- **NMHC(GT)**: True hourly averaged concentration of Non-methane Hydrocarbons in μg/m³
- **C6H6(GT)**: True hourly averaged Benzene concentration in μg/m³
- **PT08.S2(NMHC)**: Titania (TiO2) sensor response for NMHC
- **NOx(GT)**: True hourly averaged NOx concentration in ppb
- **PT08.S3(NOx)**: Tungsten oxide (WO3) sensor response for NOx
- **NO2(GT)**: True hourly averaged NO2 concentration in μg/m³
- **PT08.S4(NO2)**: Tungsten oxide (WO3) sensor response for NO2
- **PT08.S5(O3)**: Indium oxide (In2O3) sensor response for O3
- **T**: Temperature in °C
- **RH**: Relative Humidity (%)
- **AH**: Absolute Humidity

## 🚀 Key Features

### 1. Comprehensive Data Analysis
- **Initial Data Exploration**: 
  - Examination of dataset structure and dimensions
  - Identification of missing values and data types
  - Summary statistics for all numerical variables
  - Distribution analysis of key pollutants

### 2. Exploratory Data Analysis (EDA)
- **Univariate Analysis**:
  - Distribution plots for all numerical variables
  - Outlier detection using box plots
  - Skewness and kurtosis analysis
- **Bivariate Analysis**:
  - Scatter plots for variable relationships
  - Correlation heatmaps
  - Pair plots for multivariate relationships
- **Temporal Analysis**:
  - Hourly, daily, and seasonal patterns
  - Time series decomposition
  - Rolling statistics visualization
- **Statistical Testing**:
  - Normality tests
  - Stationarity tests
  - Hypothesis testing for significant differences

### 3. Data Preprocessing
- **Data Cleaning**:
  - Handling missing values (imputation/removal)
  - Duplicate detection and removal
  - Outlier treatment using IQR method
- **Feature Engineering**:
  - DateTime feature extraction (hour, day, month, season)
  - Categorical encoding
  - Creation of interaction terms
- **Data Transformation**:
  - Log/normalization of skewed features
  - Standardization of numerical variables
  - Handling of categorical variables
- **Feature Selection**:
  - Correlation analysis
  - Feature importance ranking
  - Dimensionality reduction techniques

### 4. Advanced Feature Engineering
- **Temporal Features**:
  - Time-based aggregations
  - Time since last measurement
  - Time-based indicators (weekend, holiday, etc.)
- **Rolling Statistics**:
  - Moving averages (7-day, 30-day)
  - Rolling standard deviations
  - Exponential moving averages
- **Lag Features**:
  - Previous hour/day measurements
  - Difference from previous measurements
  - Percentage changes
- **Domain-Specific Features**:
  - Rush hour indicators
  - Weather condition classification
  - Pollution level categories

### 5. Time Series Analysis
- **Decomposition**: Separation of time series into trend, seasonal, and residual components
- **Stationarity Testing**: Using Augmented Dickey-Fuller test
- **ACF/PACF Analysis**: For identifying ARIMA model parameters
- **ARIMA Modeling**: For time series forecasting of pollutant levels

### 6. Machine Learning Models
- **Regression Models**:
  - Linear Regression
  - Random Forest Regressor
  - Gradient Boosting Regressor
- **Classification Models**:
  - Logistic Regression
  - Random Forest Classifier
  - Gradient Boosting Classifier
  - K-Nearest Neighbors (KNN)
  - Support Vector Machines (SVM)
  - Recurrent Neural Networks (RNN)
- **Model Evaluation**:
  - Cross-validation
  - Performance metrics (MSE, MAE, R² for regression; accuracy, precision, recall, F1 for classification)
  - ROC curves and AUC scores

## 🛠️ Installation

### Prerequisites
- Python 3.8+
- pip (Python package manager)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/abubakarp789/Air_Quality_Analysis.git
   cd Air_Quality_Analysis
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

## 📊 Running the Analysis

### Jupyter Notebooks
1. Launch Jupyter Notebook:
   ```bash
   jupyter notebook
   ```
2. Open either:
   - `Air_Quality_Analysis_Enhanced.ipynb` for static visualizations (Matplotlib/Seaborn)
   - `Air_Quality_Analysis_Plotly.ipynb` for interactive visualizations (Plotly)

## 🛠️ Tools and Technologies

### Core Libraries
- **Data Manipulation**:
  - Pandas for data structures and analysis
  - NumPy for numerical operations
  - SciPy for scientific computing

### Visualization
- **Static Visualizations**:
  - Matplotlib for basic plotting
  - Seaborn for statistical visualizations
- **Interactive Visualizations**:
  - Plotly for interactive graphs
  - Seaborn for correlation heatmaps and pair plots

### Machine Learning
- **Scikit-learn**:
  - Preprocessing (StandardScaler, MinMaxScaler)
  - Model selection (train_test_split, GridSearchCV, RandomizedSearchCV)
  - Regression and classification models
  - Model evaluation metrics
- **StatsModels**:
  - Time series analysis
  - Statistical testing
  - ARIMA modeling

### Deep Learning
- **TensorFlow/Keras**:
  - Implementation of RNNs
  - Neural network architectures

### Development Environment
- **Jupyter Notebook** for interactive development
- **Google Colab** for cloud-based execution
- **Git & GitHub** for version control
- **Python 3.8+** as the programming language

### Additional Tools
- **Datetime** for time series manipulation
- **OS** for file system operations
- **Warnings** for managing warning messages

## 📊 Results and Findings
Key findings from the analysis include:
- Identification of daily and weekly patterns in pollutant concentrations
- Strong correlations between certain pollutants
- Effective prediction of high pollution events using machine learning models
- Impact of meteorological conditions on air quality

## 📄 Academic Integrity
This project is submitted as part of the academic requirements for CS-352 Data Analysis and Visualization at Namal University. All work is original and properly cited where applicable.

## 👥 Team Members
- Abu Bakar (Team Lead)
- Raqib Hayat

## 📚 References
1. [UCI Machine Learning Repository - Air Quality Dataset](https://archive.ics.uci.edu/dataset/360/air+quality)
2. Python Data Science Handbook (VanderPlas, 2016)
3. Scikit-learn: Machine Learning in Python (Pedregosa et al., 2011)
4. Pandas: Powerful data structures for data analysis (McKinney, 2010)

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- Course instructors and teaching assistants for their guidance
- UCI Machine Learning Repository for providing the dataset
- Open-source community for the Python data science ecosystem

