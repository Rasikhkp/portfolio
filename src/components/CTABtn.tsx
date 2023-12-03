import arrowRigth from '../../public/icon/arrowRight.svg'

type CTABtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className: string
  children: any
  isLoading: boolean
  icon?: any
}
const CTABtn = ({ className, isLoading, children, icon = arrowRigth, ...buttonProps }: CTABtnProps) => {
  return (
    <button {...buttonProps} className={`${className} flex group relative w-[240px] items-center justify-between h-[55px] rounded-full overflow-hidden border-[1px] border-[#FFB400] `}>
        <div className='ml-8 font-semibold text-white z-10'>{children}</div>
        <div className='w-[55px] h-[55px] absolute right-0 transition-all duration-300 ease-out rounded-full bg-[#FFB400] flex justify-center items-center group-hover:rounded-r-full group-hover:rounded-l-none group-hover:w-[240px]'>
            <img className={`w-[25px] absolute right-4 ${isLoading && 'hidden'}`} src={icon} alt="" />
            <span className={`${ isLoading ? 'loading loading-spinner loading-lg' : 'hidden' } w-[25px] absolute right-4 text-white`}></span>
        </div>
    </button>
  )
}

export default CTABtn