import gsap from "gsap";
import { useState } from "react";
import x from "../../public/icon/x.svg";
import menu from "../../public/icon/menu.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useTransitionContext } from "../context/TransitionContextProvider";

const wait = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function MobileNav() {
    const [openNav, setOpenNav] = useState(false);
	const navigate = useNavigate();
	const transition = useTransitionContext();
	const currentPath = useLocation().pathname;

	const handleOpenNav = () => {
		if (openNav) {
			gsap.to(".nav", {
				x: 0,
				duration: 0.3,
				ease: "power2.inOut",
			});
		} else {
			gsap.to(".nav", {
				x: "100%",
				duration: 0.3,
				ease: "power2.inOut",
			});
		}
		setOpenNav((prev) => !prev);
	};

	const navigateTo = async (path: string) => {
		transition();
		await wait(800);
		navigate(path);
	};
	return (
		<div className="lg:hidden block">
			<button
				onClick={handleOpenNav}
				className="absolute w-[53px] z-30 h-[53px] rounded-[6px] active:bg-[#252525] right-5 top-2 flex items-center justify-center"
			>
				<img
					className={` ${openNav ? "w-5" : "w-7"}`}
					src={openNav ? x : menu}
					alt=""
				/>
			</button>

			<div className="bg-[#252525] nav absolute top-0 -left-[100%] w-full z-20 h-screen text-white">
				<div className="px-8 pt-20">
					<button onClick={() => navigateTo('/')} className="flex gap-6 min-[577px]:gap-8 border-b  border-[#292929] py-4">
						<div className="w-5 min-[577px]:w-7">
							<svg
								fill={currentPath == '/' ? '#FFB400' : '#FFFFFF'}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								id="home"
								stroke={currentPath == '/' ? '#FFB400' : '#FFFFFF'}
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<path d="M21.71,12.71a1,1,0,0,1-1.42,0L20,12.42V20.3A1.77,1.77,0,0,1,18.17,22H16a1,1,0,0,1-1-1V15.1a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1V21a1,1,0,0,1-1,1H5.83A1.77,1.77,0,0,1,4,20.3V12.42l-.29.29a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42l9-9a1,1,0,0,1,1.42,0l9,9A1,1,0,0,1,21.71,12.71Z"></path>
								</g>
							</svg>
						</div>
						<div className={`min-[577px]:text-[25px] ${currentPath == '' && 'text-[#FFB400]'}`}>HOME</div>
					</button>

					<button onClick={() => navigateTo('/about')} className="flex items-center gap-6 min-[577px]:gap-8 border-b border-[#292929] py-4">
						<div className="w-5 min-[577px]:w-7">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								// stroke={currentPath == '/about' ? '#FFB400' : '#FFFFFF'}
								// stroke='#FFB400'
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<path
										d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
										stroke={currentPath == '/about' ? '#FFB400' : '#FFFFFF'}
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{" "}
									<path
										d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
										stroke={currentPath == '/about' ? '#FFB400' : '#FFFFFF'}
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{" "}
								</g>
							</svg>
						</div>
						<div className={`min-[577px]:text-[25px] ${currentPath == '/about' && 'text-[#FFB400]'}`}>ABOUT</div>
					</button>

					<button onClick={() => navigateTo('/portfolio')} className="flex items-center gap-6 min-[577px]:gap-8 border-b border-[#292929] py-4">
						<div className="w-5 min-[577px]:w-7">
							<svg
								fill={currentPath == '/portfolio' ? '#FFB400' : '#FFFFFF'}
								version="1.1"
								id="Icons"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32 32"
								stroke={currentPath == '/portfolio' ? '#FFB400' : '#FFFFFF'}
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<g>
										{" "}
										<path d="M26,9h-2.6c-1.2-3-4.1-5-7.4-5c-3.3,0-6.2,2-7.4,5H6c-1.7,0-3,1.3-3,3v0.6C3,16.1,5.9,19,9.4,19h13.3 c3.5,0,6.4-2.9,6.4-6.4V12C29,10.3,27.7,9,26,9z M16,6c2.2,0,4.1,1.2,5.2,3H10.8C11.9,7.2,13.8,6,16,6z"></path>{" "}
										<path d="M23,21C23,21,23,21,23,21l0,2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2H11v2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0,0,0,0,0,0 c-2.4-0.1-4.5-1.2-6-2.9V25c0,1.7,1.3,3,3,3h20c1.7,0,3-1.3,3-3v-6.9C27.5,19.8,25.4,20.9,23,21z"></path>{" "}
									</g>{" "}
								</g>
							</svg>
						</div>
						<div className={`min-[577px]:text-[25px] ${currentPath == '/portfolio' && 'text-[#FFB400]'}`}>PORTFOLIO</div>
					</button>

					<button onClick={() => navigateTo('/getintouch')} className="flex items-center gap-6 min-[577px]:gap-8 border-b border-[#292929] py-4">
						<div className="w-5 min-[577px]:w-7">
							<svg
								fill={currentPath == '/getintouch' ? '#FFB400' : '#FFFFFF'}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								stroke={currentPath == '/getintouch' ? '#FFB400' : '#FFFFFF'}
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<path d="M4,21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3ZM12,7.5a2,2,0,1,1-2,2A2,2,0,0,1,12,7.5ZM8.211,16.215a4,4,0,0,1,7.578,0A.993.993,0,0,1,14.83,17.5H9.18A1,1,0,0,1,8.211,16.215Z"></path>
								</g>
							</svg>
						</div>
						<div className={`min-[577px]:text-[25px] ${currentPath == '/getintouch' && 'text-[#FFB400]'}`}>CONTACT</div>
					</button>
				</div>
			</div>
		</div>
	);
}
