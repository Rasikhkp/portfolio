import menu from "../../public/icon/menu.svg";
import mail from "../../public/icon/mail.svg";
import phone from "../../public/icon/phone.svg";
import ig from "../../public/icon/ig.svg";
import wa from "../../public/icon/wa.svg";
import telegram from "../../public/icon/telegram.svg";
import lin from "../../public/icon/lin.svg";
import CTABtn from "../components/CTABtn";
import NavIcon from "../components/NavIcon";

const GetInTouch = () => {
	return (
		<div className="bg-[#111] font-poppins text-white min-h-screen pb-10 min-[577px]:pt-20">
			<div className="w-full min-[577px]:hidden px-8 flex justify-between items-center h-16 bg-[#252525]">
				<div className="text-3xl font-bold text-white">
					GET IN <span className="text-[#FFB400]">TOUCH</span>
				</div>
				<img className=" w-7" src={menu} alt="" />
			</div>

			{/* Floating menu button */}
			<div className="absolute hidden lg:hidden min-[577px]:flex transition-all w-[53px] h-[53px] rounded-[6px] bg-[#252525] right-8 top-8 items-center justify-center">
				<img className="w-7" src={menu} alt="" />
			</div>

			<NavIcon />

			{/* Large title */}
			<div className="hidden min-[577px]:block text-[120px] relative font-extrabold text-[#222222] text-center">
				CONTACT
				<div className="text-[56px] absolute w-[500px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white">
					GET IN <span className="text-[#FFB400] ">TOUCH</span>
				</div>
			</div>

			<div className="lg:flex lg:max-w-screen-xl lg:mx-auto lg:px-24">
				<div className="lg:flex-none lg:w-80">
					<div className="px-8 mt-8">
						<div className="text-[20px] min-[577px]:text-2xl font-medium">
							DON'T BE SHY!
						</div>

						<div className="mt-3 text-xs min-[577px]:text-base font-osans leading-relaxed tracking-wide">
							Feel free to get in touch with me. I am always open to
							discussing new projects, creative ideas or opportunities to
							be part of your visions.
						</div>
					</div>
					<div className="mt-8 px-8 font-osans">
						<div className="flex gap-4">
							<img src={mail} alt="" />
							<div>
								<div className="text-sm text-[#BBBBBB]">MAIL ME</div>
								<div className="text-sm mt-1">rasikhonly@gmail.com</div>
							</div>
						</div>

						<div className="flex gap-4 mt-7">
							<img src={phone} alt="" />
							<div>
								<div className="text-sm text-[#BBBBBB]">CALL ME</div>
								<div className="text-sm mt-1">+62 882 7936 5062</div>
							</div>
						</div>
					</div>

					<div className="mt-8 flex gap-6 px-8">
						<a href="#" className="bg-[#2B2A2A] hover:bg-[#FFB400] transition-all rounded-full p-4">
							<img src={ig} alt="" />
						</a>
						<a href="#" className="bg-[#2B2A2A] hover:bg-[#FFB400] transition-all rounded-full p-4">
							<img src={lin} alt="" />
						</a>
						<a href="#" className="bg-[#2B2A2A] hover:bg-[#FFB400] transition-all rounded-full p-4">
							<img src={wa} alt="" />
						</a>
					</div>
				</div>
				<div className="mt-8 px-8 lg:px-0 font-osans">
					<div className="lg:flex gap-4">
						<input
							className="bg-[#252525] rounded-full py-4 px-8 w-full text-sm"
							type="text"
							placeholder="YOUR NAME"
						/>
						<input
							className="bg-[#252525] rounded-full py-4 px-8 w-full text-sm mt-7 lg:mt-0"
							type="text"
							placeholder="YOUR EMAIL"
						/>
						<input
							className="bg-[#252525] rounded-full py-4 px-8 w-full text-sm mt-7 lg:mt-0"
							type="text"
							placeholder="YOUR SUBJECT"
						/>
					</div>
					<textarea
						className="bg-[#252525] rounded-[21px] py-4 px-8 w-full text-sm mt-7"
						placeholder="YOUR MESSAGE"
						name=""
						id=""
						cols={30}
						rows={10}
					></textarea>

					<CTABtn className="mt-[75px] lg:mt-7 lg:ml-0" icon={telegram}>SEND MESSAGES</CTABtn>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
