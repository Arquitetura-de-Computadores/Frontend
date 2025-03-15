import Image from "next/image";

const AvisoClima = ({ temperatura }) => {
    const renderAviso = () => {
        if (temperatura === null) return null;

        if (temperatura > 28) {
            return (
                <div className="rounded-xl bg-white p-4">
                    <div className="mt-4 flex px-20 items-center gap-4 flex-col">
                        <div className="flex px-2 items-center gap-16">
                            <Image src="/Quente.svg" alt="" width={300} height={106} />
                            <h1 className="font-semibold text-lg text-black">
                                O dia está quente, é essencial beber água regularmente para evitar a desidratação. Mantenha uma garrafa sempre por perto, mesmo sem sentir sede. A hidratação adequada ajuda a regular a temperatura corporal e a manter o bem-estar.
                            </h1>
                        </div>
                    </div>
                </div>
            )
        } else if (temperatura < 18) {
            return (
                <div className="rounded-xl bg-white p-4">
                    <div className="mt-4 flex px-20 items-center gap-4 flex-col">
                        <div className="flex px-2 items-center gap-16">
                            <Image src="/Frio.svg" alt="" width={200} height={106} />
                            <h1 className="font-semibold text-lg text-black">
                                O dia está frio, agasalhar-se bem em camadas ajuda a manter o bem-estar e evita o resfriado, protegendo o corpo do frio e mantendo a temperatura estável.
                            </h1>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    return renderAviso();
}

export default AvisoClima;
