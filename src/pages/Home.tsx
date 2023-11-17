import menu from "../../public/icon/menu.svg";
import CTABtn from "../components/CTABtn";
import fotoku from "../../public/img/fotoku.png";

function Home() {
	return (
		<>
			<div className="bg-[#111111] pt-32 h-screen w-full px-8">
				<div className="absolute w-[53px] h-[53px] rounded-[6px] bg-[#252525] right-8 top-8 flex items-center justify-center">
					<img className="w-7" src={menu} alt="" />
				</div>

				<div className="w-[244px] hidden min-[577px]:block overflow-hidden h-[244px] rounded-ful border-4 border-[#252525] rounded-full mx-auto">
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
		</>
	);
}

export default Home;
