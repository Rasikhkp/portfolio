import x from "../../public/icon/x.svg";
import chevLeft from "../../public/icon/chevLeft.svg";
import chevRight from "../../public/icon/chevRight.svg";
import document from "../../public/icon/document.svg";
import person from "../../public/icon/person.svg";
import tag from "../../public/icon/tag.svg";
import eye from "../../public/icon/eye.svg";
import porto1 from "../../public/img/1710.jpg";

const PortoPreview = () => {
	return (
		<div className="bg-[#252525] font-poppins text-white min-h-screen">
			<div className="w-full px-8 flex justify-between items-center h-16 bg-[#252525] border-b border-gray-700">
				<img className=" w-3" src={chevLeft} alt="" />
				<img className=" w-4" src={x} alt="" />
				<img className=" w-3" src={chevRight} alt="" />
			</div>

			<div className="text-2xl min-[577px]:text-[32px] transition-all text-[#FFB400] font-bold text-center mt-[49px]">
				IMAGE PROJECT
			</div>

			<div className="px-8 mt-[42px] min-[577px]:grid min-[577px]:grid-cols-2">
				<div className="flex gap-2">
					<img className="w-3 min-[677px]:w-4 transition-all" src={document} alt="" />
					<div className="text-xs min-[677px]:text-base transition-all">
						Project : Website
					</div>
				</div>
				<div className="flex gap-2 mt-2 min-[677px]:mt-0">
					<img className="w-3 min-[677px]:w-4 transition-all" src={person} alt="" />
					<div className="text-xs min-[677px]:text-base transition-all">
						Client : Kalingga
					</div>
				</div>
				<div className="flex gap-2 mt-2">
					<img className="w-3 min-[677px]:w-4 transition-all" src={tag} alt="" />
					<div className="text-xs min-[677px]:text-base transition-all">
						Technology : HTML, CSS, Javascript
					</div>
				</div>
				<div className="flex gap-2 mt-2">
					<img className="w-3 min-[677px]:w-4 transition-all" src={eye} alt="" />
					<div className="text-xs min-[677px]:text-base transition-all">
						Preview :{" "}
						<a
							href="#"
							className="text-[#856314] underline hover:no-underline"
						>
							www.envato.com
						</a>
					</div>
				</div>
			</div>
			<img className="rounded-lg mt-8 w-[90%] mx-auto" src={porto1} alt="" />
		</div>
	);
};

export default PortoPreview;
