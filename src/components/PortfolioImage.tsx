import gsap from "gsap";
import { useRef } from "react";

type PositionObj = {
	value: number;
	name: string;
};

type PortfolioImageProps = {
	className?: string;
	src: string;
};

export default function PortfolioImage({
	className,
	src,
}: PortfolioImageProps) {
	const transitionRef = useRef(null);

	const getLowestValue = (posObjects: PositionObj[]) => {
		return posObjects.reduce((prev, curr) => {
			return prev.value < curr.value ? prev : curr;
		});
	};

	const transition = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log("event", event);
		const { clientX, clientY, currentTarget, type } = event;
		const { top, left, right, bottom } =
			currentTarget.getBoundingClientRect();

		const positions: PositionObj[] = [
			{ value: Math.abs(clientX - left), name: "left" },
			{ value: Math.abs(clientX - right), name: "right" },
			{ value: Math.abs(clientY - top), name: "top" },
			{ value: Math.abs(clientY - bottom), name: "bottom" },
		];

		let origin = getLowestValue(positions).name;

		const isY = origin == "top" || origin == "bottom";
		const isX = origin == "left" || origin == "right";
		const y = isY ? (origin == "top" ? "-100%" : "100%") : 0;
		const x = isX ? (origin == "left" ? "-100%" : "100%") : 0;

		const timeline = gsap.timeline();

		if (type == "mouseenter") {
			timeline
				.set(transitionRef.current, {
					opacity: 1,
					y,
					x,
				})
				.to(transitionRef.current, {
					y: 0,
					x: 0,
					duration: 0.3,
					ease: "power1.out",
				});
		} else {
			timeline
				.set(transitionRef.current, { y: 0, x: 0 })
				.to(transitionRef.current, {
					y,
					x,
					duration: 0.3,
					ease: "power1.out",
				});
		}
	};

	return (
		<button
			className={`${className} relative overflow-hidden rounded-lg`}
			onMouseEnter={(event) => transition(event)}
			onMouseLeave={(event) => transition(event)}
		>
			<div
				ref={transitionRef}
				className="absolute w-full h-full font-medium opacity-0 flex justify-center items-center text-white bg-[#FFB400]"
			>
				Image Project
			</div>
			<img src={src} alt="" />
		</button>
	);
}
