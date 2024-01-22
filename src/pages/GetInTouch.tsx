import mail from "../../public/icon/mail.svg";
import phone from "../../public/icon/phone.svg";
import ig from "../../public/icon/ig.svg";
import wa from "../../public/icon/wa.svg";
import github from "../../public/icon/github.svg";
import telegram from "../../public/icon/telegram.svg";
import CTABtn from "../components/CTABtn";
import FloatingNavCircle from "../components/FloatingNavCircle";
import MobileNav from "../components/MobileNav";
import { useState } from "react";
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
	duration: 1000,
	position: {
		x: "right",
		y: "top",
	},
});

const GetInTouch = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const data = {
		service_id: "service_qt8hptj",
		template_id: "template_jvv8l7v",
		user_id: "yul4YhQSNBSUoU8TX",
		template_params: {
			to_name: "Rasikh Khalil Pasha",
			from_name: name,
			from_subject: subject,
			from_message: message,
			from_email: email,
		},
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const res = await axios.post(
				"https://api.emailjs.com/api/v1.0/email/send",
				data
			);
			setIsLoading(false);
			console.log(res.data);
			setName("");
			setEmail("");
			setSubject("");
			setMessage("");
			notyf.success("Your message has been sent!");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="bg-[#111] font-poppins text-white min-h-screen pb-10 min-[577px]:pt-20">
			<div className="w-full min-[577px]:hidden px-8 flex justify-between items-center h-16 bg-[#252525]">
				<div className="text-3xl font-bold text-white">
					GET IN <span className="text-[#FFB400]">TOUCH</span>
				</div>
			</div>

			<MobileNav />

			<FloatingNavCircle />

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
					<div className="px-8 mt-8 font-osans">
						<div className="flex gap-4">
							<img src={mail} alt="" />
							<div>
								<div className="text-sm text-[#BBBBBB]">MAIL ME</div>
								<div className="mt-1 text-sm">rasikhonly@gmail.com</div>
							</div>
						</div>

						<div className="flex gap-4 mt-7">
							<img src={phone} alt="" />
							<div>
								<div className="text-sm text-[#BBBBBB]">CALL ME</div>
								<div className="mt-1 text-sm">+62 882 7936 5062</div>
							</div>
						</div>
					</div>

					<div className="flex gap-6 px-8 mt-8">
						<a
							href="https://www.instagram.com/rasikhkhalilp/"
							target="_blank"
							className="bg-[#2B2A2A] hover:bg-[#FFB400] transition-all rounded-full p-4"
						>
							<img src={ig} alt="" />
						</a>
						<a
							target="_blank"
							href="https://github.com/rasikhkp"
							className="bg-[#2B2A2A] hover:bg-[#FFB400] transition-all rounded-full p-4"
						>
							<img src={github} alt="" />
						</a>
						<a
							href="https://wa.me/6288279365062"
							target="_blank"
							className="bg-[#2B2A2A] hover:bg-[#FFB400] transition-all rounded-full p-4"
						>
							<img src={wa} alt="" />
						</a>
					</div>
				</div>
				<form
					onSubmit={handleSubmit}
					className="px-8 mt-8 lg:px-0 font-osans"
				>
					<div className="gap-4 lg:flex">
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="bg-[#252525] rounded-full py-4 px-8 w-full text-sm"
							type="text"
							placeholder="YOUR NAME"
						/>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-[#252525] rounded-full py-4 px-8 w-full text-sm mt-7 lg:mt-0"
							type="text"
							placeholder="YOUR EMAIL"
						/>
						<input
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							className="bg-[#252525] rounded-full py-4 px-8 w-full text-sm mt-7 lg:mt-0"
							type="text"
							placeholder="YOUR SUBJECT"
						/>
					</div>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="bg-[#252525] rounded-[21px] py-4 px-8 w-full text-sm mt-7"
						placeholder="YOUR MESSAGE"
						name=""
						id=""
						cols={30}
						rows={10}
					></textarea>

					<CTABtn
						type="submit"
						className="mt-[75px] lg:mt-7 lg:ml-0"
						isLoading={isLoading}
						icon={telegram}
					>
						SEND MESSAGES
					</CTABtn>
				</form>
			</div>
		</div>
	);
};

export default GetInTouch;
