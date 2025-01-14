import React from 'react';
import { ChevronRight } from "lucide-react";

const StepperHeader = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Importation" },
    { number: 2, label: "Sommaire" }
  ];

  return (
    <div className={`flex justify-center items-center py-6 border-b transition-colors duration-300
      ${currentStep === 1 ? 'bg-purple-50' : 
        currentStep === 2 ? 'bg-green-50' : 'bg-white'}`}>
      <div className="flex gap-6 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all 
                ${currentStep === step.number 
                  ? 'bg-purple-600 text-white ring-2 ring-blue-200' 
                  : currentStep > step.number
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100'}`}
              >
                {step.number}
              </div>
              <span className={`text-sm ${
                currentStep === step.number 
                ? 'font-medium text-purple-600' 
                : currentStep > step.number
                ? 'font-medium text-green-500'
                : 'text-gray-500'}`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <ChevronRight className={`h-4 w-4 ${
                currentStep > 1 
                ? 'text-green-500' 
                : 'text-gray-400'}`} 
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepperHeader;
