import Temperatura from "@/components/temperatura"
import Umidade from "@/components/umidade"
import AvisoPostes from "@/components/avisoPostes"
import MaiorFluxo from "@/components/maiorFluxo"

export default function Home() {
  return (
    <div className="mt-4 px-12">
      <h1 className="text-[28px] font-semibold">Informações Gerais</h1>
      <hr className="my-2 border-t-2 border-gray-300" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">

        <div className="flex flex-col gap-6">
          <MaiorFluxo/>
          <div className="rounded-xl bg-white p-4">
            <AvisoPostes/>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <Temperatura/>

          <Umidade/>
        </div>
      </div>
    </div>
  );
}
