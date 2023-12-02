import { Link } from 'react-router-dom'

export const BlogCard = ({ data }) => {
  return (
    <Link className='' to={`/blogs/${data.id}`}>
      <div
        className='group relative w-full max-w-[395px] font-poppins'
        key={data.id}
      >
        <div className='relative z-[3] px-[33px] pb-[46.75px] pt-[45px] text-[#f9f9f9] lg:pb-10 lg:pl-[38px] lg:pt-[53px]'>
          <h2 className='line-clamp-1 text-[17px] font-semibold leading-[32px] lg:text-xl lg:leading-[37px]'>
            {data.title}
          </h2>
          <p className='mt-[14.75px] line-clamp-4 text-xs leading-[22px] lg:mb-4 lg:mt-4 lg:text-sm lg:leading-[26px]'>
            {data.description}
          </p>

          {data?.readTime ? (
            <p className='hidden text-sm font-medium leading-[26px] text-[#B5B5B5] lg:block'>
              {data.readTime}
            </p>
          ) : null}
        </div>
        <div className='absolute left-0 top-0 z-[1] h-full w-full overflow-hidden rounded-[20px]'>
          <div className='absolute left-0 top-0 z-[2] h-full w-full bg-black/30'></div>
          <img
            className='relative z-[1] h-full w-full scale-100 object-cover blur-0 transition-all group-hover:scale-110'
            src={data.cover}
            alt='cover'
          />
        </div>
      </div>
    </Link>
  )
}
