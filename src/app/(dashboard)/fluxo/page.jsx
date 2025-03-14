import MaiorFluxo from "@/components/fluxo/maiorFluxo";
import MenorFluxo from "@/components/fluxo/menorFluxo";
import AvisoSinalizacao from "@/components/fluxo/avisoSinalizacao";
import AvisoBebida from "@/components/fluxo/avisoBebida";

const Page = () => {
  return (
    <div className="mt-4 px-12">
      <h1 className="text-[28px] font-semibold">Fluxo de trânsito</h1>
      <hr className="my-2 border-t-2 border-gray-300" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        <MaiorFluxo />
        <MenorFluxo />
        <AvisoSinalizacao/>
        <AvisoBebida/>
      </div>
    </div>
  );
};

export default Page;
