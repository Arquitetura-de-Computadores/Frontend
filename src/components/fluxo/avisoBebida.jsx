import Image from "next/image";

const AvisoBebida = () => {
    return (
        <div className="rounded-xl bg-white p-4">
            <div className="mt-4 flex px-20 items-center gap-4 flex-col">
                <div className="flex px-2 items-center gap-16">
                    <Image src="/Bebida.svg" alt="" width={300} height={106}></Image>
                    <h1 className="font-semibold text-lg text-black">Álcool e direção não combinam! Mesmo pequenas quantidades comprometem os reflexos e aumentam o risco de acidentes. Preserve vidas. Se beber, não dirija!</h1>
                </div>
            </div>
        </div>
    )
}

export default AvisoBebida