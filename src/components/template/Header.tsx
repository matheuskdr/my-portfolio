'use client'

import { useState } from "react";
import { Logo } from "./Logo";
import { Navigator } from "./Navigator";
import { Menu, X } from "lucide-react";
import { MenuMobile } from "../MenuMobile";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="flex items-center bg-[#090e21] h-20 px-10">
            <div className="w-full flex justify-between hidden lg:flex">
                <Logo />
                <Navigator />
            </div>
            <div className="w-full lg:hidden">
                <div className="w-full flex justify-between">
                    <button
                        className="relative z-10 flex-1"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Abrir menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    <Logo />
                </div>
                <MenuMobile isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>
        </header>
    );
} 