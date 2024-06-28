// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/swiperNav.css'

// import required modules
import { Navigation } from 'swiper/modules';

const SliderMenus = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper flex justify-center items-center max-w-[500px] my-8">
                <SwiperSlide className='flex justify-center items-center'><img src={'./imgs/menu1.jpg'} alt='Menu 1' className='mx-auto w-[350px] h-[600px] object-cover' /></SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'><img src={'./imgs/menu2.jpg'} alt='Menu 2' className='mx-auto w-[350px] h-[600px] object-cover' /></SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'><img src={'./imgs/menu3.jpg'} alt='Menu 3' className='mx-auto w-[350px] h-[600px] object-cover' /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderMenus
