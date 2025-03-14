import Image from "next/image";

const AvisoClima = () => {
    return (
        <div className="rounded-xl bg-white p-4">
            <div className="mt-4 flex px-20 items-center gap-4 flex-col">
                <div className="flex px-2 items-center gap-16">
                    <Image src="/Quente.svg" alt="" width={300} height={106}></Image>
                    <h1 className="font-semibold text-lg text-black">O dia está quente, é essencial beber água regularmente para evitar a desidratação. Mantenha uma garrafa sempre por perto, mesmo sem sentir sede. A hidratação adequada ajuda a regular a temperatura corporal e a manter o bem-estar.</h1>
                </div>
            </div>
        </div>
    )
}

export default AvisoClima