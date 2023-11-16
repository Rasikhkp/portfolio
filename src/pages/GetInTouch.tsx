import menu from "../../public/icon/menu.svg";
import mail from "../../public/icon/mail.svg";
import phone from "../../public/icon/phone.svg";
import ig from "../../public/icon/ig.svg";
import wa from "../../public/icon/wa.svg";
import lin from "../../public/icon/lin.svg";

const GetInTouch = () => {
	return (
		<div className="bg-[#111] font-poppins text-white h-screen">
			<div className="w-full px-4 flex justify-between items-center h-16 bg-[#252525]">
				<div className="text-3xl font-bold text-white">
					GET IN <span className="text-[#FFB400]">TOUCH</span>
				</div>
				<img className=" w-7" src={menu} alt="" />
			</div>

			<div className="px-8 mt-8">
				<div className="text-[20px] font-medium">DON'T BE SHY!</div>

				<div className="mt-3 text-xs leading-relaxed tracking-wide">
					Feel free to get in touch with me. I am always open to discussing
					new projects, creative ideas or opportunities to be part of your
					visions.
				</div>
			</div>

			<div className="mt-8 px-8">
				<div className="flex gap-4">
					<img src={mail} alt="" />
					<div>
						<div className="text-xs text-[#BBBBBB]">MAIL ME</div>
						<div className="text-[10px] mt-1">rasikhonly@gmail.com</div>
					</div>
				</div>

				<div className="flex gap-4 mt-7">
					<img src={phone} alt="" />
					<div>
						<div className="text-xs text-[#BBBBBB]">CALL ME</div>
						<div className="text-[10px] mt-1">+62 882 7936 5062</div>
					</div>
				</div>
			</div>

			<div className="mt-8 flex gap-6 px-8">
				<div className="bg-[#2B2A2A] rounded-full p-4">
					<img src={ig} alt="" />
				</div>
				<div className="bg-[#2B2A2A] rounded-full p-4">
					<img src={lin} alt="" />
				</div>
				<div className="bg-[#2B2A2A] rounded-full p-4">
					<img src={wa} alt="" />
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
