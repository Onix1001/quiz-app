import { useSelector } from "react-redux"
import Main from "./components/main"
import Quiz from "./components/quiz"

export default function App() {

  const state = useSelector(state => state.quiz.value)

  return (
    <>
      {state.gamestate === "mulai" ? <Quiz /> : <Main />}
    </>
  )

}

