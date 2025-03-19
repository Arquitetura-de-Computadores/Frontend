"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getTemperatura } from "@/services/apiRotas";

const Temperatura = () => {
    const pathname = usePathname();
    const [temperatura, setTemperatura] = useState(null);
    
      useEffect(() => {
        const fetchTemperatura = async () => {
          try {
            const data = await getTemperatura();
            setTemperatura(data.temperatura);
          } catch (error) {
            console.error("Erro ao buscar temperatura:", error);
          }
        };
    
        fetchTemperatura();
      }, []);

    return (
        <div className="flex flex-col gap-20">
            <div className="rounded-xl bg-white py-6 px-5 w-[90%] max-w-lg mx-auto flex flex-col">
                <h1 className="text-[20px] font-semibold text-black mb-5">Temperatura</h1>
                <div className="flex items-center justify-center gap-6 mb-6">
                    <Image src="/Termometro.svg" alt="" width={50} height={120} />
                    <h1 className="font-semibold text-[300%]">
                        {temperatura !== null ? `${temperatura}°` : <p className="text-gray-600 text-[16px] font-light">Carregando...</p>}
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
        </div>
    );
};

export default Temperatura;
