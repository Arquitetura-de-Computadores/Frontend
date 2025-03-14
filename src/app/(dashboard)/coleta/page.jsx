"use client"
import { useState } from "react";
import ColetaModal from "@/components/coleta/coletaModal";
import Temperatura from "@/components/clima/temperatura"
import AvisoColeta from "@/components/coleta/avisoColeta"
import AvisoDescarte from "@/components/coleta/avisoDescarte"

const ruas = [
  {
    label: "Nome de Rua Exemplo 1, Nome de Bairro 1",
    status: "100"
  },
  {
    label: "Nome de Rua Exemplo 2, Nome de Bairro 2",
    status: "80"
  },
  {
    label: "Nome de Rua Exemplo 3, Nome de Bairro 3",
    status: "70"
  },
  {
    label: "Nome de Rua Exemplo 4, Nome de Bairro 4",
    status: "60"
  },
  {
    label: "Nome de Rua Exemplo 5, Nome de Bairro 5",
    status: "50"
  },
  {
    label: "Nome de Rua Exemplo 6, Nome de Bairro 6",
    status: "40"
  },
  {
    label: "Nome de Rua Exemplo 7, Nome de Bairro 7",
    status: "30"
  },
];

const Page = () => {
  const [ruaSelecionada, setRuaSelecionada] = useState(null);

  return (
    <div className="mt-4 px-12">
      <h1 className="text-[28px] font-semibold">Coleta Inteligente</h1>
      <hr className="my-2 border-t-2 border-gray-300" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">

        <div className="flex flex-col gap-6">
          <div className="rounded-xl bg-white py-3">
            <div className="flex px-5">
              <h1 className="text-[20px] font-semibold text-black mb-5">CAÇAMBAS COM MAIOR VOLUME DE LIXO</h1>
            </div>
            <div>
              <ul className="space-y-5">
                {ruas.map((rua, index) => (
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
          </div>
          <AvisoColeta/>
        </div>
        <div className="flex flex-col gap-20">
          <Temperatura />
          <AvisoDescarte/>
        </div>
      </div>
      <ColetaModal rua={ruaSelecionada} onClose={() => setRuaSelecionada(null)} />
    </div>
  )
}

export default Page