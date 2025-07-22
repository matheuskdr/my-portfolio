import { Header } from "./Header";

type PageProps = {
    children: React.ReactNode
    className?: string
}

export const Page = (props: PageProps) => {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main
                className={`w-[320px] sm:w-[640px] lg:w-[1024px] xl:w-[1280px] mx-auto flex-1 flex items-center justify-center${props.className ?? ''} py-10 px-5`}
            >
                    {props.children}
            </main>
        </div>
    );
}