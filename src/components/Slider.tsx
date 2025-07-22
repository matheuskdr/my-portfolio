"use client";

import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import ReactLogo from '@/assets/images/reactjs.svg';
import Css3Logo from '@/assets/images/css3.svg';
import GitLogo from '@/assets/images/git.svg';
import GitHubLogo from '@/assets/images/github-light.svg';
import Html5Logo from '@/assets/images/html5.svg';
import JavaScriptLogo from '@/assets/images/javascript.svg';
import NextJsLogo from '@/assets/images/nextjs-wordmark.svg';
import TailWindCssLogo from '@/assets/images/tailwindcss.svg';
import TypeScriptLogo from '@/assets/images/typescript.svg';

const images = [
    { src: ReactLogo, alt: "React" },
    { src: Css3Logo, alt: "CSS3" },
    { src: GitLogo, alt: "Git" },
    { src: GitHubLogo, alt: "GitHub" },
    { src: Html5Logo, alt: "HTML5" },
    { src: JavaScriptLogo, alt: "JavaScript" },
    { src: NextJsLogo, alt: "Next.js", className: "invert sepia saturate-500 hue-rotate-180" },
    { src: TailWindCssLogo, alt: "TailwindCSS" },
    { src: TypeScriptLogo, alt: "TypeScript" },
];

export function Slider() {
    return (
        <Carousel className="w-[150px] max-w-xs flex items-center justify-center"
            opts={{
                loop: true
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                })
            ]}
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={150}
                            height={100}
                            className={image.className || ""}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='bg-transparent' />
            <CarouselNext className='bg-transparent' />
        </Carousel>
    )
}