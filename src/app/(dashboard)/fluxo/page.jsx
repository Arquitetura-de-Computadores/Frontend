import MaiorFluxo from "@/components/maiorFluxo";
import MenorFluxo from "@/components/menorFluxo";

const Page = () => {
  return (
    <div className="mt-4 px-12">
      <h1 className="text-[28px] font-semibold">Fluxo de trânsito</h1>
      <hr className="my-2 border-t-2 border-gray-300" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        <MaiorFluxo />
        <MenorFluxo />
      </div>
      
    </div>
  );
};

export default Page;
