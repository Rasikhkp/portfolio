import x from "../../public/icon/x.svg";
import FloatingNavCircle from "../components/FloatingNavCircle";
import PortfolioImage from "../components/PortfolioImage";
import porto1 from "../../public/img/1710.jpg";
import todolistss from "../../public/img/todlist sss.png"
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
};

const portfolios = [
	{
		slug: "simple-todolist",
		project: "Website",
		techstack: "Nextjs, TypeScript, MongoDB, Tailwind, Redux Toolkit, Prisma",
		client: "Me",
		preview: "https://itsjusttodolist.vercel.app",
		image: todolistss,
	},
	{
		slug: "mobile-google",
		project: "Mobile App",
		techstack: "React Native, TypeScript",
		client: "Google",
		preview: "www.google.com",
		image: porto1,
	},
	{
		slug: "web-amazon",
		project: "E-commerce Website",
		techstack: "React, Redux, Node.js",
		client: "Amazon",
		preview: "www.amazon.com",
		image: porto1,
	},
	{
		slug: "app-facebook",
		project: "Social Media App",
		techstack: "React, Firebase",
		client: "Facebook",
		preview: "www.facebook.com",
		image: porto1,
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
						className={`${index > 0 ? "mt-8" : ""} min-[577px]:mt-0`}
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
						className="fixed top-6 lg:top-5 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-5 z-40 hover:opacity-60 transition-all active:opacity-40"
					>
						<img src={x} className="lg:w-7 w-4" alt="" />
					</button>
				</>
			) : null}
		</div>
	);
};

export default Portfolio;
