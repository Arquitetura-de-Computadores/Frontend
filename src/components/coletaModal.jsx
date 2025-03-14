import React from "react";
import Image from "next/image";

const ColetaModal = ({ rua, onClose }) => {
    if (!rua) return null;

    const getFillColor = (status) => {
        if (status >= 80) return "bg-red-500";
        if (status >= 50) return "bg-yellow-400";
        return "bg-green-500";
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                <h2 className="text-xl font-semibold text-center">{rua.label}</h2>
                <div className="relative w-full h-[150px] mx-auto">
                    <Image src="/Lixeira2.png" layout="fill" objectFit="contain" alt="Lixeira" className="relative z-10" />
                    <div className={`absolute bottom-1 left-0 right-0 mx-auto rounded ${getFillColor(rua.status)}`} style={{ height: `${rua.status - 5}%`, width: "56%", clipPath: "polygon(30% 130%, 70% 130%, 80% 0, 20% 0)"}} />
                    <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-lg"> {rua.status}% </span>
                </div>
                <p className="mt-4 text-center">A lixeira ocupa <span className="font-bold">{rua.status}%</span> da sua capacidade.</p>
                <button className="mt-4 w-full py-2 bg-red-500 text-white font-bold rounded" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default ColetaModal;