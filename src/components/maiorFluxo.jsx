import ruas from "@/app/(dashboard)/fluxo/ruas";

const MaiorFluxo = () => {
  const ruasFiltradas = ruas
    .filter(rua => rua.status === "Intenso" || rua.status === "Médio").sort((a, b) => {
      if (a.status !== b.status) {
        return a.status === "Intenso" ? -1 : 1;
      }
      return a.label.localeCompare(b.label);
    });

  return (
    <div className="rounded-xl bg-white py-3">
      <div className="flex px-5">
        <h1 className="text-[20px] font-semibold text-black mb-5">LUGARES COM MAIOR FLUXO DE TRÂNSITO</h1>
      </div>
      <div>
        <ul className="space-y-5">
          {ruasFiltradas.map((rua, index) => (
            <li key={index} className="border-t border-gray-300 pt-5 px-5 text-sm">
              <div className="flex justify-between">
                <span>{rua.label}</span>
                <span className={`font-semibold ${rua.status === "Médio" ? "text-yellow-500 bg-yellow-100" : "text-red-500 bg-red-200"} px-2 py-1 rounded`}>
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

export default MaiorFluxo;
