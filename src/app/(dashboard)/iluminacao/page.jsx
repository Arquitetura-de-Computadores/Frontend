import AvisoPostes from "@/components/avisoPostes"
import Momento from "@/components/momento"

const Page = () => {
  return (
    <div className="mt-4 px-12">
      <h1 className="text-[28px] font-semibold">Iluminação</h1>
      <hr className="my-2 border-t-2 border-gray-300" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        <div className="flex flex-col">
          <div className="rounded-xl bg-white p-4">
          <AvisoPostes/>
          </div>
        </div>
        <div className="w-1/2 rounded-xl bg-white p-4 ml-50">
          <Momento/>
        </div>
      </div>
      <div className="mt-8 mb-73">
        <h1 className="font-bold text-[24px]">Como ocorre o sistema elétrico de funcionamento dos postes? </h1>
        <div className="mt-6 text-[18px]">
          <p className="mb-6">As fotocélulas são sensores que controlam a iluminação pública de forma automática. Elas funcionam detectando a luz do sol: quando começa a escurecer, ligam as lâmpadas dos postes, e quando amanhece, desligam. Esse processo acontece porque a fotocélula reage à quantidade de luz natural ao redor.</p>
          <p>No entanto, dependendo da época do ano, os dias podem ser mais longos ou mais curtos. No verão, por exemplo, o sol se põe mais tarde, então as luzes dos postes demoram mais para acender. Já no inverno, anoitece mais cedo, e por isso os postes ligam antes. Isso acontece porque a fotocélula responde diretamente à variação da luz natural, garantindo que as lâmpadas só fiquem acesas quando realmente necessário.</p>
        </div>
      </div>
    </div>
  )
}

export default Page