import { gsap } from "gsap";
import { useRef, useContext, createContext, ReactNode } from "react";

const TransitionContext = createContext<(() => void) | null>(null);

export default function TransitionContextProvider({ children }: { children: ReactNode }) {
	const transitionRef = useRef(null);
	
	function transition() {
		gsap.timeline()
			.set(transitionRef.current, { zIndex: 100 })
			.to(".kotak", {
				y: "200%",
				duration: 1.2,
				stagger: 0.2,
				ease: "Power2.easeInOut",
			})
			.set(transitionRef.current, { zIndex: -10 })
			.set(".kotak", { y: "0%" });
	}
	return (
		<TransitionContext.Provider value={transition}>
			{children}
			<div
				ref={transitionRef}
				className="w-full fixed top-0 left-0 h-screen -z-10]"
			>
				<div className="kotak bg-[#2B2A2A] w-full h-screen absolute top-[-100%]"></div>
				<div className="kotak bg-[#FFB400] w-full h-screen absolute top-[-100%]"></div>
				<div className="kotak bg-[#2B2A2A] w-full h-screen absolute top-[-100%]"></div>
			</div>
		</TransitionContext.Provider>
	);
}

export function useTransitionContext() {
	const context = useContext(TransitionContext);

	if (!context) {
		throw new Error(
			"useTransitionCont must be used inside TransitionContextProvider"
		);
	}

	return context;
}
