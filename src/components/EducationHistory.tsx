import toga from "../../public/icon/toga.svg";

const EducationHistory = ({
	children,
	duration,
	className,
    lineH = 'h-14'
}: {
	className: string;
	children: any;
	duration: string;
	lineH?: string;
}) => {
	return (
		<div className={`flex text-white gap-[20px] ${className}`}>
			<div>
				<div className="w-[38px] h-[38px] rounded-full bg-[#FFB400] flex justify-center items-center">
					<img className="w-5" src={toga} alt="" />
				</div>
				<div className={`${lineH} ml-[50%] border-l border-[#292929]`}></div>
			</div>
			<div>
				<div className="w-[104px] text-[10px] h-fit text-center py-1 bg-[#212121] rounded-full">
					{duration}
				</div>
				<div className="mt-[10px]">{children}</div>
			</div>
		</div>
	);
};

export default EducationHistory;
