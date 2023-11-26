import home from "../../public/icon/home.svg";
import person from "../../public/icon/person.svg";
import portfolio from "../../public/icon/portfolio.svg";
import contact from "../../public/icon/contact.svg";

const NavIcon = () => {
	return (
		<div className="fixed lg:block hidden top-1/2 -translate-y-1/2 right-10">
			<div className="w-[50px] flex items-center justify-center h-[50px] rounded-full bg-[#2B2A2A]">
				<img className="w-[20px]" src={home} alt="" />
			</div>
			<div className="w-[50px] flex items-center justify-center h-[50px] rounded-full bg-[#2B2A2A] mt-[20px]">
				<img className="w-[20px]" src={person} alt="" />
			</div>
			<div className="w-[50px] flex items-center justify-center h-[50px] rounded-full bg-[#2B2A2A] mt-[20px]">
				<img className="w-[20px]" src={portfolio} alt="" />
			</div>
			<div className="w-[50px] flex items-center justify-center h-[50px] rounded-full bg-[#2B2A2A] mt-[20px]">
				<img className="w-[20px]" src={contact} alt="" />
			</div>
		</div>
	);
};

export default NavIcon;
