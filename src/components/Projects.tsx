import { projectss } from "@/data/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { GitHub } from "@mui/icons-material";
import { ExternalLinkIcon } from "lucide-react";

export const Projects = () => {
    return (
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {projectss.map((project, index) => (
                <Card
                    key={index}
                    className="bg-[#090e21] hover:scale-105 transition-transform duration-200 animate-fade-up animate-once animate-ease-in-outt">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-white">
                            {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-400">
                            {project.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-3">
                        <Link href={project.link} target="blank" className="w-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-lg h-sm rounded-4xl mb-4 cursor-pointer border border-slate-400"
                            />
                        </Link>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="bg-gray-200 text-black px-3 py-1 rounded-full text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-4 items-center">
                        <Link href={project.github} target="blank">
                            <GitHub className="text-white" />
                        </Link>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-1">
                            Ver Projeto
                            <ExternalLinkIcon size={16} />
                        </a>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}