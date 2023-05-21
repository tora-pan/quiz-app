import { createContext, useContext } from "react";

interface QuizState {
  questionNumber: number;
  questionState: "PASSED" | "FAILED" | "UNKNOWN"
}

const QuizContext = createContext<QuizState | null>(null);

const useQuizState = () => {
  const currentQuizStateContext = useContext(QuizContext);

  if (!currentQuizStateContext){
    throw new Error("useQuizState has to be used within <QuizContext.Provider>");
  }
  return QuizContext;
}
