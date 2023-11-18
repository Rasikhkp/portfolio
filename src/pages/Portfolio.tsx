import menu from "../../public/icon/menu.svg";
import home from "../../public/icon/home.svg";
import person from "../../public/icon/person.svg";
import portfolio from "../../public/icon/portfolio.svg";
import contact from "../../public/icon/contact.svg";
import porto1 from "../../public/img/1710.jpg";

const Portfolio = () => {
	return (
		<div className="bg-[#111] font-poppins min-[577px]:pt-20">
			<div className="fixed top-1/2 -translate-y-1/2 right-[5vh]">
				<div className="w-[7vh] flex items-center justify-center h-[7vh] rounded-full bg-[#2B2A2A]">
					<img className="w-[3vh]" src={home} alt="" />
				</div>
				<div className="w-[7vh] flex items-center justify-center h-[7vh] rounded-full bg-[#2B2A2A] mt-[3vh]">
					<img className="w-[3vh]" src={person} alt="" />
				</div>
				<div className="w-[7vh] flex items-center justify-center h-[7vh] rounded-full bg-[#2B2A2A] mt-[3vh]">
					<img className="w-[3vh]" src={portfolio} alt="" />
				</div>
				<div className="w-[7vh] flex items-center justify-center h-[7vh] rounded-full bg-[#2B2A2A] mt-[3vh]">
					<img className="w-[3vh]" src={contact} alt="" />
				</div>
			</div>

			{/* Top navigation bar */}
			<div className="w-full min-[577px]:hidden px-8 flex justify-between items-center h-16 bg-[#252525]">
				<div className="text-3xl font-bold text-white">
					MY <span className="text-[#FFB400]">PORTFOLIO</span>
				</div>
				<img className="w-7" src={menu} alt="" />
			</div>

			{/* Floating menu button */}
			<div className="absolute lg:hidden hidden min-[577px]:flex transition-all w-[53px] h-[53px] rounded-[6px] bg-[#252525] right-8 top-8 items-center justify-center">
				<img className="w-7" src={menu} alt="" />
			</div>

			{/* Large title */}
			<div className="hidden min-[577px]:block text-[120px] lg:text-[22vh] relative font-bold text-[#222222] text-center">
				WORKS
				<div className="text-[56px] lg:text-[10vh] absolute w-[420px] lg:w-[80vh] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-white">
					MY <span className="text-[#FFB400] ">PORTFOLIO</span>
				</div>
			</div>

			{/* Image grid */}
			<div className="p-8 lg:p-[20vh] min-[577px]:grid min-[577px]:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[4vh] lg:gap-[6vh">
				<img className="rounded-lg lg:rounded-[1vh]" src={porto1} alt="" />
				<img
					className="rounded-lg lg:rounded-[1vh] mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg lg:rounded-[1vh] mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg lg:rounded-[1vh] mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg lg:rounded-[1vh] mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg lg:rounded-[1vh] mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg lg:rounded-[1vh] mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg lg:rounded-[1vh] mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
				<img
					className="rounded-lg lg:rounded-[1vh] mt-8 min-[577px]:mt-0"
					src={porto1}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Portfolio;
