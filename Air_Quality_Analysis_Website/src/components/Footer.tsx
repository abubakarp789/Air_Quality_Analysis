import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-green-50 text-gray-700 py-8 mt-auto shadow-inner border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-3">
          <p className="text-lg font-semibold text-blue-800">Air Quality Analysis Project</p>
          <p className="text-sm">Final Semester Project for CS-352 Data Analysis and Visualization</p>
          <p className="text-sm">Namal University, Mianwali</p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-3">
          <p className="text-base font-medium">Submitted by:</p>
          <p className="text-sm">Abubakar (NUM-BSCS-2022-41)</p>
          <p className="text-sm">Raqib Hayat (NUM-BSCS-2022-40)</p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-3">
          <p className="text-base font-medium">Instructor: M. Bilal Hidral</p>
          <p className="text-sm">Semester: 6th – Spring 2025</p>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Air Quality Analysis Project | Designed by Abubakar & Raqib</p>
      </div>
    </footer>
  );
} 