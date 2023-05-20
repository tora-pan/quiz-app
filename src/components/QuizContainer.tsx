import React from 'react'
import QuizHeader from './QuizHeader';
import QuizBody from './QuizBody';
import QuizControls from './QuizControls';
import ProgressBar from './ProgressBar';

type Props = {}

const QuizContainer = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <ProgressBar/>
      <QuizHeader />
      <QuizBody />
      <QuizControls />
    </div>
  );
}

export default QuizContainer
