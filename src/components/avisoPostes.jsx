import Link from "next/link";
import Image from "next/image";

const AvisoPostes = () => {
    return (
        <div className="mt-10 flex px-20 items-center gap-4 flex-col">
            <div className="flex px-2 items-center gap-9">
                <Image src="/Lampada.png" alt="" width={106} height={106}></Image>
                <h1 className="font-semibold text-lg text-black">
                    No momento, as luzes dos postes estão acesas para iluminar as ruas
                </h1>
            </div>
            <div className="flex justify-end w-full">
                <Link href="/iluminacao">
                    <span className="text-[10px] text-gray-500 underline">Como esse sistema funciona?</span>
                </Link>
            </div>
        </div>
    )
}

export default AvisoPostes