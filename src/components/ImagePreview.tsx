import tag from "../../public/icon/tag.svg";
import person from "../../public/icon/person.svg";
import eye from "../../public/icon/eye.svg";
import document from "../../public/icon/document.svg";

type ImagePreviewProps = {
	className: string;
	project: string;
	techstack: string;
	client: string;
	preview: string;
	image: string;
};

export default function ImagePreview({
	className,
	project,
	techstack,
	client,
	preview,
	image,
}: ImagePreviewProps) {
	return (
		<>
			<div
				className={`${className} hidden lg:block m-auto px-5 py-8 overflow-hidden rounded-2xl font-poppins text-center w-[500px] h-fit bg-[#252525]`}
			>
				<div className="text-2xl font-bold text-[#FFB400]">
					IMAGE PROJECT
				</div>
				{/* http://kalinggakelingjati.site/components */}
				<div className="flex justify-between gap-3 mt-4 text-xs text-white text-start">
					<div>
						<div>
							<img src={document} className="inline w-3 mr-3" /> Project
							: {project}
						</div>
						<div className="flex gap-2 mt-2">
							<div className="flex items-start gap-1 w-fit">
								<img src={tag} className="inline w-4 mr-2" />
								Techstack :
							</div>
							<div className="flex-1">{techstack}</div>
						</div>
					</div>
					<div>
						<div className="flex gap-2 mt-2">
								<div className="flex items-start gap-1 w-fit">
									<img src={person} className="inline w-4 mr-2" />
									Client :
								</div>
								<div className="flex-1">{client}</div>
						</div>
						<div className="mt-2">
							<img src={eye} className="inline w-4 mr-3" />
							<div className="inline ">Preview : </div>
							<a
								href={preview}
								target="_blank"
								className="underline mt-1 block hover:no-underline text-[#FFB400]"
							>
								{preview}
							</a>
						</div>
					</div>
				</div>

				<img src={image} className="mt-10 rounded-xl" alt="" />
			</div>

			<div className={`${className} lg:hidden w-screen`}>
				<div className="text-2xl min-[577px]:text-[32px] transition-all text-[#FFB400] font-bold text-center mt-5">
					IMAGE PROJECT
				</div>

				<div className="px-8 mt-[42px] min-[577px]:grid min-[577px]:grid-cols-2 gap-2">
					<div className="flex gap-2">
						<img
							className="w-3 min-[677px]:w-4 transition-all"
							src={document}
							alt=""
						/>
						<div className="text-xs min-[677px]:text-base transition-all">
							Project : {project}
						</div>
					</div>
					<div className="flex gap-2 mt-2 min-[677px]:mt-0">
						<img
							className="w-3 min-[677px]:w-4 transition-all"
							src={person}
							alt=""
						/>
						<div className="text-xs min-[677px]:text-base transition-all">
							Client : {client}
						</div>
					</div>
					<div className="flex gap-2 mt-2">
						<img
							className="w-3 min-[677px]:w-4 transition-all"
							src={tag}
							alt=""
						/>
						<div className="text-xs min-[677px]:text-base transition-all">
							Techstack : {techstack}
						</div>
					</div>
					<div className="flex items-start gap-2 mt-2">
						<img
							className="w-3 min-[677px]:w-4 transition-all"
							src={eye}
							alt=""
						/>
						<div className="text-xs min-[677px]:text-base transition-all">
							Preview :{" "}
							<a
								href={preview}
								target="_blank"
								className="text-[#856314] underline hover:no-underline"
							>
								{preview}
							</a>
						</div>
					</div>
				</div>
				<img
					className="rounded-lg mt-8 w-[90%] mx-auto"
					src={image}
					alt=""
				/>
			</div>
		</>
	);
}
