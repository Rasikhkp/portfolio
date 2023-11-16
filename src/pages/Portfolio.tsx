import menu from "../../public/icon/menu.svg";
import porto1 from "../../public/img/1710.jpg";

const Portfolio = () => {
	return (
		<div className="bg-[#111] font-poppins">
			<div className="w-full px-4 flex justify-between items-center h-16 bg-[#252525]">
				<div className="text-3xl font-bold text-white">
					MY <span className="text-[#FFB400]">PORTFOLIO</span>
				</div>
				<img className=" w-7" src={menu} alt="" />
			</div>
            
            <div className="p-8">
                <img className="rounded-lg" src={porto1} alt="" />
                <img className="rounded-lg mt-8" src={porto1} alt="" />
                <img className="rounded-lg mt-8" src={porto1} alt="" />
                <img className="rounded-lg mt-8" src={porto1} alt="" />
                <img className="rounded-lg mt-8" src={porto1} alt="" />
                <img className="rounded-lg mt-8" src={porto1} alt="" />
            </div>
		</div>
	);
};

export default Portfolio;
