import home from "../../public/icon/home.svg";
import person from "../../public/icon/person.svg";
import portfolio from "../../public/icon/portfolio.svg";
import contact from "../../public/icon/contact.svg";
import { Link } from "react-router-dom";

const NavIcon = () => {
	return (
		<div className="fixed z-20 font-osans lg:flex hidden top-1/2 -translate-y-1/2 right-5 flex-col items-end">
			<Link
				to="/"
				className="w-[50px] group flex items-center justify-center h-[50px] transition-[width, background-color] duration-300 rounded-full bg-[#2B2A2A] hover:w-[125px] hover:bg-[#FFB400] relative"
			>
				<div className="group-hover:opacity-100 opacity-0 delay-100 duration-100 transition-all mr-7 text-white font-semibold">
					Home
				</div>
				<img className="w-[20px] absolute right-[15px]" src={home} alt="" />
			</Link>

			<Link
				to="/about"
				className="w-[50px] group flex items-center justify-center h-[50px] transition-[width, background-color] duration-300 mt-5 rounded-full bg-[#2B2A2A] hover:w-[125px] hover:bg-[#FFB400] relative"
			>
				<div className="group-hover:opacity-100 opacity-0 delay-100 duration-100 transition-all mr-7 text-white font-semibold">
					About
				</div>
				<img
					className="w-[20px] absolute right-[15px]"
					src={person}
					alt=""
				/>
			</Link>

			<Link
				to="/portfolio"
				className="w-[50px] group flex items-center justify-center h-[50px] transition-[width, background-color] duration-300 mt-5 rounded-full bg-[#2B2A2A] hover:w-[125px] hover:bg-[#FFB400] relative"
			>
				<div className="group-hover:opacity-100 opacity-0 delay-100 duration-100 transition-all mr-7 text-white font-semibold">
					Portfolio
				</div>
				<img
					className="w-[20px] absolute right-[15px]"
					src={portfolio}
					alt=""
				/>
			</Link>

			<Link
				to="/getintouch"
				className="w-[50px] group flex items-center justify-center h-[50px] transition-[width, background-color] duration-300 mt-5 rounded-full bg-[#2B2A2A] hover:w-[125px] hover:bg-[#FFB400] relative"
			>
				<div className="group-hover:opacity-100 opacity-0 delay-100 duration-100 transition-all mr-7 text-white font-semibold">
					Contact
				</div>
				<img
					className="w-[20px] absolute right-[15px]"
					src={contact}
					alt=""
				/>
			</Link>
		</div>
	);
};

export default NavIcon;
