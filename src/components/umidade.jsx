"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Umidade = () => {
    const pathname = usePathname();
    return (
        <div className="rounded-xl bg-white py-6 px-5 w-[90%] max-w-lg mx-auto">
            <h1 className="text-[20px] font-semibold text-black">Umidade</h1>
            <div className="flex justify-center">
                <Image src="/Pie.png" alt="" width={180} height={180} />
            </div>
            {pathname !== "/clima" && (
                <div className="flex justify-end w-full">
                    <Link href="/clima">
                        <span className="text-[16px] text-gray-500 underline">Ver detalhes</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Umidade