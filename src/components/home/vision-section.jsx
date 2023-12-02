import VisionImage from 'assets/images/vision-section.png'

export const VisionSection = () => {
  return (
    <section className='mt-[19px] flex flex-col items-center p-6 lg:mt-20 lg:flex-row lg:gap-10'>
      <div className='hidden w-[600px] lg:block'>
        <img src={VisionImage} alt='vision' className='w-full' />
      </div>
      <div className='w-full lg:w-[calc(100%-600px-40px)] lg:pr-20'>
        <h2 className='home-title'>Vision</h2>

        <img
          src={VisionImage}
          alt='vision'
          className='mt-3 block w-full lg:mt-0 lg:hidden'
        />

        <p
          className='mt-4 text-center font-poppins text-sm font-medium leading-[29.19px] text-primary
          lg:mt-6 lg:text-left lg:text-xl lg:font-bold lg:leading-[41px]'
        >
          Our vision is to establish ourselves as the foremost driving force
          behind blockchain innovation and adoption in Vietnam's dynamic market
          by empowering startups through cutting-edge technology and exceptional
          support.
        </p>
      </div>
    </section>
  )
}
