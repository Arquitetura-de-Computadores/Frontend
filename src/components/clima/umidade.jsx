"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getUmidade } from "@/services/apiRotas";

const Umidade = () => {
    const [umidade, setUmidade] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        const fetchUmidade = async () => {
            try {
                const data = await getUmidade();
                setUmidade(data.umidade);
            } catch (error) {
                console.error("Erro ao buscar umidade:", error);
            }
        };

        fetchUmidade();
    }, []);

    return (
        <div className="rounded-xl bg-white py-6 px-5 w-[90%] max-w-lg mx-auto">
            <h1 className="text-[20px] font-semibold text-black mb-2">Umidade</h1>
            <div className="relative flex items-center justify-center mb-2">
                <Image src="/Nuvem2.svg" alt="" width={200} height={120} />
                <h1 className="mt-6 absolute font-semibold text-[300%]">
                    {umidade !== null ? `${umidade}%` : <p className="text-gray-600 text-[16px] font-light absolute">Carregando...</p>}
                </h1>
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