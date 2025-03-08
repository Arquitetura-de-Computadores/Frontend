import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#4880FF] font-bold flex justify-between px-20 p-3.5">
      <p>Todos direitos reservados - 2025 ©</p>
      <p>Desenvolvido por <Link href={"https://github.com/GuilhermeBrito7"}>Guilherme Brito</Link>, <Link href={"https://github.com/MariaEllen1"}>Maria Ellen</Link>, <Link href={"https://github.com/raissaquezia"}>Raíssa Quezia</Link> e <Link href={"https://github.com/"}>William Costa</Link> </p>
    </div>
  )
}

export default Footer