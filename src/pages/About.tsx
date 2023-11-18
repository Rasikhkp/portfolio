import menu from "../../public/icon/menu.svg";
import fotoku from "../../public/img/fotoku.png";
import CTABtn from "../components/CTABtn";
import html from "../../public/icon/html.svg";
import js from "../../public/icon/js.svg";
import ex from "../../public/icon/ex.svg";
import css from "../../public/icon/css.svg";
import laravel from "../../public/icon/laravel.svg";
import mongo from "../../public/icon/mongo.svg";
import njs from "../../public/icon/njs.svg";
import php from "../../public/icon/php.svg";
import react from "../../public/icon/react.svg";
import ts from "../../public/icon/ts.svg";
import tw from "../../public/icon/tw.svg";
import EducationHistory from "../components/EducationHistory";

const About = () => {
	const skills = [html, js, css, tw, php, njs, react, ts, mongo, laravel, ex];
	return (
		<div className="bg-[#111] h-fit font-poppins min-[577px]:pt-20">
			<div className="w-full px-8 flex min-[577px]:hidden transition-all justify-between items-center h-16 bg-[#252525]">
				<div className="text-3xl font-bold text-white">
					ABOUT <span className="text-[#FFB400]">ME</span>
				</div>
				<img className=" w-7" src={menu} alt="" />
			</div>

			<div className="absolute hidden min-[577px]:flex transition-all w-[53px] h-[53px] rounded-[6px] bg-[#252525] right-8 top-8 items-center justify-center">
				<img className="w-7" src={menu} alt="" />
			</div>

			<div className="hidden min-[577px]:block text-[120px] relative font-bold text-[#222222] text-center">
				RESUME
				<div className="text-[56px] absolute w-80 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-white">
					ABOUT <span className="text-[#FFB400] ">ME</span>
				</div>
			</div>

			<div className="text-center mt-8 min-[577px]:ml-8 full text-lg min-[577px]:text-2xl min-[577px]:text-start font-bold text-white">
				PERSONAL INFO
			</div>

			<div className="w-[244px] min-[577px]:hidden transition-all overflow-hidden h-[244px] rounded-ful border-4 border-[#252525] rounded-full mx-auto mt-10">
				<img
					className="scale-[2] translate-x-4 -translate-y-32"
					src={fotoku}
					alt=""
				/>
			</div>

			<div className="flex gap-20 min-[577px]:gap-12 transition-all px-8 mt-10 min-[577px]:text-base text-sm text-white">
				<div>
					<div className="text-[#C0C0C0] mt-3">
						First Name :
						<span className="text-white block min-[577px]:inline transition-all">
							{" "}
							Rasikh
						</span>
					</div>

					<div className="text-[#C0C0C0] mt-3">
						Last Name :
						<span className="text-white block min-[577px]:inline transition-all">
							{" "}
							Pasha
						</span>
					</div>

					<div className="text-[#C0C0C0] mt-3">
						Age :
						<span className="text-white block min-[577px]:inline transition-all">
							{" "}
							20 Years
						</span>
					</div>

					<div className="text-[#C0C0C0] mt-3">
						Nationality :
						<span className="text-white block min-[577px]:inline transition-all">
							{" "}
							Indonesia
						</span>
					</div>
				</div>
				<div>
					<div className="text-[#C0C0C0] mt-3">
						Address :
						<span className="text-white block min-[577px]:inline transition-all">
							{" "}
							Bintan, Indonesia
						</span>
					</div>

					<div className="text-[#C0C0C0] mt-3">
						Phone :
						<span className="text-white block min-[577px]:inline tracki transition-allng-wide">
							{" "}
							+62 882 7936 5062
						</span>
					</div>

					<div className="text-[#C0C0C0] mt-3">
						Email :
						<span className="text-white block min-[577px]:inline transition-all">
							{" "}
							rasikhonly@gmail.com
						</span>
					</div>

					<div className="text-[#C0C0C0] mt-3">
						Languages :
						<span className="text-white block min-[577px]:inline transition-all">
							{" "}
							Indonesian and English
						</span>
					</div>
				</div>
			</div>

			<CTABtn className="mt-14 ml-8">DOWNLOAD CV</CTABtn>

			<hr className="mt-20 mb-9 border-[#292929] mx-auto w-[154px]" />

			<div className="text-[20px] min-[577px]:text-2xl font-bold w-fit mx-auto text-white">
				MY SKILLS
			</div>

			<div className="w-40 min-[577px]:w-80 mx-auto grid grid-cols-2 gap-10 mt-10 min-[577px]:mt-20 transition-all justify-items-center">
				{skills.map((skill) => (
					<img
						className="min-[577px]:w-[62px]"
						key={skill}
						src={skill}
						alt={skill}
					/>
				))}
			</div>

			<hr className="mt-20 mb-9 border-[#292929] mx-auto w-[154px]" />

			<div className="text-[20px] min-[577px]:text-2xl font-bold w-fit mx-auto text-white">
				EDUCATION
			</div>

			<div className="w-fit mx-auto pb-5">
				<EducationHistory
					lineH="min-[577px]:h-8 h-14"
					className="mt-14 font-bold"
					duration="2021 - PRESENT"
				>
					<span className="text-sm">INFORMATICS ENGINEERING <span className="tracking-[-3px]">——</span> </span>
					<span className="text-xs text-[#BBBBBB] min-[577px]:ml-1 mt-1 min-[577px]:inline block">
						UNIVERSITAS NEGERI SEMARANG
					</span>
				</EducationHistory>

				<EducationHistory
					lineH="h-8"
					className="mt-9 font-bold"
					duration="2018 - 2021"
				>
					<div className="text-xs text-[#BBBBBB] mt-2">MAN IC BATAM</div>
				</EducationHistory>

				<EducationHistory
					lineH="h-8"
					className="mt-9 font-bold"
					duration="2015 - 2018"
				>
					<div className="text-xs text-[#BBBBBB] mt-2">
						SMPIT BAHTERA INSANI
					</div>
				</EducationHistory>

				<EducationHistory
					lineH="h-8"
					className="mt-9 font-bold"
					duration="2009 - 2015"
				>
					<div className="text-xs text-[#BBBBBB] mt-2">
						SDN 003 TELUK SEBONG
					</div>
				</EducationHistory>
			</div>
		</div>
	);
};

export default About;
