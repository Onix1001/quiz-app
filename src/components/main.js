import { useState } from "react";
import { useDispatch } from "react-redux";
import { mulai } from "../features/quizSlice";

export default function Main() {

    const [ham_active, setHam_active] = useState(false)
    const [menu, setMenu] = useState(true)
    const dispatch = useDispatch()

    return (
        <>
            <nav className="bg-transparent absolute text-dark top-0 left-0 w-full flex items-center z-10">
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        <div className="px-10">
                            <p className="font-bold text-xl py-6">Quizeez</p>
                        </div>
                        <div className="flex items-center px-4">
                            <button onClick={() => {
                                setHam_active(!ham_active)
                                setMenu(!menu)
                            }} id="hamburger" name="hamburger" type="button" className={ham_active ? 'hamburger-active' : ''}>
                                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                            </button>
                            <nav id="nav-menu" className={menu ? 'hidden' : "absolute bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full"}>
                                <ul className="block rounded-lg">
                                    <li className="group">
                                        <a href="#Home" className="text-base text-dark py-2 px-8 flex bg-[#f0f1f2] hover:bg-white">Profile</a>
                                        <a href="#Home" className="text-base text-dark py-2 px-8 flex bg-[#f0f1f2] hover:bg-white">Log in</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="min-h-screen px-5 py-32 text-center bg-white flex flex-col items-center gap-y-1">
                <h1 className="text-4xl font-bold text-primary">Uji Pengetahuan Anda</h1>
                <h3 className="text-2xl font-bold text-light">Buktikan kepintaran-mu sekarang juga</h3>
                <button
                    className="mt-10 px-5 py-2 bg-primary text-white text-xl rounded-lg font-semibold duration-300 hover:bg-secondary"
                    onClick={() => {
                        dispatch(mulai())
                    }}
                >Mulai Quiz</button>
            </div>
        </>
    )
}