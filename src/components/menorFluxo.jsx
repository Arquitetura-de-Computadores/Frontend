import ruas from "@/app/(dashboard)/fluxo/ruas";

const MenorFluxo = () => {
  const ruasFiltradas = ruas.filter(rua => rua.status === "Moderado").sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="rounded-xl bg-white py-3">
      <div className="flex px-5">
        <h1 className="text-[20px] font-semibold text-black mb-5">LUGARES COM MENOR FLUXO DE TRÂNSITO</h1>
      </div>
      <div>
        <ul className="space-y-5">
          {ruasFiltradas.map((rua, index) => (
            <li key={index} className="border-t border-gray-300 pt-5 px-5 text-sm">
              <div className="flex justify-between">
                <span>{rua.label}</span>
                <span className="font-semibold text-green-500 bg-green-200 px-2 py-1 rounded">
                  {rua.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenorFluxo;