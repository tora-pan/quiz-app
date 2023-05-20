import React from "react";
import Card from "./Card";

type Props = {};

const QuizBody = (props: Props) => {
  return (
    <div className="flex flex-grow flex-row border w-full justify-between items-center m-4 p-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default QuizBody;
