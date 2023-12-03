import { gsap } from "gsap";
import { useEffect, useState } from "react";
import ImagePreview from "./ImagePreview";
import chevRight from "../../public/icon/chevRight.svg";
import chevLeft from "../../public/icon/chevLeft.svg";
import { PortfolioProps } from "../pages/Portfolio";

export default function Carousel({
	portfolios,
	initialIndex,
}: {
	portfolios: PortfolioProps[];
	initialIndex: number;
}) {
	const [move, setMove] = useState(0);
	const [portfolioIndex, setPortfolioIndex] = useState(0);

	useEffect(() => {
		initialActive(initialIndex);
		console.log("portfolios", portfolios);
	}, []);

	const initialActive = (index: number) => {
		const initialMove = -index * 50;
		const active = document.querySelector(`.${portfolios[index].slug}`);

		gsap.set(".portfolio", { x: `${initialMove}vw` });

		setMove(initialMove);
		setPortfolioIndex(index);

		if (active) {
			gsap.to(active, { scale: 1.2 });
			gsap.to(active.querySelector(".bg-black"), { opacity: 0 });
		}
	};

	const activate = (now: number, prev: number) => {
		const prevActive = document.querySelector(`.${portfolios[prev].slug}`);
		const active = document.querySelector(`.${portfolios[now].slug}`);

		if (active && prevActive) {
			gsap.to(active, { scale: 1.2 });
			gsap.to(active.querySelector(".bg-black"), { opacity: 0 });

			gsap.to(prevActive, { scale: 1 });
			gsap.to(prevActive.querySelector(".bg-black"), { opacity: 0.5 });
		}
	};

	const timeline = gsap.timeline();

	const handlePrev = () => {
		const minMove = -portfolios.length * 50;

		if (move - 50 > minMove) {
			setPortfolioIndex((prev) => prev + 1);
			setMove((prevMove) => prevMove - 50);

			activate(portfolioIndex + 1, portfolioIndex);

			timeline
				.set(".portfolio", { x: `${move}vw` })
				.to(".portfolio", { x: `${move - 50}vw` });
		}
	};

	const handleNext = () => {
		if (move < 0) {
			setPortfolioIndex((prev) => prev - 1);
			setMove((prevMove) => prevMove + 50);

			activate(portfolioIndex - 1, portfolioIndex);

			timeline
				.set(".portfolio", { x: `${move}vw` })
				.to(".portfolio", { x: `${move + 50}vw` });
		}
	};

	return (
		<div className="w-full top-0 h-screen fixed flex items-center overflow-hidden z-30">
			<button
				onClick={handleNext}
				className="absolute top-[50%] z-[1000000] left-5 -translate-y-1/2"
			>
				<img
					src={chevLeft}
					className="w-6 hover:opacity-60 transition-all active:opacity-40"
					alt=""
				/>
			</button>

			<div className="flex gap-[50vw] h-full items-center pl-[50vw] relative">
				<div className="absolute bg-black opacity-50 w-full h-full left-0"></div>
				{portfolios.map((portfolio) => (
					<div className="h-full w-[1px] relative bg-transparent">
						<ImagePreview
							project={portfolio.project}
							techstack={portfolio.techstack}
							client={portfolio.client}
							preview={portfolio.preview}
							image={portfolio.image}
							className={`${portfolio.slug} portfolio absolute -translate-x-1/2 top-1/2 -translate-y-1/2`}
						/>
					</div>
				))}
			</div>

			<button
				onClick={handlePrev}
				className="absolute top-[50%] z-[1000000] right-5 -translate-y-1/2"
			>
				<img
					src={chevRight}
					className="w-6 hover:opacity-60 transition-all active:opacity-40"
					alt=""
				/>
			</button>
		</div>
	);
}
