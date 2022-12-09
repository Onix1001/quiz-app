import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Answer from "./components/answer";
import "./index.css";

function App() {

  const [index, setIndex] = useState(null)

  useEffect(() => {

    setIndex(Math.floor(Math.random() * 5))
    return () => {

    }
  }, [])


  return (
    <>
      <div className="min-h-screen bg-purple-400 font-comic p-10 text-center flex flex-col gap-y-10 justify-center items-center">
        <h1 className="text-6xl font-bold -mt-40 ">Ez Quiz</h1>
        <>
          <h3 className="text-2xl font-semibold text-gray-800">sebuah quiz sederhana seputar indonesia, Tekan 'start' untuk memulai</h3>
          <Link to={`/soal/` + index} className="px-5 py-2 bg-white text-xl rounded-lg font-semibold duration-300 hover:bg-slate-100">Start</Link>
        </>
      </div>
    </>
  )
}

export default App;
