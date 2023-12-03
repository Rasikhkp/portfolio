// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import KotakSatu from "../components/KotakSatu";
import TesCarousel from "../components/Carousel";

const Tes = () => {
	// const [kotak1, setKotak1] = useState(false);

	return (
		<>
			{/* <div className="flex gap-10 w-full bg-slate-300 min-h-[100px]">
				<div className="font-mono text-gray-700 font-bold text-2xl">Tes Transisi</div>
				<input
					onChange={() => setKotak1((kotak1) => !kotak1)}
					type="checkbox"
					name="kotak1"
					id="kotak1"
				/>

				<AnimatePresence>{kotak1 && <KotakSatu />}</AnimatePresence>

			</div> */}
			<TesCarousel />
		
		</>
	);
};

export default Tes;
