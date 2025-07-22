import { Page } from "@/components/template/Page";
import { PageTitlle } from "@/components/template/PageTitle";
import { Projects } from "@/components/Projects";

export default function ProjectsPage() {
    return (
        <Page>
                <div className="flex flex-col items-center">
                    <PageTitlle
                        name={'Projetos'}
                        desc={'Alguns dos projetos que desenvolvi utilizando diferentes tecnologias modernas.'}
                    />
                    <Projects />
                </div>
        </Page>
    );
}