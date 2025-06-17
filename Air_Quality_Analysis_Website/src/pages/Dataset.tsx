import React from 'react';
import datasetDescriptionPlot from '../assets/dataset_description_plotly.png';

export default function Dataset() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-xl animate-fade-in-up">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-8 text-center tracking-tight">Dataset Overview</h1>

      <div className="mb-10 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          Key Information
        </h2>
        <p className="text-lg text-gray-700 mb-6">Source: UCI Machine Learning Repository - <a href="https://archive.ics.uci.edu/dataset/360/air+quality" className="text-blue-600 hover:text-blue-800">UCI Air Quality DataSet</a></p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Time Range</th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Variables</th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Sensors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 px-6 whitespace-nowrap text-base text-gray-800">March 2004 - April 2005</td>
                <td className="py-4 px-6 whitespace-nowrap text-base text-gray-800">CO(GT), NMHC(GT), C6H6(GT), NOx(GT), NO2(GT), T, RH, AH</td>
                <td className="py-4 px-6 whitespace-nowrap text-base text-gray-800">PT08.S1(CO), PT08.S2(NMHC), PT08.S3(NOx), PT08.S4(NO2), PT08.S5(O3)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          Dataset Description Plot
        </h2>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200">
          <img src={datasetDescriptionPlot} alt="Dataset Description Plot" className="w-full max-w-2xl h-auto rounded shadow-lg border border-gray-300" />
          <p className="text-sm text-gray-700 mt-4 text-center">This plot provides a visual summary of the dataset, highlighting distributions and potential patterns across different variables.</p>
        </div>
      </div>
    </section>
  );
} 