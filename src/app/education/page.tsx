import { Page } from "@/components/template/Page";
import { PageTitlle } from "@/components/template/PageTitle";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { academicEducation, complementaryCourses } from "@/data/educationData";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
    return (
        <Page>

            <div>
                <PageTitlle name={'Educação'}/>
                <h3 className="text-2xl font-semibold mb-6 mt-4 text-white">Formação Acadêmica</h3>
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {academicEducation.map((edu, index) => (
                        <Card key={index} className="bg-[#090e21] text-white p-4 rounded-2xl shadow-lg animate-fade-up animate-once animate-ease-in-out border border-slate-400">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <CardTitle className="text-xl font-semibold">
                                        {edu.course}
                                    </CardTitle>
                                    <GraduationCap className="w-5 h-5 text-primary text-white" />
                                </div>
                                <CardDescription className="text-sm text-slate-400">
                                    {edu.institution} • {edu.period}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed text-slate-300">
                                    {edu.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <h3 className="text-2xl font-semibold mb-6 mt-12 text-white">Cursos Complementares</h3>
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {complementaryCourses.map((edu, index) => (
                        <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                        >
                            <Card className="bg-[#090e21] text-white p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200 animate-fade-up animate-once animate-ease-in-out border border-slate-400">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <CardTitle className="text-xl font-semibold">
                                            {edu.course}
                                        </CardTitle>
                                        <GraduationCap className="w-5 h-5 text-primary text-white" />
                                    </div>
                                    <CardDescription className="text-sm text-slate-400">
                                        {edu.institution} • {edu.period}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm leading-relaxed text-slate-300">
                                        {edu.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </Page>
    );
};