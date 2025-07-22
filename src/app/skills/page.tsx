import { SkillsSection } from "@/components/SkillsSection";
import { Page } from "@/components/template/Page";
import { PageTitlle } from "@/components/template/PageTitle";

export default function SkillsPage() {
    return (
        <Page>
            <div className="flex flex-col items-center ">
                <PageTitlle
                    name={'Habilidades'}
                    desc={'Aqui estão algumas das minhas habilidades e tecnologias que domino.'}
                />
                <SkillsSection />
            </div>
        </Page>
    );
}
