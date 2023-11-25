import arrowRigth from '../../public/icon/arrowRight.svg'

const CTABtn = ({ className, children }: { className: string; children: any }) => {
  return (
    <div className={`${className} flex w-[246px] items-center justify-between h-[60px] rounded-full border-[2px] border-[#73540A] `}>
        <div className='ml-8 font-semibold text-white'>{children}</div>
        <div className='w-[60px] h-[60px] rounded-full bg-[#FFB400] flex justify-center items-center'>
            <img className='w-[25px]' src={arrowRigth} alt="" />
        </div>
    </div>
  )
}

export default CTABtn