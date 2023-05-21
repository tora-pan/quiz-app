"use client";
import React from "react";

type Props = {};

const QuizControls = (props: Props) => {
  const handleClickSkip = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    console.log("skip");
  }
  
  const handleClickSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    console.log("skip");
  };
  return (
    <div className="mb-auto border w-full flex justify-between">
      <button
        className="w-full py-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-md hover:bg-green-500 ease px-9 md:w-auto"
        onClick={handleClickSkip}
      >
        Skip
      </button>

      <button
        className="w-full py-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-md hover:bg-green-500 ease px-9 md:w-auto"
        onClick={handleClickSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default QuizControls;
