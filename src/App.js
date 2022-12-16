import { useState } from "react"
import { Link } from "react-router-dom";

export default function App() {

  const [jawaban, setJawaban] = useState([{}])
  const [benar, setBenar] = useState(0)
  const [salah, setSalah] = useState(-1)
  const [showModal, setShowModal] = useState(false);

  const qa = [
    {
      pertanyaan: "Siapakah nama presiden yang kedua indonesia?",
      jawaban: [
        { jawab: "BJ. Habibie", isBetul: false },
        { jawab: "Soeharto", isBetul: true },
        { jawab: "Megawati", isBetul: false },
        { jawab: "Abdurahman Wahid", isBetul: false },
        { jawab: "Susilo Bambang Yudhoyono", isBetul: false },
      ]
    },
    {
      pertanyaan: "Bencana tsunami di aceh terjadi pada tahun?",
      jawaban: [
        { jawab: "2003", isBetul: false },
        { jawab: "2004", isBetul: true },
        { jawab: "2005", isBetul: false },
        { jawab: "2006", isBetul: false },
        { jawab: "2007", isBetul: false },
      ]
    },
    {
      pertanyaan: "Perusahaan besar di indonesia yang membuat pesawat terbang adalah?",
      jawaban: [
        { jawab: "PT INKA", isBetul: false },
        { jawab: "PT TOYOTA", isBetul: false },
        { jawab: "PT PELNI", isBetul: false },
        { jawab: "PT DIRGANTARA INDONESIA", isBetul: true },
        { jawab: "PT PERTAMINA", isBetul: false },
      ]
    },
    {
      pertanyaan: "Siapakah nama walikota surabaya yang sekarang...",
      jawaban: [
        { jawab: "Basuki tcahaya purnama", isBetul: false },
        { jawab: "Ganjar Pranowo", isBetul: false },
        { jawab: "Tri Rismaharini", isBetul: false },
        { jawab: "Eri Cahyadi", isBetul: true },
        { jawab: "Ridwan Kamil", isBetul: false },
      ]
    },
    {
      pertanyaan: "Mata uang dari negara malaysia adalah,...",
      jawaban: [
        { jawab: "Rupiah", isBetul: false },
        { jawab: "Peso", isBetul: false },
        { jawab: "Yen", isBetul: false },
        { jawab: "Real", isBetul: false },
        { jawab: "Ringgit", isBetul: true },
      ]
    },
    {
      pertanyaan: "Nama kabinet menteri pada era presiden Susilo Bambang Yudhoyono adalah...",
      jawaban: [
        { jawab: "Indonesia Bersatu", isBetul: true },
        { jawab: "Kabinet Kerja", isBetul: false },
        { jawab: "Gotong Royong", isBetul: false },
        { jawab: "Musyawarah", isBetul: false },
        { jawab: "Persatuan", isBetul: false },
      ]
    },
    {
      pertanyaan: "Kota cirebon terletak pada provinsi...",
      jawaban: [
        { jawab: "Jawa Tengah", isBetul: false },
        { jawab: "Jawa Timur", isBetul: false },
        { jawab: "Jawa Barat", isBetul: true },
        { jawab: "Aceh", isBetul: false },
        { jawab: "Sumatera Selatan", isBetul: false },
      ]
    },
    {
      pertanyaan: "Hubungan timbal balik antara makhluk hidup dan lingkungannya disebut...",
      jawaban: [
        { jawab: "Ekosistem", isBetul: true },
        { jawab: "Komunitas", isBetul: false },
        { jawab: "Populasi", isBetul: false },
        { jawab: "Habitat", isBetul: false },
        { jawab: "Adaptasi", isBetul: false },
      ]
    },
    {
      pertanyaan: "Siapakah nama menteri perhubungan sekarang di era presiden joko widodo...",
      jawaban: [
        { jawab: "M. Nashir", isBetul: false },
        { jawab: "Tcahyo Kumolo", isBetul: false },
        { jawab: "Ignasius Jonan", isBetul: false },
        { jawab: "Anis Baswedan", isBetul: false },
        { jawab: "Budi Karya Sumadi", isBetul: true },
      ]
    },
    {
      pertanyaan: "Nama lain dari istilah Taksonomi adalah...",
      jawaban: [
        { jawab: "Pengecualian", isBetul: false },
        { jawab: "Penggabungan", isBetul: false },
        { jawab: "Pengelompokan", isBetul: true },
        { jawab: "Pemisahan", isBetul: false },
        { jawab: "Pemusatan", isBetul: false },
      ]
    },

  ]

  const kirimJwbn = (jwb, e) => {
    e.preventDefault()
    jwb.map(e => {
      if (e.isBetul) {
        setBenar((prev) => prev + 1)
      } else {
        setSalah(prev => prev + 1)
      }
    })
    setShowModal(true)
    console.log(jwb)
  }

  return (
    <>
      <div className="min-h-screen font-comic p-5 bg-teriary text-center flex flex-col gap-y-10 items-center">
        <form onSubmit={kirimJwbn.bind(this, jawaban)} className="flex flex-col items-start text-left gap-y-10 bg-white w-full p-5 rounded-md shadow-lg lg:w-2/5">
          {qa.map((e, i) => {
            return (
              <div className="w-full" key={i}>
                <h3 className="text-xl mb-5 font-semibold">{i + 1}. {e.pertanyaan}</h3>
                <div>{e.jawaban.map((el, i) => {
                  return (
                    <div key={i} className="border py-3 px-2 w-full flex justify-start items-center gap-x-2 mt-2 cursor-pointer">
                      <input className="accent-primary" onClick={() => setJawaban([...jawaban, { jawab: el.jawab, isBetul: el.isBetul }])} id={el.jawab} type="radio" name={e.pertanyaan} value={jawaban} required />
                      <label htmlFor={el.jawab} className="w-full cursor-pointer">{el.jawab}</label>
                    </div>
                  )
                })}</div>
              </div>
            )
          })}
          <button type="submit" className="px-5 py-2 bg-primary text-white text-xl rounded-lg font-semibold duration-300 hover:bg-secondary">Kirim Jawaban</button>
        </form>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Skor Kamu
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
                    <table className="font-bold text-lg">
                      <tbody>
                        <tr>
                          <td>Benar</td>
                          <td>:</td>
                          <td>{benar}</td>
                        </tr>
                        <tr>
                          <td>Salah</td>
                          <td>:</td>
                          <td>{salah}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                    <Link
                      to="/"
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
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
      </div>
    </>
  )
}

