import Image from "next/image";
import Link from "next/link";

const ruas = [
  {
    label: "Nome de Rua Exemplo 1, Nome de Bairro 1",
    status: "90"
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
                      <Link href="/">
                        <span className="text-[16px] text-gray-500 underline">Ver detalhes</span>
                      </Link>
                    </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4">
            <div className="mt-10 flex px-20 items-center gap-4 flex-col mb-11">
              <div className="flex px-2 items-center gap-16">
                <Image src="/Lixo.svg" alt="" width={106} height={106}></Image>
                <h1 className="font-semibold text-lg text-black"> Ao descartar materiais pontudos ou afiados, tente embrulhá-los para uma coleta segura!</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <div className="rounded-xl bg-white py-6 px-5 w-[90%] max-w-lg mx-auto flex flex-col">
            <h1 className="text-[20px] font-semibold text-black mb-5">Temperatura</h1>
            <div className="flex items-center justify-center gap-4 mb-10">
              <Image src="/Temperatura.png" alt="" width={120} height={120} />
              <h1 className="font-semibold text-[60px]">26°</h1>
            </div>
            <div className="flex justify-end w-full">
              <Link href="/clima">
                <span className="text-[16px] text-gray-500 underline">Ver detalhes</span>
              </Link>
            </div>
          </div>

          <div className="rounded-xl bg-white py-6 px-5 w-[90%] max-w-lg mx-auto">
            <h1 className=" flex text-[20px] font-semibold text-black mb-5 justify-center">Facilite o trabalho dos garis!</h1>
            <div className="flex justify-center mb-10">
              <Image src="/Descarte.svg" alt="" width={180} height={180} />
            </div>
            <p className="flex justify-center font-bold">Ao descartar o&nbsp;<span className="text-[#4880FF]">lixo</span>, separe-o de forma&nbsp;<span className="text-[#4880FF]">organizada</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page