import menu from "../../public/icon/menu.svg";
import porto1 from "../../public/img/1710.jpg";

const Portfolio = () => {
	return (
		<div className="bg-[#111] font-poppins min-[577px]:pt-20">
			{/* Top navigation bar */}
			<div className="w-full min-[577px]:hidden px-8 flex justify-between items-center h-16 bg-[#252525]">
				<div className="text-3xl font-bold text-white">
					MY <span className="text-[#FFB400]">PORTFOLIO</span>
				</div>
				<img className="w-7" src={menu} alt="" />
			</div>

			{/* Floating menu button */}
			<div className="absolute hidden min-[577px]:flex transition-all w-[53px] h-[53px] rounded-[6px] bg-[#252525] right-8 top-8 items-center justify-center">
				<img className="w-7" src={menu} alt="" />
			</div>

			{/* Large title */}
			<div className="hidden min-[577px]:block text-[120px] relative font-bold text-[#222222] text-center">
				WORKS
				<div className="text-[56px] absolute w-[500px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-white">
					MY <span className="text-[#FFB400] ">PORTFOLIO</span>
				</div>
			</div>

			{/* Image grid */}
			<div className="p-8 min-[577px]:grid min-[577px]:grid-cols-2 gap-8">
				<img className="rounded-lg" src={porto1} alt="" />
				<img
					className="rounded-lg mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Portfolio;
