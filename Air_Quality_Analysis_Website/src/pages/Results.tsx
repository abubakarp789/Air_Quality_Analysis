import React, { useState } from 'react';
import histogramsPlot from '../assets/histograms_plotly.png';
import boxplotsPlot from '../assets/boxplots_plotly.png';
import datasetDescriptionPlot from '../assets/dataset_description.png';
import missingValuesPlot from '../assets/dataset_missing_values_bar_chart_plotly.png';
import pairPlot from '../assets/pairplot_plotly.png';
import timeSeriesPollutantsPlot from '../assets/time_series_pollutants_plotly.png';
import timeSeriesEnvPlot from '../assets/time_series_env_plotly.png';
import beforeOutlierTreatmentPlot from '../assets/before_outlier_treatment_boxplot_plotly.png';
import afterOutlierTreatmentPlot from '../assets/after_outlier_treatment_boxplot_plotly.png';
import cyclicalEncodingPlot from '../assets/cyclical_time_features_plotly.png';
import weekendBoxPlot from '../assets/weekend_boxplot_plotly.png';
import rushHourBoxPlot from '../assets/rush_hour_boxplot_plotly.png';
import seasonalBoxPlot from '../assets/season_boxplot_plotly.png';
import interactionPlot from '../assets/interaction_plotly.png';
import preprocessingCorrelationPlot from '../assets/preprocessing_correlation_plotly.png';
import correlationHeatmap from '../assets/correlation_heatmap.png';
import pollutantSensorCorrelationPlotly from '../assets/pollutant_sensor_correlation_plotly.png';
import pollutantEnvFactorCorrelationPlotly from '../assets/pollutant_env_factor_correlation_plotly.png';
import allCorrelationsCombined from '../assets/all_correlations_combined.png';
import correlationC6H6NOx from '../assets/correlation_C6H6(GT)_NOx(GT).png';
import correlationPT08S2NMHCNOx from '../assets/correlation_PT08.S2(NMHC)_NOx(GT).png';
import correlationPT08S1CONOx from '../assets/correlation_PT08.S1(CO)_NOx(GT).png';
import correlationNOxNO2GT from '../assets/correlation_NOx(GT)_NO2(GT).png';
import correlationNOxPT08S3NOx from '../assets/correlation_NOx(GT)_PT08.S3(NOx).png';
import correlationCOPT08S3NOx from '../assets/correlation_CO(GT)_PT08.S3(NOx).png';
import correlationC6H6PT08S4NO2 from '../assets/correlation_C6H6(GT)_PT08.S4(NO2).png';
import correlationPT08S2NMHC_PT08S4NO2 from '../assets/correlation_PT08.S2(NMHC)_PT08.S4(NO2).png';
import correlationNOxPT08S5O3 from '../assets/correlation_NOx(GT)_PT08.S5(O3).png';
import correlationCOGTNOx from '../assets/correlation_CO(GT)_NOx(GT).png';
import correlationC6H6PT08S3NOx from '../assets/correlation_C6H6(GT)_PT08.S3(NOx).png';
import correlationPT08S1COPT08S3NOx from '../assets/correlation_PT08.S1(CO)_PT08.S3(NOx).png';
import correlationPT08S3NOxPT08S5O3 from '../assets/correlation_PT08.S3(NOx)_PT08.S5(O3).png';
import correlationPT08S2NMHC_PT08S3NOx from '../assets/correlation_PT08.S2(NMHC)_PT08.S3(NOx).png';
import correlationCOPT08S5O3 from '../assets/correlation_CO(GT)_PT08.S5(O3).png';
import correlationC6H6PT08S5O3 from '../assets/correlation_C6H6(GT)_PT08.S5(O3).png';
import correlationPT08S2NMHC_PT08S5O3 from '../assets/correlation_PT08.S2(NMHC)_PT08.S5(O3).png';
import correlationCOGT_PT08S1CO from '../assets/correlation_CO(GT)_PT08.S1(CO).png';
import correlationPT08S1CO_C6H6GT from '../assets/correlation_PT08.S1(CO)_C6H6(GT).png';
import correlationPT08S1CO_PT08S2NMHC from '../assets/correlation_PT08.S1(CO)_PT08.S2(NMHC).png';
import correlationCOGT_PT08S2NMHC from '../assets/correlation_CO(GT)_PT08.S2(NMHC).png';
import correlationPT08S1CO_PT08S5O3 from '../assets/correlation_PT08.S1(CO)_PT08.S5(O3).png';
import correlationCOGT_C6H6GT from '../assets/correlation_CO(GT)_C6H6(GT).png';
import correlationC6H6GT_PT08S2NMHC from '../assets/correlation_C6H6(GT)_PT08.S2(NMHC).png';
import dailyPollutantsTsa from '../assets/daily_pollutants_tsa.png';
import monthlyPollutantsTsa from '../assets/monthly_pollutants_tsa.png';
import weeklyPatternsTsa from '../assets/weekly_patterns_tsa.png';
import decompositionCo from '../assets/decomposition_co.png';
import acfPacfCo from '../assets/acf_pacf_co.png';
import arimaForecastTsa from '../assets/arima_forecast_tsa.png';
import futureForecastTsa from '../assets/future_forecast_tsa.png';
import highPollutionThreshold from '../assets/high_pollution_threshold.png';
import modelComparison from '../assets/model_comparison.png';
import lrConfusionMatrix from '../assets/lr_confusion_matrix.png';
import lrRocCurve from '../assets/lr_roc_curve.png';
import combinedRocCurves from '../assets/combined_roc_curves.png';
import dtFeatureImportance from '../assets/dt_feature_importance.png';
import dtRocCurve from '../assets/dt_roc_curve.png';
import dtConfusionMatrix from '../assets/dt_confusion_matrix.png';
import rfFeatureImportance from '../assets/rf_feature_importance.png';
import rfRocCurve from '../assets/rf_roc_curve.png';
import rfConfusionMatrix from '../assets/rf_confusion_matrix.png';
import knnDecisionBoundary from '../assets/knn_decision_boundary.png';
import knnRocCurve from '../assets/knn_roc_curve.png';
import knnConfusionMatrix from '../assets/knn_confusion_matrix.png';
import svmDecisionBoundary from '../assets/svm_decision_boundary.png';
import svmFeatureCoefficients from '../assets/svm_feature_coefficients.png';
import svmRocCurve from '../assets/svm_roc_curve.png';
import svmConfusionMatrix from '../assets/svm_confusion_matrix.png';
import rnnRocCurve from '../assets/rnn_roc_curve.png';
import rnnConfusionMatrix from '../assets/rnn_confusion_matrix.png';
import rnnTrainingHistory from '../assets/rnn_training_history.png';

const modelMetrics = [
  { name: 'Logistic Regression', acc: 0.9859, prec: 0.97, recall: 0.96, f1: 0.97, auc: 0.9998, badge: 'Best' },
  { name: 'Decision Tree', acc: 0.9630, prec: 0.90, recall: 0.91, f1: 0.91, auc: 0.9748 },
  { name: 'Random Forest', acc: 0.9641, prec: 0.95, recall: 0.88, f1: 0.91, auc: 0.9941 },
  { name: 'KNN', acc: 0.9489, prec: 0.88, recall: 0.88, f1: 0.88, auc: 0.9767 },
  { name: 'SVM', acc: 0.9946, prec: 0.99, recall: 0.99, f1: 0.99, auc: 0.9999, badge: 'Best' },
  { name: 'RNN', acc: 0.9320, prec: 0.88, recall: 0.81, f1: 0.84, auc: 0.9772 },
];

export default function Results() {
  const [openSection, setOpenSection] = useState<string | null>('eda');

  const toggleSection = (sectionName: string) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 lg:p-12">
        <h1 className="text-center text-5xl font-extrabold text-gray-800 mb-8 pb-4 border-b-4 border-blue-300 tracking-tight leading-tight">
          Results & Visualizations
        </h1>

        {/* EDA Section */}
        <div className="mb-12 p-8 bg-blue-50 rounded-lg shadow-md border border-blue-200">
          <h2
            className="text-3xl font-bold text-blue-700 mb-6 flex items-center border-b-2 pb-3 border-blue-200 cursor-pointer"
            onClick={() => toggleSection('eda')}
          >
            <svg className="w-9 h-9 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            Exploratory Data Analysis (EDA) Results
            <svg
              className={`w-6 h-6 ml-auto transform transition-transform duration-300 ${openSection === 'eda' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </h2>
          {openSection === 'eda' && (
            <div className="animate-fade-in-down">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Univariate Distributions */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Univariate Distributions (Figure 1)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={histogramsPlot} alt="Histograms of numerical variables" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Most pollutant concentrations and some sensor readings are right-skewed, indicating frequent low values and occasional high events. Temperature is more symmetrical or bimodal; RH is skewed high.</p>
                </div>
                {/* Box Plots */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Box Plots (Figure 2)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={boxplotsPlot} alt="Box plots of numerical variables" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Box plots confirm skewness and reveal high-value outliers, especially for pollutants. Highlights the need for outlier treatment before modeling.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Dataset Description */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Dataset Description (Figure 3)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={datasetDescriptionPlot} alt="Dataset Description Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Overview of dataset structure and initial statistics.</p>
                </div>
                {/* Pair Plot */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Pair Plot (Figure 4)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={pairPlot} alt="Pair Plot of numerical variables" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Visualizes pairwise relationships and distributions of variables.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Missing Value Analysis */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Missing Value Analysis (Figure 5)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={missingValuesPlot} alt="Missing value bar chart" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">NMHC(GT) dropped due to &gt;90% missing; CO(GT), NOx(GT), NO2(GT) ~18% missing; others &lt;4%. Guided imputation strategy.</p>
                </div>
                {/* Temporal Patterns Pollutants */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Temporal Patterns of Pollutants (Figure 6)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={timeSeriesPollutantsPlot} alt="Time series plots of pollutants" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Time series plots show short-term fluctuations, seasonal trends (higher pollution in colder months), and daily cycles.</p>
                </div>
                {/* Temporal Patterns Environmental Factors */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Temporal Patterns of Environmental Factors (Figure 7)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={timeSeriesEnvPlot} alt="Time series plots of environmental factors" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Displays the temporal variations in temperature, relative humidity, and absolute humidity.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Data Preprocessing & Feature Engineering Section */}
        <div className="mb-12 p-8 bg-white rounded-lg shadow-md border border-gray-200">
          <h2
            className="text-3xl font-bold text-blue-700 mb-6 flex items-center border-b-2 pb-3 border-blue-200 cursor-pointer"
            onClick={() => toggleSection('preprocessing')}
          >
            <svg className="w-9 h-9 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h4v-2h-4v2zm0-4h4V7h-4v6z"/></svg>
            Data Preprocessing & Feature Engineering
            <svg
              className={`w-6 h-6 ml-auto transform transition-transform duration-300 ${openSection === 'preprocessing' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </h2>
          {openSection === 'preprocessing' && (
            <div className="animate-fade-in-down">
              {/* Missing Value Imputation (summary only) */}
              <div className="p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-200 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Missing Value Imputation</h3>
                <p className="text-base text-gray-700 text-justify leading-relaxed">NMHC(GT) was dropped. Regression imputation filled gaps in CO(GT), NOx(GT), and NO2(GT) where sensor data was available. Rolling mean and forward/backward fill handled remaining missing values, resulting in a complete dataset.</p>
              </div>
              {/* Outlier Treatment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Box Plots Before Outlier Treatment (Figure 8)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={beforeOutlierTreatmentPlot} alt="Box plots before outlier treatment" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Numerous extreme values, especially for pollutants like CO(GT) and NOx(GT), are evident. These could distort statistical summaries and model performance if left untreated.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Box Plots After Outlier Treatment (Figure 9)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={afterOutlierTreatmentPlot} alt="Box plots after outlier treatment" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">After IQR capping, extreme outliers are replaced by upper/lower bounds. Distributions are more robust for modeling.</p>
                </div>
              </div>
              {/* Feature Engineering */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Cyclical Encoding (Figure 10)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={cyclicalEncodingPlot} alt="Cyclical encoding plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Hour and Month were encoded using sine/cosine to preserve cyclical nature, improving model performance for time-based patterns.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Weekend vs. Weekday (Figure 11)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={weekendBoxPlot} alt="Weekend vs. Weekday Box Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">CO(GT) levels are lower and less variable on weekends, reflecting reduced human activity.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Rush Hour vs. Non-Rush Hour (Figure 12)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={rushHourBoxPlot} alt="Rush Hour vs. Non-Rush Hour Box Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">CO(GT) is higher during rush hours, indicating increased traffic emissions.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Seasonal Variation (Figure 13)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={seasonalBoxPlot} alt="Seasonal Box Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">CO(GT) is highest in winter, lowest in summer, showing strong seasonal patterns.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Interaction Feature (Figure 14)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={interactionPlot} alt="Interaction Feature Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Interaction terms (e.g., CO(GT) &times; T) allow models to capture more complex, non-additive relationships.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Correlation Heatmap After Preprocessing (Figure 15)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={preprocessingCorrelationPlot} alt="Post-Preprocessing Correlation Heatmap" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Correlation matrix after preprocessing and feature engineering helps assess relationships and checks for multicollinearity.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Correlation Analysis Section */}
        <div className="mb-12 p-8 bg-blue-50 rounded-lg shadow-md border border-blue-200">
          <h2
            className="text-3xl font-bold text-blue-700 mb-6 flex items-center border-b-2 pb-3 border-blue-200 cursor-pointer"
            onClick={() => toggleSection('correlation')}
          >
            <svg className="w-9 h-9 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z"/></svg>
            Correlation Analysis Results
            <svg
              className={`w-6 h-6 ml-auto transform transition-transform duration-300 ${openSection === 'correlation' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </h2>
          {openSection === 'correlation' && (
            <div className="animate-fade-in-down">
              {/* Correlation Heatmap */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Correlation Heatmap (Figure 16)</h3>
                <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                  <img src={correlationHeatmap} alt="Correlation Heatmap" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                </div>
                <p className="text-base text-gray-700 text-justify leading-relaxed">Strong positive correlations among CO(GT), C6H6(GT), PT08.S1(CO), PT08.S2(NMHC); NOx(GT) and NO2(GT) also strongly correlated; PT08.S3(NOx) shows strong negative correlations; environmental factors generally weaker.</p>
              </div>
              {/* Pollutant-Sensor Correlations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Pollutant-Sensor Correlation (Figure 17)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={pollutantSensorCorrelationPlotly} alt="Pollutant-Sensor Correlation" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Visualizes the correlation between target pollutants and sensor readings.</p>
                </div>
                {/* Pollutant-Environmental Factor Correlations */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Pollutant-Environmental Factor Correlation (Figure 18)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={pollutantEnvFactorCorrelationPlotly} alt="Pollutant-Environmental Factor Correlation" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Shows how pollutants correlate with environmental factors like temperature, humidity, and absolute humidity.</p>
                </div>
              </div>
              {/* All Correlations Combined */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">All Correlations Combined (Figure 19)</h3>
                <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                  <img src={allCorrelationsCombined} alt="All Correlations Combined" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                </div>
                <p className="text-base text-gray-700 text-justify leading-relaxed">A comprehensive view of all observed correlations within the dataset.</p>
              </div>

              {/* Detailed Pairwise Correlations */}
              <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center border-b pb-2 border-blue-100">Detailed Pairwise Correlations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">CO(GT) vs. C6H6(GT) (Figure 20)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationCOGT_C6H6GT} alt="CO(GT) vs. C6H6(GT) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Very strong positive linear relationship, likely shared sources (traffic).</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">CO(GT) vs. NOx(GT) (Figure 21)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationCOGTNOx} alt="CO(GT) vs. NOx(GT) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Positive correlation, indicating common sources in urban air quality.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">NOx(GT) vs. NO2(GT) (Figure 22)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationNOxNO2GT} alt="NOx(GT) vs. NO2(GT) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Strong positive correlation, as NO2 is often formed from NOx.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">C6H6(GT) vs. NOx(GT) (Figure 23)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationC6H6NOx} alt="C6H6(GT) vs. NOx(GT) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Positive correlation between benzene and nitrogen oxides, indicating similar emission sources.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">PT08.S2(NMHC) vs. NOx(GT) (Figure 24)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationPT08S2NMHCNOx} alt="PT08.S2(NMHC) vs. NOx(GT) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Correlation between non-methane hydrocarbons and nitrogen oxides, both traffic-related pollutants.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">PT08.S1(CO) vs. NOx(GT) (Figure 25)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationPT08S1CONOx} alt="PT08.S1(CO) vs. NOx(GT) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Relationship between CO sensor and nitrogen oxides, showing sensor's response to traffic emissions.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">NOx(GT) vs. PT08.S3(NOx) (Figure 26)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationNOxPT08S3NOx} alt="NOx(GT) vs. PT08.S3(NOx) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Compares the true NOx levels with the corresponding sensor readings.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">CO(GT) vs. PT08.S3(NOx) (Figure 27)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationCOPT08S3NOx} alt="CO(GT) vs. PT08.S3(NOx) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Examines the correlation between carbon monoxide and the NOx sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">C6H6(GT) vs. PT08.S4(NO2) (Figure 28)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationC6H6PT08S4NO2} alt="C6H6(GT) vs. PT08.S4(NO2) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Correlation between benzene and the NO2 sensor, indicative of shared sources.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">PT08.S2(NMHC) vs. PT08.S4(NO2) (Figure 29)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationPT08S2NMHC_PT08S4NO2} alt="PT08.S2(NMHC) vs. PT08.S4(NO2) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Examines the relationship between the NMHC sensor and the NO2 sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">NOx(GT) vs. PT08.S5(O3) (Figure 30)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationNOxPT08S5O3} alt="NOx(GT) vs. PT08.S5(O3) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Inverse relationship expected, as NOx reacts to form ozone.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">CO(GT) vs. PT08.S5(O3) (Figure 31)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationCOPT08S5O3} alt="CO(GT) vs. PT08.S5(O3) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Examines the correlation between carbon monoxide and the ozone sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">C6H6(GT) vs. PT08.S3(NOx) (Figure 32)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationC6H6PT08S3NOx} alt="C6H6(GT) vs. PT08.S3(NOx) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Shows the relationship between benzene and the NOx sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">PT08.S1(CO) vs. PT08.S3(NOx) (Figure 33)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationPT08S1COPT08S3NOx} alt="PT08.S1(CO) vs. PT08.S3(NOx) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Compares the CO sensor with the NOx sensor readings.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">PT08.S3(NOx) vs. PT08.S5(O3) (Figure 34)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationPT08S3NOxPT08S5O3} alt="PT08.S3(NOx) vs. PT08.S5(O3) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Examines the interaction between the NOx sensor and the ozone sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">PT08.S2(NMHC) vs. PT08.S3(NOx) (Figure 35)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationPT08S2NMHC_PT08S3NOx} alt="PT08.S2(NMHC) vs. PT08.S3(NOx) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Correlation between NMHC sensor and NOx sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">C6H6(GT) vs. PT08.S5(O3) (Figure 36)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationC6H6PT08S5O3} alt="C6H6(GT) vs. PT08.S5(O3) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Correlation between benzene and the ozone sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">PT08.S2(NMHC) vs. PT08.S5(O3) (Figure 37)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationPT08S2NMHC_PT08S5O3} alt="PT08.S2(NMHC) vs. PT08.S5(O3) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Relationship between the NMHC sensor and the ozone sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">CO(GT) vs. PT08.S1(CO) (Figure 38)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationCOGT_PT08S1CO} alt="CO(GT) vs. PT08.S1(CO) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Compares the true CO levels with the CO sensor readings.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">PT08.S1(CO) vs. C6H6(GT) (Figure 39)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationPT08S1CO_C6H6GT} alt="PT08.S1(CO) vs. C6H6(GT) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Correlation between the CO sensor and benzene levels.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">PT08.S1(CO) vs. PT08.S2(NMHC) (Figure 40)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationPT08S1CO_PT08S2NMHC} alt="PT08.S1(CO) vs. PT08.S2(NMHC) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Examines the relationship between the CO sensor and the NMHC sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">CO(GT) vs. PT08.S2(NMHC) (Figure 41)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationCOGT_PT08S2NMHC} alt="CO(GT) vs. PT08.S2(NMHC) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Correlation between carbon monoxide and the NMHC sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">PT08.S1(CO) vs. PT08.S5(O3) (Figure 42)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationPT08S1CO_PT08S5O3} alt="PT08.S1(CO) vs. PT08.S5(O3) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Relationship between the CO sensor and the ozone sensor.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">C6H6(GT) vs. PT08.S2(NMHC) (Figure 43)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={correlationC6H6GT_PT08S2NMHC} alt="C6H6(GT) vs. PT08.S2(NMHC) Scatter Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Correlation between benzene and the NMHC sensor.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Time Series Analysis Section */}
        <div className="mb-12 p-8 bg-white rounded-lg shadow-md border border-gray-200">
          <h2
            className="text-3xl font-bold text-blue-700 mb-6 flex items-center border-b-2 pb-3 border-blue-200 cursor-pointer"
            onClick={() => toggleSection('timeSeries')}
          >
            <svg className="w-9 h-9 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 12h-5V5h-2v7H7l4 4 4-4zM22 17c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10zm-2 0V7H4v10h16z"/></svg>
            Time Series Analysis Results
            <svg
              className={`w-6 h-6 ml-auto transform transition-transform duration-300 ${openSection === 'timeSeries' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </h2>
          {openSection === 'timeSeries' && (
            <div className="animate-fade-in-down">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Daily Pollutant Patterns (Figure 44)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={dailyPollutantsTsa} alt="Daily Pollutant Patterns" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Shows the average daily cycles of pollutant concentrations, revealing peak hours.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Monthly Pollutant Patterns (Figure 45)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={monthlyPollutantsTsa} alt="Monthly Pollutant Patterns" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Illustrates the monthly variations in pollutant levels, highlighting seasonal trends.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Weekly Pollution Patterns (Figure 46)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={weeklyPatternsTsa} alt="Weekly Pollution Patterns" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Analyzes weekly pollutant concentration patterns, showing differences between weekdays and weekends.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">CO(GT) Decomposition (Figure 47)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={decompositionCo} alt="CO(GT) Decomposition Plot" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Time series decomposition of CO(GT) highlights trend, seasonality, and residual components.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">ACF and PACF for CO(GT) (Figure 48)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={acfPacfCo} alt="ACF and PACF for CO(GT)" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Autocorrelation and partial autocorrelation plots help determine ARIMA model parameters (p, d, q).</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">ARIMA Forecast (Figure 49)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={arimaForecastTsa} alt="ARIMA Forecast" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Forecasts future CO(GT) values based on the fitted ARIMA model, showing predicted trends and confidence intervals.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Future Pollution Forecast (Figure 50)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={futureForecastTsa} alt="Future Pollution Forecast" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Projects future pollution levels, aiding in early warning systems and policy-making.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">High Pollution Threshold (Figure 51)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={highPollutionThreshold} alt="High Pollution Threshold" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Visualizes the percentage of time pollution levels exceed a predefined healthy threshold, identifying high-risk periods.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Classification Modeling Section */}
        <div className="mb-12 p-8 bg-blue-50 rounded-lg shadow-md border border-blue-200">
          <h2
            className="text-3xl font-bold text-blue-700 mb-6 flex items-center border-b-2 pb-3 border-blue-200 cursor-pointer"
            onClick={() => toggleSection('classification')}
          >
            <svg className="w-9 h-9 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 20V4h16l.01 16H4zm9-11h4V7h-4v2zm0 4h4v-2h-4v2zm0 4h4v-2h-4v2zM6 7h5v10H6V7z"/></svg>
            Classification Modeling Results
            <svg
              className={`w-6 h-6 ml-auto transform transition-transform duration-300 ${openSection === 'classification' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </h2>
          {openSection === 'classification' && (
            <div className="animate-fade-in-down">
              {/* Model Comparison Table */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Model Performance Comparison (Table 1)</h3>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Model</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Accuracy</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Precision</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Recall</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">F1-Score</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">AUC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modelMetrics.map((metric, index) => (
                        <tr key={index}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{metric.name} {metric.badge && <span className="ml-2 bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{metric.badge}</span>}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"><p className="text-gray-900 whitespace-no-wrap">{metric.acc}</p></td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"><p className="text-gray-900 whitespace-no-wrap">{metric.prec}</p></td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"><p className="text-gray-900 whitespace-no-wrap">{metric.recall}</p></td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"><p className="text-gray-900 whitespace-no-wrap">{metric.f1}</p></td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"><p className="text-gray-900 whitespace-no-wrap">{metric.auc}</p></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-base text-gray-700 text-justify leading-relaxed">Comparison of various classification models based on key performance metrics. SVM and Logistic Regression show the best performance.</p>
              </div>
              {/* Overall ROC Curve */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Combined ROC Curves (Figure 52)</h3>
                <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                  <img src={combinedRocCurves} alt="Combined ROC Curves" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                </div>
                <p className="text-base text-gray-700 text-justify leading-relaxed">Shows the ROC curves for all classification models, illustrating their trade-off between true positive rate and false positive rate.</p>
              </div>
              {/* Model Specific Visualizations */}
              <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center border-b pb-2 border-blue-100">Model-Specific Visualizations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Logistic Regression */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Logistic Regression ROC Curve (Figure 53)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={lrRocCurve} alt="Logistic Regression ROC Curve" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">The ROC curve for the Logistic Regression model, showing its excellent discriminative power.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Logistic Regression Confusion Matrix (Figure 54)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={lrConfusionMatrix} alt="Logistic Regression Confusion Matrix" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Illustrates the performance of the Logistic Regression model in terms of true positives, true negatives, false positives, and false negatives.</p>
                </div>
                {/* Decision Tree */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Decision Tree Feature Importance (Figure 55)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={dtFeatureImportance} alt="Decision Tree Feature Importance" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Shows the relative importance of features in the Decision Tree model's predictions.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Decision Tree ROC Curve (Figure 56)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={dtRocCurve} alt="Decision Tree ROC Curve" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">The ROC curve for the Decision Tree model.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Decision Tree Confusion Matrix (Figure 57)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={dtConfusionMatrix} alt="Decision Tree Confusion Matrix" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Confusion matrix for the Decision Tree model.</p>
                </div>
                {/* Random Forest */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Random Forest Feature Importance (Figure 58)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={rfFeatureImportance} alt="Random Forest Feature Importance" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Highlights the most influential features in the Random Forest model.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Random Forest ROC Curve (Figure 59)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={rfRocCurve} alt="Random Forest ROC Curve" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">The ROC curve for the Random Forest model.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Random Forest Confusion Matrix (Figure 60)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={rfConfusionMatrix} alt="Random Forest Confusion Matrix" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Confusion matrix for the Random Forest model.</p>
                </div>
                {/* KNN */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">KNN Decision Boundary (Figure 61)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={knnDecisionBoundary} alt="KNN Decision Boundary" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Visualizes how the K-Nearest Neighbors model separates different classes.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">KNN ROC Curve (Figure 62)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={knnRocCurve} alt="KNN ROC Curve" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">The ROC curve for the K-Nearest Neighbors model.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">KNN Confusion Matrix (Figure 63)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={knnConfusionMatrix} alt="KNN Confusion Matrix" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Confusion matrix for the K-Nearest Neighbors model.</p>
                </div>
                {/* SVM */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">SVM Decision Boundary (Figure 64)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={svmDecisionBoundary} alt="SVM Decision Boundary" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Illustrates how the Support Vector Machine model classifies data points.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">SVM Feature Coefficients (Figure 65)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={svmFeatureCoefficients} alt="SVM Feature Coefficients" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Shows the importance of features for the Support Vector Machine model.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">SVM ROC Curve (Figure 66)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={svmRocCurve} alt="SVM ROC Curve" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">The ROC curve for the Support Vector Machine model.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">SVM Confusion Matrix (Figure 67)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={svmConfusionMatrix} alt="SVM Confusion Matrix" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Confusion matrix for the Support Vector Machine model.</p>
                </div>
                {/* RNN */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">RNN Training History (Figure 68)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={rnnTrainingHistory} alt="RNN Training History" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Plots the training and validation loss/accuracy over epochs for the Recurrent Neural Network.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">RNN ROC Curve (Figure 69)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={rnnRocCurve} alt="RNN ROC Curve" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">The ROC curve for the Recurrent Neural Network model.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">RNN Confusion Matrix (Figure 70)</h3>
                  <div className="flex items-center justify-center w-full bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                    <img src={rnnConfusionMatrix} alt="RNN Confusion Matrix" className="w-full h-auto rounded shadow-md border border-gray-300"/>
                  </div>
                  <p className="text-base text-gray-700 text-justify leading-relaxed">Confusion matrix for the Recurrent Neural Network model.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 