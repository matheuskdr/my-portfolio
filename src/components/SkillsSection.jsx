import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Image from "next/image";
import { skillss } from "@/data/skills";

export const SkillsSection = () => {
    return (
        <section className="mt-10 mb-5">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 ">
                {skillss.map((skill, index) => (
                    <HoverCard key={index} openDelay={100} closeDelay={100} className='flex items-center justify-center'>
                        <HoverCardTrigger>
                            <div
                                className="flex flex-col items-center justify-center bg-[#090e21] text-white p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200 animate-fade-up animate-once animate-ease-in-out border border-slate-400">
                                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                <Image src={skill.src} width={70} height={70} alt={skill.alt} className={skill.className || ""} />
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p className="text-zinc-800 text-sm">{skill.description}</p>
                        </HoverCardContent>
                    </HoverCard>
                ))}
            </div>
        </section>
    );
};