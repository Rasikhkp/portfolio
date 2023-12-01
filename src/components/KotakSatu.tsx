import { useEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";
import { kotakIn, kotakOut } from "../utils/helperFunctions";

const KotakSatu = () => {
	const [scope, animate] = useAnimate();
	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
		isPresent
			? animate(kotakIn)
			: animate(kotakOut).then(() => safeToRemove());
	}, [isPresent]);
	return (
		<div
			ref={scope}
			className="top-40 overflow-hidden absolute w-full h-96 flex border-2 justify-center items-center"
		>
			<div className="kotak z-10 w-full origin-top bg-yellow-500 h-full absolute"></div>
			<div className="kotak z-10 w-full origin-top bg-green-900 h-full absolute"></div>
			<div className="kotak z-10 w-full origin-top bg-yellow-500 h-full absolute"></div>
			<div className="kotak z-10 w-full origin-top bg-green-900 h-full absolute"></div>
			<div className="text opacity-0 text-xl font-bold">lala</div>
		</div>
	);
};

export default KotakSatu;
