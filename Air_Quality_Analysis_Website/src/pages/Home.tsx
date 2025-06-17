import React from 'react';

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-xl animate-fade-in-up">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
          Air Quality Analysis
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col items-center md:items-end text-right md:text-right space-y-2 border-r md:border-r-2 border-blue-200 pr-8">
          <p className="text-lg font-medium text-gray-700">Submitted by:</p>
          <p className="text-xl font-semibold text-blue-700">Abubakar (NUM-BSCS-2022-41)</p>
          <p className="text-xl font-semibold text-blue-700">Raqib Hayat (NUM-BSCS-2022-40)</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-left md:text-left space-y-2 pl-8">
          <p className="text-lg font-medium text-gray-700">Course & University:</p>
          <p className="text-xl font-semibold text-blue-700">CS-352 Data Analysis and Visualization</p>
          <p className="text-xl font-semibold text-blue-700">Namal University Mianwali</p>
          <p className="text-lg font-medium text-gray-700">Instructor: M. Bilal Hidral</p>
          <p className="text-lg font-medium text-gray-700">Semester: 6th, Spring 2025</p>
          <p className="text-lg font-medium text-gray-700">Date: June 13, 2025</p>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg shadow-lg border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Project Summary</h2>
        <p className="text-gray-800 text-lg leading-relaxed text-justify">
          This comprehensive report presents a detailed analysis of air quality data collected from an Italian city over a one-year period. The project aimed to understand patterns in air pollution, identify relationships between different pollutants and environmental factors, and develop predictive models for air quality classification. The analysis was conducted in six phases: project proposal, exploratory data analysis, data preprocessing, correlation analysis, time series analysis, and modeling. The dataset contained measurements of various pollutants (CO, NOx, NO2, C6H6), sensor readings, and environmental factors (temperature, humidity). Key findings include strong correlations between certain pollutants, clear seasonal and weekly patterns in pollution levels, and the successful development of classification models to predict high pollution events with up to 99.46% accuracy. The Support Vector Machine (SVM) model demonstrated the best performance, closely followed by Logistic Regression. Feature importance analysis consistently identified the CO sensor reading as the most significant predictor, along with seasonal factors. The insights from this project, enhanced with detailed visualizations, contribute to a better understanding of urban air pollution dynamics and provide a foundation for developing effective air quality management strategies and early warning systems.
        </p>
      </div>
    </section>
  );
} 