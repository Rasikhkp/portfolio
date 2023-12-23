import home from "../../public/icon/home.svg";
import person from "../../public/icon/person.svg";
import portfolio from "../../public/icon/portfolio.svg";
import contact from "../../public/icon/contact.svg";
import { useNavigate } from "react-router-dom";
import { useTransitionContext } from "../context/TransitionContextProvider";

export function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const FloatingNavCircle = () => {
	const navigate = useNavigate();
	const transition = useTransitionContext();

	const navigateTo = async (path: string) => {
		transition();
		await wait(800);
		navigate(path);
	};

	return (
		<>
			<div className="fixed z-20 font-osans lg:flex hidden top-1/2 -translate-y-1/2 right-5 flex-col items-end">
				<button
					onClick={() => navigateTo("/")}
					className="w-[50px] group flex items-center justify-center h-[50px] transition-[width, background-color] duration-300 rounded-full bg-[#2B2A2A] hover:w-[125px] hover:bg-[#FFB400] relative"
				>
					<div className="group-hover:opacity-100 opacity-0 delay-100 duration-100 transition-all mr-7 text-white font-semibold">
						Home
					</div>
					<img
						className="w-[20px] absolute right-[15px]"
						src={home}
						alt=""
					/>
				</button>

				<button
					onClick={() => navigateTo("/about")}
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
				</button>

				<button
					onClick={() => navigateTo("/portfolio")}
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
				</button>

				<button
					onClick={() => navigateTo("/getintouch")}
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
				</button>
			</div>
		</>
	);
};

export default FloatingNavCircle;
