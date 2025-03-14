import Image from "next/image";

const AvisoSinalizacao = () => {
    return (
        <div className="rounded-xl bg-white p-4">
            <div className="mt-4 flex px-20 items-center gap-4 flex-col">
                <div className="flex px-2 items-center gap-16">
                    <Image src="/Semaforo.svg" alt="" width={106} height={106}></Image>
                    <h1 className="font-semibold text-lg text-black">Dirigir com atenção salva vidas! Evite distrações, respeite as leis e mantenha o foco na estrada. A segurança de todos depende da sua responsabilidade ao volante.</h1>
                </div>
            </div>
        </div>
    )
}

export default AvisoSinalizacao