import x from "../../public/icon/x.svg";
import FloatingNavCircle from "../components/FloatingNavCircle";
import PortfolioImage from "../components/PortfolioImage";
import fotoKalingga from "../../public/img/foto kalingga.png";
import todolistss from "../../public/img/justtodolist.png";
import pp1 from "../../public/img/pp1.png";
import carepulse from "../../public/img/carepulse.png";
import pp2 from "../../public/img/pp2.png";
import cbt from "../../public/img/cbt.png";
import kaizen from "../../public/img/kaizen.png";
import cashzzle from "../../public/img/cashzzle.png";
import Carousel from "../components/Carousel";
import { useState } from "react";
import MobileNav from "../components/MobileNav";

export type PortfolioProps = {
    slug: string;
    project: string;
    techstack: string;
    client: string;
    preview: string;
    image: string;
    name: string;
};

const portfolios = [
    {
        name: "CarePulse",
        slug: "carepulse",
        project: "Website",
        techstack: "Next JS, Tailwind CSS, AppWrite",
        client: "Me",
        preview: "",
        image: carepulse,
    },
    {
        name: "CBT Website",
        slug: "cbt-website",
        project: "Website",
        techstack: "CodeIgniter, Bootstrap, Jquery",
        client: "PT. Bintan Resort Cakrawala",
        preview: "",
        image: cbt,
    },
    {
        name: "Kaizen",
        slug: "kaizen",
        project: "Website",
        techstack:
            "Nextjs, Typescript, MongoDB, Tailwind, Redux Toolkit, Prisma",
        client: "Me",
        preview: "https://nkey.vercel.app",
        image: kaizen,
    },
    {
        name: "Cashzzle",
        slug: "cashzzle",
        project: "Website",
        techstack:
            "Nextjs, Typescript, MongoDB, Tailwind, Redux Toolkit, Prisma",
        client: "Me",
        preview: "https://cashzzle.vercel.app",
        image: cashzzle,
    },
    {
        name: "TodoList",
        slug: "simple-todolist",
        project: "Website",
        techstack:
            "Nextjs, TypeScript, MongoDB, Tailwind, Redux Toolkit, Prisma",
        client: "Me",
        preview: "https://itsjusttodolist.vercel.app",
        image: todolistss,
    },
    {
        name: "ERP Website",
        slug: "web-kalingga",
        project: "Website",
        techstack: "Laravel, Javascript, Tailwind, AlpineJs",
        client: "CV Kalingga Keling Jati",
        preview: "http://kalinggakelingjati.site",
        image: fotoKalingga,
    },
    {
        name: "Portfolio Practice 1",
        slug: "practice-portfolio-1",
        project: "Website",
        techstack: "ReactJs, Typescript, Tailwind, Framer Motion",
        client: "Me",
        preview: "https://portfolio-practice-1.vercel.app",
        image: pp1,
    },
    {
        name: "Portfolio Practice 2",
        slug: "practice-portfolio-2",
        project: "Website",
        techstack: "ReactJs, Typescript, Tailwind, GSAP",
        client: "Me",
        preview: "https://portfolio-practice-2.vercel.app",
        image: pp2,
    },
];

const Portfolio = () => {
    const [openCarousel, setOpenCarousel] = useState(false);
    const [portfolioIndex, setPortfolioIndex] = useState(0);
    return (
        <div className="bg-[#111] font-poppins min-[577px]:pt-20 min-h-screen">
            <FloatingNavCircle />

            {/* Top navigation bar */}
            <div className="w-full  min-[577px]:hidden px-8 flex justify-between items-center h-16 bg-[#252525]">
                <div className="text-3xl font-bold text-white">
                    MY <span className="text-[#FFB400]">PORTFOLIO</span>
                </div>
            </div>

            <MobileNav />

            {/* Large title */}
            <div className="hidden min-[577px]:block text-[120px] relative font-extrabold text-[#222222] text-center">
                WORKS
                <div className="text-[56px] lg:text-[56px] absolute w-[600px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-white">
                    MY <span className="text-[#FFB400] ">PORTFOLIO</span>
                </div>
            </div>

            {/* Image grid */}
            <div className="lg:px-32 px-8 py-8 min-[577px]:grid min-[577px]:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
                {portfolios.map((portfolio, index) => (
                    <PortfolioImage
                        onClick={() => {
                            setOpenCarousel(true);
                            setPortfolioIndex(index);
                        }}
                        key={index}
                        image={portfolio.image}
                        name={portfolio.name}
                        className={`${
                            index > 0 ? "mt-8" : ""
                        } min-[577px]:mt-0`}
                    />
                ))}
            </div>

            {openCarousel ? (
                <>
                    <Carousel
                        initialIndex={portfolioIndex}
                        portfolios={portfolios}
                    />
                    <button
                        onClick={() => setOpenCarousel(false)}
                        className="fixed z-40 transition-all translate-x-1/2 top-6 lg:top-5 right-1/2 lg:translate-x-0 lg:right-5 hover:opacity-60 active:opacity-40"
                    >
                        <img src={x} className="w-4 lg:w-7" alt="" />
                    </button>
                </>
            ) : null}
        </div>
    );
};

export default Portfolio;
