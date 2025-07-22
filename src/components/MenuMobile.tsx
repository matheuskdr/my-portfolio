import { menuItems } from "@/data/menuItems";
import Link from "next/link";
import { X } from "lucide-react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const MenuMobile = ({ isOpen, onClose }: Props) => {
    return (
        <div
            className={`
                fixed top-0 left-0 w-[80%] sm:w-[60%] max-w-sm h-auto bg-[#090e21] z-50 rounded-br-xl shadow-lg
                transition-all duration-300 ease-in-out
                ${isOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-full pointer-events-none"}
      `}
        >
            <nav className="py-6 px-5 relative flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:opacity-80 transition"
                    aria-label="Fechar menu"
                >
                    <X size={28} />
                </button>
                <ul className="flex flex-col gap-6 pt-14 text-white text-lg">
                    {menuItems.map((item, index) => (
                        <li key={index} onClick={onClose}>
                            <Link
                                href={item.href}
                                className="flex items-center gap-2 border-b-2 border-transparent hover:border-zinc-400 transition-all duration-300"
                            >
                                {item.icon}
                                <div>{item.label}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};