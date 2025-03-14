import Temperatura from "@/components/clima/temperatura"
import Umidade from "@/components/clima/umidade"
import AvisoClima from "@/components/clima/avisoClima"

const Page = () => {
  return (
    <div className="mt-4 px-12">
      <h1 className="text-[28px] font-semibold">Temperatura e Umidade do ar</h1>
      <hr className="my-2 border-t-2 border-gray-300" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 ml-30">

        <div className="flex w-2/3 flex-col">
          <div className="rounded-xl bg-white py-3">
            <Temperatura/>
          </div>
        </div>
        <div className=" rounded-xl w-2/3 bg-white p-4">
          <Umidade/>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="font-bold text-[24px]">Como ocorre o sistema elétrico de funcionamento dos postes? </h1>
        <div className="mt-6 text-[18px]">
          <p className="mb-6">A umidade influencia diretamente na sensação térmica, pois afeta a evaporação do suor. Quando a umidade está alta, o suor evapora menos, dificultando o resfriamento do corpo e aumentando a sensação de calor. Já com umidade baixa, o suor evapora rapidamente, o que pode ser confortável em temperaturas amenas, mas agravar o frio ou causar desidratação no calor.</p>
        </div>
      </div>
      <div className="mt-16">
        <AvisoClima/>
      </div>
    </div>
  )
}

export default Page