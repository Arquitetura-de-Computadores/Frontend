"use client";
import { useState } from "react";
import ruas from "@/app/(dashboard)/fluxo/ruas";

const MaiorFluxo = () => {
  const ruasFiltradas = ruas.filter(rua => rua.status === "Intenso" || rua.status === "Médio").sort((a, b) => {
    if (a.status !== b.status) {
      return a.status === "Intenso" ? -1 : 1;
    }
    return a.label.localeCompare(b.label);
  });

  const itensPorPagina = 6;
  const [paginaAtual, setPaginaAtual] = useState(0);

  const totalPaginas = Math.ceil(ruasFiltradas.length / itensPorPagina);
  const ruasPaginadas = ruasFiltradas.slice(
    paginaAtual * itensPorPagina,
    (paginaAtual + 1) * itensPorPagina
  );

  return (
    <div className="rounded-xl bg-white py-3 h-[550px] flex flex-col">
      <div className="flex px-5">
        <h1 className="text-[20px] font-semibold text-black mb-5">LUGARES COM MAIOR FLUXO DE TRÂNSITO</h1>
      </div>
      <div>
        <ul className="space-y-5">
          {ruasPaginadas.map((rua, index) => (
            <li key={index} className="border-t border-gray-300 pt-5 px-5 text-sm">
              <div className="flex justify-between">
                <span>{rua.label}</span>
                <span className={`font-semibold ${rua.status === "Médio" ? "text-yellow-500 bg-yellow-100" : "text-red-500 bg-red-200"} px-2 py-1 rounded`}>
                  {rua.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {totalPaginas > 1 && (
        <div className="flex justify-between items-center px-5 py-3 border-t border-gray-300 mt-auto">
          <button onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 0} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">Anterior</button>
          <span className="text-sm">Página {paginaAtual + 1} de {totalPaginas}</span>
          <button onClick={() => setPaginaAtual(paginaAtual + 1)} disabled={paginaAtual === totalPaginas - 1} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">Próximo</button>
        </div>
      )}
    </div>
  );
};

export default MaiorFluxo;
