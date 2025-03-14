"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getStatusPostes } from "@/services/apiRotas";

const AvisoPostes = () => {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const data = await getStatusPostes();
                setStatus(data.status);
            } catch (error) {
                console.error("Erro ao buscar status dos postes:", error);
            }
        };

        fetchStatus();
    }, []);
    
    return (
        <div className="mt-10 flex px-20 items-center gap-4 flex-col">
            <div className="flex px-2 items-center gap-9">
                <Image src={status === 1 ? "/Lampada.png" : "/LampadaOff.png"} alt="" width={106} height={106}></Image>
                <h1 className="font-semibold text-lg text-black">
                    {status === 1 ? "No momento, as luzes dos postes estão acesas para iluminar as ruas" : "No momento, as luzes dos postes estão apagadas"}
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