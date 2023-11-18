import menu from "../../public/icon/menu.svg";
import home from "../../public/icon/home.svg";
import person from "../../public/icon/person.svg";
import portfolio from "../../public/icon/portfolio.svg";
import contact from "../../public/icon/contact.svg";
import CTABtn from "../components/CTABtn";
import fotoku from "../../public/img/fotoku.png";

function Home() {
	return (
		<>
			<div className="bg-[#111111] pt-32 h-screen w-full px-8 lg:hidden">
				<div className="absolute w-[53px] h-[53px] rounded-[6px] bg-[#252525] right-8 top-8 flex items-center justify-center">
					<img className="w-7" src={menu} alt="" />
				</div>

				<div className="w-[244px] hidden min-[577px]:block overflow-hidden h-[244px] rounded-full border-4 border-[#252525] mx-auto">
					<img
						className="scale-[2] translate-x-4 -translate-y-32"
						src={fotoku}
						alt=""
					/>
				</div>

				<div className="font-poppins min-[577px]:mt-4 min-[577px]:text-center text-3xl min-[577px]:text-4xl font-bold text-white">
					<span className="text-[#FFB400] ">
						I'M RASIKH KHALIL PASHA.{" "}
					</span>
					FULLSTACK DEVELOPER.
				</div>

				<div className="mt-3 tracking-wide text-white font-osans min-[577px]:text-center">
					Aspiring fullstack developer with a passion for innovation.
					Explore my portfolio for a glimpse into my developing journey!
				</div>

				<CTABtn className="mt-[96px] min-[577px]:mx-auto min-[577px]:mt-7">
					MORE ABOUT ME
				</CTABtn>
			</div>

			<div className="hidden lg:block h-screen overflow-hidden relative bg-[#111111]">
				<div className="bg-[#F9B000] w-[345px] h-[200vh] absolute -translate-x-40 -rotate-12"></div>

				<div className="flex gap-10 z-10 absolute left-[7.5vh] top-1/2 -translate-y-1/2">
					<div className="w-[60vh] h-[85vh] overflow-hidden  rounded-xl">
						<img
							src={fotoku}
							alt=""
							className="scale-[2] -translate-y-52 translate-x-10"
						/>
					</div>

					<div className="text-white mt-[14vh]">
						<div className="flex gap-7 text-[#FFB400] w-[50vw]">
							<div className="text-[6vh] font-bold relative ml-[8vh]">
								<span className="tracking-[-3px] font-bold -left-[8vh] absolute">—</span>
								I'M RASIKH KHALIL PASHA.
								<div className=" text-white">
									FULLSTACK DEVELOPER
								</div>
							</div>
						</div>

						<div className="font-osans mt-10 text-[2.5vh] tracking-[1px] w-[40vw]">
							Aspiring fullstack developer with a passion for innovation.
							Explore my portfolio for a glimpse into my developing
							journey!
						</div>

						<CTABtn className="mt-10 scale-[calc(2vh)]">
							MORE ABOUT ME
						</CTABtn>
					</div>
				</div>

				<div className="absolute top-1/2 -translate-y-1/2 right-5">
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
			</div>
		</>
	);
}

export default Home;
