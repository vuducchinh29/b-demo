import 'swiper/css'
import 'swiper/css/pagination'

import PenetratingImage from 'assets/images/penetrating.png'
import Penetrating2Image from 'assets/images/penetrating2.png'
import VietNamImage from 'assets/images/vietnam.png'

import { Fragment, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const outObjectiveList = [
  {
    title: 'Penetrating the Vietnam Market',
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: VietNamImage
  },
  {
    title: 'Penetrating the Vietnam Market',
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: PenetratingImage
  },
  {
    title: 'Penetrating the Vietnam Market',
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: Penetrating2Image
  },
  {
    title: 'Penetrating the Vietnam Market',
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: Penetrating2Image
  }
]

export const OutObjective = () => {
  const [swiper, setSwiper] = useState(null)
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <section className='mt-4 lg:mt-[85px]'>
      <div className='px-6 lg:px-20'>
        <h2 className='home-title'>Our Objectives</h2>
      </div>

      <Swiper
        className='relative z-[3] mt-4 pb-16 lg:mt-8'
        modules={[Autoplay, Pagination]}
        effect='cards'
        spaceBetween={16}
        slidesPerView={1}
        autoplay={true}
        pagination
        onSwiper={setSwiper}
        onSlideChange={({ activeIndex }) => setSlideIndex(activeIndex)}
      >
        {outObjectiveList.map((_, idx, arr) => (
          <Fragment key={idx}>
            {idx % 3 === 0 ? (
              <SwiperSlide className='' key={idx}>
                <div className='grid grid-cols-1 gap-4 px-6 lg:grid-cols-3 lg:gap-11 lg:px-20'>
                  <ObjectiveItem
                    image={_.image}
                    title={_.title}
                    detail={_.detail}
                  />

                  {idx + 1 < arr.length ? (
                    <ObjectiveItem
                      image={arr[idx + 1].image}
                      title={arr[idx + 1].title}
                      detail={arr[idx + 1].detail}
                    />
                  ) : null}

                  {idx + 2 < arr.length ? (
                    <ObjectiveItem
                      image={arr[idx + 2].image}
                      title={arr[idx + 2].title}
                      detail={arr[idx + 2].detail}
                    />
                  ) : null}
                </div>
              </SwiperSlide>
            ) : null}
          </Fragment>
        ))}
      </Swiper>
    </section>
  )
}

const ObjectiveItem = ({ image, title, detail }) => {
  return (
    <div className='col-span-1 font-poppins'>
      <div
        className='def-shadow flex h-full flex-col items-center rounded-[20px] bg-secondary px-[15px] pb-[18px]
        pt-[19.75px] lg:pb-[35px] lg:pl-[38px] lg:pr-[26px] lg:pt-[39px] '
      >
        <img src={image} alt='' className='' />

        <h3 className='pb-2 pt-[11px] font-bold text-primary lg:pb-4 lg:pt-[23px]'>
          {title}
        </h3>

        <p
          className='text-center text-xs leading-[22.5px] text-primary 
          lg:text-left lg:text-sm lg:font-bold lg:leading-[26px]'
        >
          {detail}
        </p>
      </div>
    </div>
  )
}
