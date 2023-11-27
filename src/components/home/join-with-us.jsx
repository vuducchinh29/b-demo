import GoPenetratingIcon from 'assets/images/go-penetrating.png'
import HotBg2 from 'assets/images/info-box-2.png'
import HotBg from 'assets/images/info-box.png'
import AcceleratorIcon from 'assets/images/join-our-accelerator-program.png'
import UptrendIcon from 'assets/images/uptrend.svg'

import { classNames } from 'utils'

const hots = [
  {
    name: 'Raise Capital',
    icon: UptrendIcon
  },
  {
    name: 'Go Penetrating',
    icon: GoPenetratingIcon
  },
  {
    name: 'Join Our Accelerator Program',
    icon: AcceleratorIcon
  }
]

export const JoinWithUs = () => {
  return (
    <section className='px-6 pt-[25px] lg:px-20 lg:pt-[47px]' id='join-us'>
      <h2 className='home-title'>Join With Us</h2>

      <div className='mt-4 grid w-full grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-3 lg:gap-[37px]'>
        {hots.map((_, idx) => (
          <div className='relative col-span-1'>
            <div className='absolute left-0 top-0 z-[2] flex h-full w-full items-center gap-5 p-[34px] lg:gap-6 lg:p-10'>
              <img src={_.icon} alt='icon' />
              <p
                className={classNames(
                  'font-poppins text-base font-bold lg:text-[19px]',
                  idx === 0 ? 'text-white' : 'text-primary'
                )}
              >
                {_.name}
              </p>
            </div>
            <img
              src={idx === 0 ? HotBg : HotBg2}
              alt='hot item'
              className='relative z-[1] w-full'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
