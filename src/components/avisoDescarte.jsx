import Image from "next/image";

const AvisoDescarte = () => {
  return (
    <div className="rounded-xl bg-white py-6 px-5 w-[90%] max-w-lg mx-auto">
      <h1 className=" flex text-[20px] font-semibold text-black mb-5 justify-center">Facilite o trabalho dos garis!</h1>
      <div className="flex justify-center mb-10">
        <Image src="/Descarte.svg" alt="" width={180} height={180} />
      </div>
      <p className="flex justify-center font-bold">Ao descartar o&nbsp;<span className="text-[#4880FF]">lixo</span>, separe-o de forma&nbsp;<span className="text-[#4880FF]">organizada</span></p>
    </div>
  )
}

export default AvisoDescarte