import React from 'react';
import { Link } from 'react-router-dom';

export default function Conclusions() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 lg:p-12">
        <h1 className="text-center text-5xl font-extrabold text-gray-800 mb-8 pb-4 border-b-4 border-blue-300 tracking-tight leading-tight">
          Conclusions
        </h1>

        <div className="mb-10 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center border-b-2 pb-3 border-blue-200">
            <svg className="w-8 h-8 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z"/></svg>
            Comprehensive Summary
          </h2>
          <p className="text-base text-gray-700 text-justify leading-relaxed">
            This comprehensive analysis, enhanced with detailed visualizations, provided valuable insights into the patterns, relationships, and dynamics of urban air pollution in the studied Italian city. The project successfully addressed the research questions and demonstrated the effectiveness of data-driven approaches for understanding and predicting air quality.
          </p>
        </div>

        <div className="mb-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center border-b-2 pb-3 border-blue-200">
            <svg className="w-8 h-8 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z"/></svg>
            Key Findings
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed">
            <li><b>Temporal patterns:</b> Clear seasonal variations (higher in winter, lower in summer), distinct weekly cycles (lower on weekends), and pronounced diurnal peaks during rush hours.</li>
            <li><b>Pollutant relationships:</b> Strong positive correlations between CO, C6H6, and NOx; weak to moderate correlations with environmental factors; varying sensor reliability (PT08.S1 and PT08.S2 excellent, PT08.S4 poor).</li>
            <li><b>Predictive modeling:</b> High performance of classification models (SVM accuracy 99.46%, near-perfect AUC); CO sensor (PT08.S1) consistently most important predictor; seasonal and other sensor features also significant.</li>
          </ul>
        </div>

        <div className="mb-10 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center border-b-2 pb-3 border-blue-200">
            <svg className="w-8 h-8 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7zm4 0h-2V7h2v7zm0 4h-2v-2h2v2z"/></svg>
            Implications
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed">
            <li><b>Monitoring strategies:</b> Sensor validation/calibration is crucial; strong pollutant correlations suggest monitoring a subset may suffice for some applications.</li>
            <li><b>Intervention timing:</b> Temporal patterns can inform when to intervene (e.g., winter, rush hours).</li>
            <li><b>Predictive systems:</b> High model performance supports early warning systems for high pollution events; key predictors guide variable selection.</li>
            <li><b>Source attribution:</b> Patterns and correlations provide insight into likely sources (traffic, heating), with weekday-weekend and seasonal effects.</li>
          </ul>
        </div>

        <div className="mb-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center border-b-2 pb-3 border-blue-200">
            <svg className="w-8 h-8 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16H9v-2h2v2zm0-4H9V7h2v7zm4 0h-2V7h2v7zm0 4h-2v-2h2v2z"/></svg>
            Limitations
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed">
            <li><b>Data limitations:</b> Only one year, single location; some variables had significant missing data; lacks other relevant factors (e.g., wind, precipitation, traffic volume).</li>
            <li><b>Methodological limitations:</b> Basic ARIMA model for forecasting; classification threshold was arbitrary; feature importance shows association, not causation.</li>
            <li><b>Scope limitations:</b> Focused on a limited set of pollutants and models; no spatial analysis due to single-location data.</li>
          </ul>
        </div>

        <div className="p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center border-b-2 pb-3 border-blue-200">
            <svg className="w-8 h-8 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16H9v-2h2v2zm0-4H9V7h2v7zm4 0h-2V7h2v7zm0 4h-2v-2h2v2z"/></svg>
            References & Acknowledgments
          </h2>
          <div className="text-base text-gray-700 leading-relaxed space-y-3">
            <p>Please refer to the <Link to="/references" className="text-blue-600 hover:underline font-medium">References page</Link> for a comprehensive list of sources.</p>
            <p className="mt-4">Acknowledgement to Sir Bilal Hidral and Namal University Mianwali</p>
          </div>
        </div>
      </div>
    </section>
  );
} 