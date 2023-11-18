import toga from "../../public/icon/toga.svg";

const EducationHistory = ({
	children,
	duration,
	className,
    lineH
}: {
	className: string;
	children: any;
	duration: string;
	lineH?: string;
}) => {
	return (
		<div className={`flex text-white gap-[20px] ${className}`}>
			<div>
				<div className="w-[38px] h-[38px] lg:w-[7vh] lg:h-[7vh] rounded-full bg-[#FFB400] flex justify-center items-center">
					<img className="w-5 lg:w-[4vh]" src={toga} alt="" />
				</div>
				<div className={`${lineH} ml-[50%] border-l border-[#292929]`}></div>
			</div>
			<div>
				<div className="w-[104px] text-[10px] lg:text-[2vh] lg:w-[20vh] h-fit text-center py-1 bg-[#212121] rounded-full">
					{duration}
				</div>
				<div className="mt-[10px] lg:mt-[3vh]">{children}</div>
			</div>
		</div>
	);
};

export default EducationHistory;
