import Image from "next/image";

const AvisoColeta = () => {
  return (
    <div className="rounded-xl bg-white p-4">
      <div className="mt-5 mb-5 flex px-20 items-center gap-4 flex-col">
        <div className="flex px-2 items-center gap-16">
          <Image src="/Lixo.svg" alt="" width={106} height={106}></Image>
          <h1 className="font-semibold text-lg text-black"> Ao descartar materiais pontudos ou afiados, tente embrulhá-los para uma coleta segura!</h1>
        </div>
      </div>
    </div>
  )
}

export default AvisoColeta