"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { getStatusPostes } from "@/services/apiRotas";

const Momento = () => {
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
        <div className="rounded-xl bg-white p-4">
            <div className="mt-5 flex px-20 items-center gap-4 flex-col">
                <div className="flex px-2 items-center">
                    <Image src={status === 1 ? "/Lua.svg" : "/Sol.svg"}  alt="" width={106} height={106}></Image>
                </div>
            </div>
        </div>
    )
}

export default Momento