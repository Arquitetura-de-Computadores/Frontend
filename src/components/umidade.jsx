import Link from "next/link";
import Image from "next/image";

const Umidade = () => {
    return (
        <div className="rounded-xl bg-white py-6 px-5 w-[90%] max-w-lg mx-auto">
            <h1 className="text-[20px] font-semibold text-black mb-5">Umidade</h1>
            <div className="flex justify-center mb-10">
                <Image src="/Pie.png" alt="" width={180} height={180} />
            </div>
            <div className="flex justify-end w-full">
                <Link href="/clima">
                    <span className="text-[16px] text-gray-500 underline">Ver detalhes</span>
                </Link>
            </div>
        </div>
    )
}

export default Umidade