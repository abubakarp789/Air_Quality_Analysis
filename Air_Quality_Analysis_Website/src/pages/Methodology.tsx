import React from 'react';

const phases = [
  'Project Proposal: Definition of project objectives, scope, and methodology.',
  'Exploratory Data Analysis (EDA): Initial examination of the dataset to understand its structure, distribution, and quality.',
  'Data Preprocessing: Cleaning, transformation, and feature engineering to prepare the data for analysis.',
  'Correlation Analysis: Investigation of relationships between different variables in the dataset.',
  'Time Series Analysis: Examination of temporal patterns and forecasting of pollution levels.',
  'Modeling: Development and evaluation of classification models to predict high pollution events.'
];

const relatedWork = [
  'Traditional air quality monitoring relies on fixed stations with reference methods, but recent advancements use low-cost sensor networks for greater spatial resolution.',
  'Time series analysis is widely used to understand temporal patterns in air pollution, including trends and cycles related to human activity and policy changes.',
  'Machine learning approaches, such as Random Forest and LSTM, are increasingly popular for air quality prediction due to their ability to capture complex relationships.',
  'Sensor calibration and validation are crucial for reliable monitoring, with research showing that proper calibration improves sensor accuracy.',
  'Gaps remain in integrating sensor data with environmental and temporal features, and in evaluating feature importance in prediction models.'
];

export default function Methodology() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-xl animate-fade-in-up">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-10 text-center tracking-tight">Methodology</h1>

      {/* Project Phases Timeline */}
      <div className="mb-10 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v4a1 1 0 102 0V8z" clipRule="evenodd"></path></svg>
          Project Phases
        </h2>
        <ol className="relative border-l border-blue-300 ml-4 pl-4 space-y-8">
          {phases.map((phase, idx) => (
            <li key={idx} className="mb-8 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full ring-6 ring-white font-bold text-lg">{idx+1}</span>
              <div className="bg-white p-5 rounded-lg shadow-md border border-blue-200 animate-fade-in delay-100">
                <p className="text-gray-800 text-lg leading-relaxed">{phase}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Dataset Description */}
      <div className="mb-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0v14h10V3H5zm4 2a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
          Dataset Description
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-4">
          <b>Source:</b> Air quality monitoring station in an Italian city (March 2004 - February 2005, hourly data, 9,357 observations, 15 variables).
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 text-lg space-y-2">
          <li><b>Date and Time:</b> Timestamps for each measurement</li>
          <li><b>Ground truth measurements:</b> CO(GT), C6H6(GT), NOx(GT), NO2(GT)</li>
          <li><b>Sensor readings:</b> PT08.S1(CO), PT08.S2(NMHC), PT08.S3(NOx), PT08.S4(NO2), PT08.S5(O3)</li>
          <li><b>Environmental factors:</b> Temperature (T), Relative Humidity (RH), Absolute Humidity (AH)</li>
        </ul>
        <p className="text-base text-gray-600 mt-4">Missing values denoted by -200. NMHC(GT) has &gt;90% missing data.</p>
      </div>

      {/* Data Preprocessing */}
      <div className="mb-10 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a2 2 0 012 2v8a2 2 0 01-2 2H6a3 3 0 01-3-3V6zm4.516 1.637l.488-.163A.75.75 0 018.75 7.5h.5a.75.75 0 01.733.637l.488.163A1.5 1.5 0 0110.5 10c0 1.25-.75 2.5-1.5 2.5s-1.5-1.25-1.5-2.5a1.5 1.5 0 011.5-1.5z" clipRule="evenodd"></path></svg>
          Data Preprocessing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Missing Value Treatment</h3>
            <ul className="list-disc list-inside ml-5 text-gray-700 text-base space-y-1">
              <li>NMHC(GT) dropped (&gt;90% missing)</li>
              <li>Regression-based imputation for CO(GT), NOx(GT), NO2(GT)</li>
              <li>Rolling mean + forward/backward fill for others</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Outlier Detection & Treatment</h3>
            <ul className="list-disc list-inside ml-5 text-gray-700 text-base space-y-1">
              <li>IQR method to identify outliers</li>
              <li>Outliers capped at Q1-1.5*IQR and Q3+1.5*IQR</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Feature Standardization</h3>
            <ul className="list-disc list-inside ml-5 text-gray-700 text-base space-y-1">
              <li>StandardScaler: zero mean, unit variance</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Feature Engineering</h3>
            <ul className="list-disc list-inside ml-5 text-gray-700 text-base space-y-1">
              <li>Temporal: Hour, Day, Month, Year, DayOfWeek</li>
              <li>Binary: Weekend, RushHour</li>
              <li>Categorical: Season, pollution levels</li>
              <li>Cyclical: Sine/cosine for Hour, Month</li>
              <li>Interaction: pollutant * humidity</li>
            </ul>
          </div>
        </div>
      </div>

      {/* EDA */}
      <div className="mb-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          Exploratory Data Analysis (EDA)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg shadow-sm border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Univariate Analysis</h3>
            <ul className="list-disc list-inside ml-5 text-gray-700 text-base space-y-1">
              <li>Descriptive statistics</li>
              <li>Histograms, box plots</li>
              <li>Missing value assessment</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg shadow-sm border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Bivariate Analysis</h3>
            <ul className="list-disc list-inside ml-5 text-gray-700 text-base space-y-1">
              <li>Scatter plots</li>
              <li>Correlation analysis</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg shadow-sm border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Temporal Analysis</h3>
            <ul className="list-disc list-inside ml-5 text-gray-700 text-base space-y-1">
              <li>Time series plots</li>
              <li>Aggregation by hour, day, month</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Correlation Analysis */}
      <div className="mb-10 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          Correlation Analysis
        </h2>
        <ul className="list-disc list-inside ml-6 text-gray-700 text-lg space-y-2">
          <li>Pearson correlation matrix for all numeric variables</li>
          <li>Heatmap visualization to identify patterns</li>
          <li>Scatter plots for strong correlations</li>
          <li>Examined relationships between pollutants, sensors, and environmental factors</li>
        </ul>
      </div>

      {/* Time Series Analysis */}
      <div className="mb-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v4a1 1 0 102 0V8z" clipRule="evenodd"></path></svg>
          Time Series Analysis
        </h2>
        <ul className="list-disc list-inside ml-6 text-gray-700 text-lg space-y-2">
          <li>Pattern visualization: daily, weekly, monthly averages</li>
          <li>Decomposition: trend, seasonal, residual components</li>
          <li>Autocorrelation: ACF and PACF plots</li>
          <li>ARIMA modeling for pollutant forecasting (e.g., CO(GT))</li>
        </ul>
      </div>

      {/* Classification Modeling */}
      <div className="mb-10 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a2 2 0 012 2v8a2 2 0 01-2 2H6a3 3 0 01-3-3V6zm4.516 1.637l.488-.163A.75.75 0 018.75 7.5h.5a.75.75 0 01.733.637l.488.163A1.5 1.5 0 0110.5 10c0 1.25-.75 2.5-1.5 2.5s-1.5-1.25-1.5-2.5a1.5 1.5 0 011.5-1.5z" clipRule="evenodd"></path></svg>
          Classification Modeling
        </h2>
        <ul className="list-disc list-inside ml-6 text-gray-700 text-lg space-y-2">
          <li>Binary classification: high pollution events (CO(GT) &gt; 75th percentile)</li>
          <li>Features: sensor readings, environmental, engineered temporal</li>
          <li>Train/test split (80/20), feature standardization</li>
          <li>Models: Logistic Regression, Decision Tree, Random Forest, KNN, SVM, RNN</li>
          <li>Evaluation: accuracy, AUC, precision, recall, F1-score, confusion matrices, ROC curves</li>
          <li>Feature importance from tree-based models</li>
        </ul>
      </div>

      {/* Related Work */}
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V7.414L10.586 4H6z" clipRule="evenodd"></path></svg>
          Related Work
        </h2>
        <ul className="list-disc list-inside ml-6 text-gray-700 text-lg space-y-2">
          {relatedWork.map((item, idx) => (
            <li key={idx} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
} 