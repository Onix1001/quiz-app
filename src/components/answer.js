import { useState } from "react"
import { Link } from "react-router-dom";
import { Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import App from "../App"

export default function Answer() {

    const { index } = useParams()
    const [ans, setAns] = useState("")
    const [showModal, setShowModal] = useState(false);
    const soal = [
        {
            qs: "Siapa nama presiden ketiga Indonesia?",
            ans: "habibie"
        },
        {
            qs: "Apa ibukota Jawa Tengah?",
            ans: "semarang"
        },
        {
            qs: "Apa rumah adat Provinsi Kalimantan Barat?",
            ans: "rumah panjang"
        },
        {
            qs: "Kapan Hari Kartini diperingati?",
            ans: "21 april"
        },
        {
            qs: "Apa alat musik tradisional Nusa Tenggara Timur?",
            ans: "sasando"
        }
    ]


    const cekjawaban = (ans, e) => {
        e.preventDefault()
        if (ans.toLowerCase() === soal[index].ans) {
            setShowModal(true)
        }
    }

    return (
        <>
            <form onSubmit={cekjawaban.bind(this, ans)} className="min-h-screen bg-purple-400 font-comic p-10 text-center flex flex-col gap-y-10 justify-center items-center" action="">
                <h3 className="text-3xl font-semibold -mt-40">{soal[index].qs}</h3>
                <input onChange={function (e) {
                    setAns(e.target.value)
                }} value={ans} className="text-xl p-2 outline-none" type="text" />
                <button type="submit" className="px-5 py-2 bg-white text-xl rounded-lg font-semibold duration-300 hover:bg-slate-100">Check</button>
            </form>
            {showModal ? (
                <>
                    <div
                        className="w-72 xl:w-full mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none animate-pop"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-xl xl:text-3xl font-semibold">
                                        Yeey, Jawaban kamu Benar
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 xl:text-lg text-md leading-relaxed">
                                        Makasih .... udah main kesini!!
                                    </p>
                                    <p className="my-4 text-slate-500 xl:text-lg text-md leading-relaxed">
                                        Kapan-kapan main lagi ya 😊
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <Link
                                        to='/'
                                        className="text-red-500 background-transparent font-bold px-3 py uppercase xl:px-6 xl:py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false)
                                            return <App />
                                        }}
                                    >
                                        Close
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
