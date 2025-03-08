import Image from "next/image";
import Link from "next/link";

const ruas = [
  {
    label: "Nome de Rua Exemplo 1, Nome de Bairro 1",
    status: "Intenso"
  },
  {
    label: "Nome de Rua Exemplo 2, Nome de Bairro 2",
    status: "Intenso"
  },
  {
    label: "Nome de Rua Exemplo 3, Nome de Bairro 3",
    status: "Intenso"
  },
  {
    label: "Nome de Rua Exemplo 4, Nome de Bairro 4",
    status: "Médio"
  },
  {
    label: "Nome de Rua Exemplo 5, Nome de Bairro 5",
    status: "Médio"
  },
  {
    label: "Nome de Rua Exemplo 6, Nome de Bairro 6",
    status: "Moderado"
  },
  {
    label: "Nome de Rua Exemplo 7, Nome de Bairro 7",
    status: "Moderado"
  },
];

export default function Home() {
  return (
    <div className="mt-4 px-12">
      <h1 className="text-[28px] font-semibold">Informações Gerais</h1>
      <hr className="my-2 border-t-2 border-gray-300" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">

        <div className="flex flex-col gap-6">
          <div className="rounded-xl bg-white py-3">
            <div className="flex px-5">
              <h1 className="text-[20px] font-semibold text-black mb-5">Lugares com maior fluxo de trânsito</h1>
            </div>
            <div>
              <ul className="space-y-5">
                {ruas.map((rua, index) => (
                  <li key={index} className="border-t border-gray-300 pt-5 px-5 text-sm">
                    <div className="flex justify-between">
                      <span>{rua.label}</span>
                      <span className={`font-semibold ${rua.status === "Moderado" ? "text-green-500 bg-green-200" : rua.status === "Médio" ? "text-yellow-500 bg-yellow-100" : rua.status === "Intenso" ? "text-red-500 bg-red-200" : "text-gray-500 bg-gray-200"} px-2 py-1 rounded-full`}>
                        {rua.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4">
            <div className="mt-10 flex px-20 items-center gap-4 flex-col">
              <div className="flex px-2 items-center gap-9">
                <Image src="/Lampada.png" alt="" width={106} height={106}></Image>
                <h1 className="font-semibold text-lg text-black">
                  No momento, as luzes dos postes estão acesas para iluminar as ruas
                </h1>
              </div>
              <div className="flex justify-end w-full">
                <Link href="/">
                  <span className="text-[10px] text-gray-500">Como esse sistema funciona?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Bloco de Temperatura */}
          <div className="rounded-xl bg-white py-6 px-5 w-[90%] max-w-lg mx-auto flex flex-col">
            <h1 className="text-[20px] font-semibold text-black mb-5">Temperatura</h1>
            <div className="flex items-center justify-center gap-4 mb-10">
              <Image src="/Temperatura.png" alt="" width={120} height={120} />
              <h1 className="font-semibold text-[60px]">26°</h1>
            </div>
          </div>

          <div className="rounded-xl bg-white py-6 px-5 w-[90%] max-w-lg mx-auto">
            <h1 className="text-[20px] font-semibold text-black mb-5">Umidade</h1>
            <div className="flex justify-center mb-10">
              <Image src="/Pie.png" alt="" width={180} height={180} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
