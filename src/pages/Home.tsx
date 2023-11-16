import menu from '../../public/icon/menu.svg'
import CTABtn from '../components/CTABtn';

function Home() {
	return (
		<>
			<div className="bg-[#111111] w-full h-screen p-7">
				<div className="absolute w-[53px] h-[53px] rounded-[6px] bg-[#252525] right-[14px] top-[14px] flex items-center justify-center">
					<img className='w-7' src={menu} alt="" />
				</div>

				<div className='mt-[143px] font-poppins text-3xl font-bold text-white'>
					<span className='text-[#FFB400] '>I'M RASIKH KHALIL PASHA. </span>
					FULLSTACK DEVELOPER.
				</div>
				
				<div className='mt-3 tracking-wide text-white font-osans'>
					Aspiring fullstack developer with a passion for innovation. Explore my portfolio for a glimpse into my developing journey!
				</div>

				<CTABtn className="mt-[96px]">
					MORE ABOUT ME
				</CTABtn>
			</div>
		</>
	);
}

export default Home;
