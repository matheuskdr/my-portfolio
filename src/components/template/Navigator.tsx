import { menuItems } from "@/data/menuItems";
import Link from "next/link";

export const Navigator = () => {
    return (
        <nav className="flex gap-7 text-md font-thin">
            {menuItems.map((item, index) => (
                <Link
                    href={item.href}
                    key={index}
                    className='flex items-center gap-1 cursor-pointer transition-all duration-300 hover:bg-zinc-300 p-2 rounded-full hover:text-black'
                >
                    {item.icon}
                    <div>{item.label}</div>
                </Link>
            ))}
        </nav>
    );
}