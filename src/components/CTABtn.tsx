import arrowRigth from '../../public/icon/arrowRight.svg'

const CTABtn = ({ className, children }: { className: string; children: any }) => {
  return (
    <div className={`${className} flex w-[246px] 2xl:w-[30vh] items-center justify-between h-[60px] 2xl:h-[7vh] rounded-full border-[2px] border-[#73540A] `}>
        <div className='ml-8 2xl:ml-[4vh] font-semibold text-white 2xl:text-[2vh]'>{children}</div>
        <div className='w-[60px] h-[60px] 2xl:h-[7vh] 2xl:w-[7vh] rounded-full bg-[#FFB400] flex justify-center items-center'>
            <img className='w-[25px] 2xl:w-[4vh]' src={arrowRigth} alt="" />
        </div>
    </div>
  )
}

export default CTABtn