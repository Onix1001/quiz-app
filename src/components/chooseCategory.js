import { useState } from "react"
import Answer from "./answer"

const ChooseCategory = () => {

    const [isChoosed, setIsChoosed] = useState(false)

    const category = {
        kota: ['bandung', 'yogyakarta', 'jakarta'],
        bandara: [],
        gunung: ['lawu', 'kelud', 'krakatau']
    }

    const pilihCategori = (e, val) => {
        setIsChoosed(true)
    }

    return (
        <>
            {isChoosed ?
                <Answer />
                :
                <div className="flex gap-x-5 ">
                    <button onClick={pilihCategori.bind(this)} className="px-5 py-2 bg-white text-xl rounded-lg font-semibold duration-300 hover:bg-slate-100">Kota</button>
                    <button onClick={pilihCategori.bind(this)} className="px-5 py-2 bg-white text-xl rounded-lg font-semibold duration-300 hover:bg-slate-100">Bandara</button>
                    <button onClick={pilihCategori.bind(this)} className="px-5 py-2 bg-white text-xl rounded-lg font-semibold duration-300 hover:bg-slate-100">Gunung</button>
                </div>
            }
        </>
    )
}

export default ChooseCategory