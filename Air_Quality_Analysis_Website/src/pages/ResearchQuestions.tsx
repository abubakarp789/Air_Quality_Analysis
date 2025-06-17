import React, { useState } from 'react';

const motivation = `Air pollution is a significant environmental and public health concern in urban areas worldwide. The motivation for this project stems from the need to understand air pollution patterns, inform urban planning, support policy development, and leverage technological advancements for real-time monitoring and prediction.`;

const questions = [
  {
    title: 'Patterns and Trends in Air Pollutant Concentrations',
    content: 'What are the patterns and trends in air pollutant concentrations over different time scales (hourly, daily, weekly, monthly)?'
  },
  {
    title: 'Pollutant Correlations',
    content: 'How do different pollutants correlate with each other and with environmental factors such as temperature and humidity?'
  },
  {
    title: 'Sensor Reliability',
    content: 'How reliable are the chemical sensor readings compared to the ground truth measurements of pollutants?'
  },
  {
    title: 'Machine Learning for Prediction',
    content: 'Can machine learning models effectively predict high pollution events based on sensor readings, environmental factors, and temporal features?'
  },
  {
    title: 'Key Predictive Factors',
    content: 'Which factors are most important in determining air pollution levels and predicting high pollution events?'
  }
];

export default function ResearchQuestions() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-xl animate-fade-in-up">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-10 text-center tracking-tight">Motivation & Research Questions</h1>

      <div className="mb-10 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13V9a1 1 0 012 0v4a1 1 0 01-2 0zm1-8a1 1 0 100-2 1 1 0 000 2z"></path></svg>
          Motivation
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed text-justify">{motivation}</p>
      </div>

      <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center">
        <svg className="w-10 h-10 mr-3 text-green-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 18a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5zM10.5 8.25a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0V8.25zM12 16a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" /></svg>
        Research Questions
      </h2>
      <div className="space-y-4">
        {questions.map((q, idx) => (
          <div key={q.title} className="rounded-lg shadow-md overflow-hidden border border-gray-200">
            <button
              className={`w-full text-left py-4 px-6 text-xl font-semibold transition-all duration-300 flex justify-between items-center ${open === idx ? 'bg-blue-200 text-blue-900' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {q.title}
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${open === idx ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {open === idx && (
              <div className="p-6 bg-white border-t border-gray-200 animate-fade-in-down">
                <p className="text-gray-700 text-lg leading-relaxed">{q.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 