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
		<div className="bg-[#111] h-fit font-poppins">
			<div className="w-full px-4 flex justify-between items-center h-16 bg-[#252525]">
				<div className="text-3xl font-bold text-white">
					ABOUT <span className="text-[#FFB400]">ME</span>
				</div>
				<img className=" w-7" src={menu} alt="" />
			</div>

			<div className="flex justify-center w-full mt-8 text-lg font-bold text-white">
				PERSONAL INFO
			</div>

			<div className="w-[244px] overflow-hidden h-[244px] rounded-ful border-4 border-[#252525] rounded-full mx-auto mt-10">
				<img
					className="scale-[2] translate-x-4 -translate-y-32"
					src={fotoku}
					alt=""
				/>
			</div>

			<div className="flex gap-20 px-8 mt-10 text-sm text-white">
				<div>
					<div className="text-[#C0C0C0]">First Name :</div>
					<div>Rasikh</div>

					<div className="text-[#C0C0C0] mt-3">Last Name :</div>
					<div>Pasha</div>

					<div className="text-[#C0C0C0] mt-3">Age :</div>
					<div>20 Years</div>

					<div className="text-[#C0C0C0] mt-3">Nationality :</div>
					<div>Indonesia</div>
				</div>
				<div>
					<div className="text-[#C0C0C0]">Address :</div>
					<div>Bintan, Indonesia</div>

					<div className="text-[#C0C0C0] mt-3">Phone :</div>
					<div className="tracking-wide">+62 882 7936 5062</div>

					<div className="text-[#C0C0C0] mt-3">Email :</div>
					<div>rasikhonly@gmail.com</div>

					<div className="text-[#C0C0C0] mt-3">Languages :</div>
					<div>Indonesian and English</div>
				</div>
			</div>

			<CTABtn className="mt-14 ml-8">DOWNLOAD CV</CTABtn>

			<hr className="mt-20 mb-9 border-[#292929] mx-auto w-[154px]" />

			<div className="text-[20px] font-bold w-fit mx-auto text-white">
				MY SKILLS
			</div>

			<div className="w-40 mx-auto grid grid-cols-2 gap-10 mt-10">
				{skills.map((skill) => (
					<img src={skill} alt={skill} />
				))}
			</div>

			<hr className="mt-20 mb-9 border-[#292929] mx-auto w-[154px]" />

			<div className="text-[20px] font-bold w-fit mx-auto text-white">
				EDUCATION
			</div>
				
			<div className="w-fit mx-auto">
			<EducationHistory className="mt-14 font-bold" duration="2021 - PRESENT">
				<div className="text-sm">INFORMATICS ENGINEERING ---</div>
				<div className="text-xs text-[#BBBBBB] mt-1">UNIVERSITAS NEGERI SEMARANG</div>
			</EducationHistory>

			<EducationHistory lineH="h-8" className="mt-9 font-bold" duration="2018 - 2021">
				<div className="text-xs text-[#BBBBBB] mt-2">MAN IC BATAM</div>
			</EducationHistory>

			<EducationHistory lineH="h-8" className="mt-9 font-bold" duration="2015 - 2018">
				<div className="text-xs text-[#BBBBBB] mt-2">SMPIT BAHTERA INSANI</div>
			</EducationHistory>

			<EducationHistory lineH="h-8" className="mt-9 font-bold" duration="2009 - 2015">
				<div className="text-xs text-[#BBBBBB] mt-2">SDN 003 TELUK SEBONG</div>
			</EducationHistory>
			</div>
		</div>
	);
};

export default About;
