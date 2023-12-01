import { useState } from "react";
import {
	motion as m,
	AnimatePresence,
} from "framer-motion";
import KotakSatu from "../components/KotakSatu";


const Tes = () => {
	const [kotak1, setKotak1] = useState(false);
	const [kotak2, setKotak2] = useState(false);

  // const handleKotak1 = () => {
  //   if(kotak1){
  //     console.log('kotak1 = true')
  //     setAnimationKotak(() => animate(kotakOut));
	// 		animationKotak?.play();
  //     setKotak1((kotak1) => !kotak1)
  //   }else{
  //     console.log('kotak1 = false')
  //     setKotak1((kotak1) => !kotak1)
  //     console.log('scope', scope)
  //     setAnimationKotak(() => animate(kotakIn));
	// 		animationKotak?.play();
  //   }
  // }

	return (
		<div className="flex gap-10 w-full bg-slate-300 min-h-[100px]">
			<input
				onChange={() => setKotak1((kotak1) => !kotak1)}
				type="checkbox"
				name="kotak1"
				id="kotak1"
			/>

			<AnimatePresence>
				{kotak1 && (
					<KotakSatu />
				)}
			</AnimatePresence>

			{/* <button
				onClick={() => animationKotak?.play()}
				className="absolute top-96 left-32 text-gray-800 font-bold px-4 py-3 bg-slate-400 border active:bg-slate-500 rounded-xl"
			>
				replay kotak 1
			</button> */}

			{/* <input
				onChange={() => setKotak2(!kotak2)}
				type="checkbox"
				name="kotak2"
				id="kotak2"
			/>
			<div
				id="kotak1"
				className={`${
					kotak2 ? "block" : "hidden"
				} top-40 absolute left-80 w-40 h-40 bg-green-600`}
			></div>

			<m.div
				animate={{ x: 800 }}
				transition={{ duration: 3 }}
				className="bg-slate-800 top-80 absolute w-40 h-40"
			></m.div> */}
		</div>
	);
};

export default Tes;
