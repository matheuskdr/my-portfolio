import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontInter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: 'swap'
});

export const metadata: Metadata = {
    title: "Portfólio Matheus Mattos",
    description: "Desenvolvedor Front-end com foco em interfaces modernas.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`text-gray-300 ${fontInter.variable} bg-black`}>
                <div className="relative min-h-screen overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/58a27047-6e5a-4875-8221-386a80700f83-1.svg')] bg-cover bg-center bg-no-repeat z-0" />
                    <div className="absolute inset-0 bg-black/70 z-0" />
                    <div className="relative z-10">                        
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}