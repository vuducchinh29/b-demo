import TagIcon from 'assets/images/tag.svg'

export const Header = ({ title, date, authorAvatar, authorName, tag }) => {
  return (
    <div className='font-poppins text-primary'>
      <div className='flex items-center gap-4'>
        <div className='h-12 w-12 overflow-hidden rounded-full'>
          <img
            src={authorAvatar}
            alt='author avatar'
            className='h-full w-full object-cover'
          />
        </div>
        <div className=''>
          <p className='text-xl font-bold leading-[40px] text-primary lg:text-[28px]'>
            {authorName}
          </p>
          <p className='text-sm leading-[28px] lg:text-base'>{date}</p>
        </div>
      </div>
      <h1 className='mt-[17px] font-sen text-xl font-bold leading-[32px] lg:mb-[34px] lg:mt-6 lg:text-[48px] lg:leading-[64px]'>
        {title}
      </h1>
      <div className='hidden items-center gap-2 lg:flex'>
        <img src={TagIcon} alt='tag icon' className='h-6 w-6 object-contain' />
        <p className='font-sen text-2xl font-bold text-[#232536]'>{tag}</p>
      </div>
    </div>
  )
}
