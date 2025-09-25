import { useState } from "react";

interface StepperProps {
  steps: { title: string }[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  /*TODO: Replace this with the actual Stepper implementation*/

  return (
    <div className="h-[100px] rounded flex justify-center items-center">
      <div className="flex items-center justify-center ">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={index} className="flex items-center">
              <div
                className={` relative
              flex items-center justify-center w-[30px] text-xs font-semibold h-[30px] rounded-full border-2
              ${
                isActive || isCompleted
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-200 text-gray-700 "
              }
            `}
              >
                {index + 1}
                <p
                  className={`text-xs leading-4 font-semibold absolute top-[32px]
    						${isCompleted || isActive ? "text-gray-700" : "text-gray-500"}
 							`}
                >
                  {step.title}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="w-16 h-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-gray-200 rounded" />
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded transition-all duration-300"
                    style={{
                      width: currentStep > index ? "100%" : "0%",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
