import React from "react";

type Props = {};

const QuizControls = (props: Props) => {
  return <div className="mb-auto border w-full flex justify-between">
    <button>Skip</button>
    <button>Submit</button>
  </div>;
};

export default QuizControls;
