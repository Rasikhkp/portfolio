import arrowRigth from '../../public/icon/arrowRight.svg'

const CTABtn = ({ className, children }: { className: string; children: any }) => {
  return (
    <div className={`${className} flex w-[246px] lg:w-[44vh] items-center justify-between h-[60px] lg:h-[11vh] rounded-full border-[2px] border-[#73540A] `}>
        <div className='ml-8 lg:ml-[6vh] font-semibold lg:text-[3vh] text-white'>{children}</div>
        <div className='w-[60px] lg:w-[10vh] h-[60px] lg:h-[10vh] rounded-full bg-[#FFB400] flex justify-center items-center'>
            <img className='w-[25px] lg:w-[5vh]' src={arrowRigth} alt="" />
        </div>
    </div>
  )
}

export default CTABtn