"use client";
import { useState, useEffect } from "react";
import { getColeta } from "@/services/apiRotas";
import ColetaModal from "@/components/coleta/coletaModal";
import Temperatura from "@/components/clima/temperatura";
import AvisoColeta from "@/components/coleta/avisoColeta";
import AvisoDescarte from "@/components/coleta/avisoDescarte";

const Page = () => {
  const [ruas, setRuas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ruaSelecionada, setRuaSelecionada] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getColeta();
        setRuas(data.coletas || []);
      } catch (error) {
        setError("Erro ao carregar dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const ruasOrdenadas = [...ruas].sort((a, b) => {
    if (b.status === a.status) {
      return a.label.localeCompare(b.label);
    }
    return b.status - a.status;
  });

  return (
    <div className="mt-4 px-12">
      <h1 className="text-[28px] font-semibold">Coleta Inteligente</h1>
      <hr className="my-2 border-t-2 border-gray-300" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">

        <div className="flex flex-col gap-6">
          <div className="rounded-xl bg-white py-3 h-[550px] flex flex-col">
            {loading ? (
              <div className="h-full flex justify-center items-center">
                <p className="text-gray-600">Carregando...</p>
              </div>
            ) : error ? (
              <div className="h-full flex justify-center items-center">
                <p className="text-red-500">{error}</p>
              </div>
            ) : (
              <>
                <div className="flex px-5">
                  <h1 className="text-[20px] font-semibold text-black mb-5">CAÇAMBAS COM MAIOR VOLUME DE LIXO</h1>
                </div>
                <div>
                  <ul className="space-y-5">
                    {ruasOrdenadas.map((rua, index) => (
                      <li key={index} className="border-t border-gray-300 pt-5 px-5 text-sm">
                        <div className="flex justify-between">
                          <span>{rua.label}</span>
                          <div className="flex justify-between gap-3">
                            <span className={`font-semibold ${rua.status <= 40 ? "text-green-500 bg-green-200" : rua.status <= 79 ? "text-yellow-500 bg-yellow-100" : rua.status >= 80 ? "text-red-500 bg-red-200" : "text-gray-500 bg-gray-200"} px-4 py-1 rounded`}>
                              {rua.status}%
                            </span>
                            <button className="text-[16px] text-gray-500 underline" onClick={() => setRuaSelecionada(rua)}>Ver detalhes</button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          <AvisoColeta />
        </div>
        <div className="flex flex-col gap-20">
          <Temperatura />
          <AvisoDescarte />
        </div>
      </div>
      <ColetaModal rua={ruaSelecionada} onClose={() => setRuaSelecionada(null)} />
    </div>
  );
};

export default Page;
