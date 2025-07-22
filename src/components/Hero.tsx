'use client';

import { Slider } from "@/components/Slider";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export default function Hero() {

    const [text] = useTypewriter({
        words: ["Hi there! I'm Matheus"],
        loop: 1
    })

    return (
            <div className="w-full mt-10 justify-between gap-30 flex items-center flex-col lg:flex-row">
                <div className="flex flex-col items-center gap-3">
                    <div className=" lg:min-w-[660px]">
                        <h1 className="font-bold pb-4 text-3xl sm:text-5xl lg:text-6xl ">{text}<Cursor cursorStyle='<' /></h1>
                    </div>
                    <p className="text-gray-400 lg:text-lg">
                        Cursando Engenharia de Software e em busca do meu primeiro estágio na área de TI. Tenho experiência com React, Next.js e Tailwind, e muita vontade de aprender na prática, colaborar com equipes e evoluir como desenvolvedor fullstack.
                    </p>
                    <div className="flex gap-2 mt-2">
                        {socialLinks.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                                aria-label={item.label}
                            >
                                <Button variant="ghost" size="icon" className="cursor-pointer">
                                    {item.icon}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center lg:pr-30">
                    <Slider />
                </div>
        </div>
    );
}
