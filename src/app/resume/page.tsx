import { Page } from "@/components/template/Page";
import Image from "next/image";
import exemplo from '@/assets/images/matheus_photo.jpeg';

export default function ResumePage() {
    return (
        <Page>
            <div className="flex flex-col lg:flex-row items-center gap-10 font-semibold">
                <Image src={exemplo} alt="" width={300} height={70} className="border-8 border-[#090e21] rounded-full" />
                <p className="text-lg text-center">Oi, eu sou o Matheus! <br />
                    Tenho 26 anos e estou fazendo uma transição de carreira para a área de tecnologia. Atualmente curso Engenharia de Software e venho me dedicando ao desenvolvimento front-end com React, Next.js e Tailwind. Entrei um pouco mais tarde nesse mercado, mas com muita clareza do que quero construir: uma trajetória sólida, com base no aprendizado constante e na prática. Valorizo o trabalho em equipe, gosto de trocar ideias e estou em busca da minha primeira oportunidade para evoluir como desenvolvedor — com foco, responsabilidade e vontade de me tornar fullstack no futuro.</p>
            </div>
        </Page>
    );
}