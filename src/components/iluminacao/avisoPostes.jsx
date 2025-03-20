"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getLuz } from "@/services/apiRotas";

const AvisoPostes = () => {
    const pathname = usePathname();
    const [luz, setStatus] = useState(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const data = await getLuz();
                setStatus(data.luz);
            } catch (error) {
                console.error("Erro ao buscar status dos postes:", error);
            }
        };

        fetchStatus();
    }, []);
    
    return (
        <div className="mt-6 flex px-20 items-center gap-4 flex-col">
            <div className="flex px-2 items-center gap-9">
                <Image src={luz === 1 ? "/Lampada.png" : "/LampadaOff.png"} alt="" width={106} height={106}></Image>
                <h1 className="font-semibold text-lg text-black">
                    {luz === 1 ? "No momento, as luzes dos postes estão acesas para iluminar as ruas" : "No momento, as luzes dos postes estão apagadas"}
                </h1>
            </div>
            {pathname !== "/iluminacao" && (
                <div className="flex justify-end w-full">
                    <Link href="/iluminacao">
                        <span className="text-[10px] text-gray-500 underline">Como esse sistema funciona?</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default AvisoPostes