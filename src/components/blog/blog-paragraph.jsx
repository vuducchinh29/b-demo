export const BlogParagraph = ({ title, content }) => {
  return (
    <div className='space-y-[14px] font-poppins text-primary'>
      <h4 className='text-xl font-medium leading-[32px] lg:text-2xl lg:leading-[48px]'>
        {title}
      </h4>
      <div className='space-y-3'>
        {content.map((_) => (
          <p className='text-base leading-[28px]'>{_}</p>
        ))}
      </div>
    </div>
  )
}
