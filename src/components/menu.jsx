"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
    {
        icon: "/Home.svg",
        label: "Home",
        href: "/",
    },
    {
        icon: "/Lixeira.svg",
        label: "Coleta Inteligente",
        href: "/coleta",
    },
    {
        icon: "/Nuvem.svg",
        label: "Clima",
        href: "/clima",
    },
    {
        icon: "/Carro.svg",
        label: "Fluxo de Trânsito",
        href: "/fluxo",
    },
    {
        icon: "/LightLamp.svg",
        label: "Iluminação",
        href: "/iluminacao",
    },
]

const Menu = () => {
    const pathname = usePathname();
    
    return (
        <div className="mt-4 text-sm">
            {menuItems.map((item, index) => (
                <Link href={item.href} key={index} className={`flex items-center gap-6 py-6 px-4 rounded-lg transition-all duration-200 ${pathname === item.href ? "bg-blue-500 text-white" : "text-black"}`} >
                    <Image src={item.icon} alt={item.label} width={20} height={20} className={`${pathname === item.href ? "invert" : ""}`}/>
                    <span className="hidden lg:block">{item.label}</span>
                </Link>
            ))}
        </div>
    );
};

export default Menu;