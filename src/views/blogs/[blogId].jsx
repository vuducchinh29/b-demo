import FakeBlogs from 'data/fake-blogs.json'

import { BlogParagraph } from 'components/blog/blog-paragraph'
import { Header } from 'components/blog/header'

import { BlogCard } from 'components/blog/blog-card'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const BlogDetail = () => {
  const { blogId } = useParams()

  const [data, setData] = useState({})

  const getBlog = useCallback(() => {
    if (!blogId) return

    let blog = FakeBlogs.blogsData.find((_) => String(_.id) === String(blogId))

    if (blog) setData(blog)
  }, [blogId])

  useEffect(() => {
    getBlog()
  }, [getBlog])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [getBlog])

  return (
    <main className='pt-6 lg:pt-[70px]'>
      <div className='px-6 lg:px-[336px]'>
        <Header
          title={data.title}
          date={data.date}
          authorAvatar={data.authorAvatar}
          authorName={data.authorName}
          tag={data.tag}
        />
      </div>
      <div className='mt-6 px-6 lg:mt-16 lg:px-20'>
        <img src={data.cover2} alt='cover img' className='w-full' />
      </div>
      <div className='mt-4 space-y-4 px-6 lg:mt-16 lg:space-y-5 lg:px-[336px]'>
        {data?.detail?.map((_) => (
          <BlogParagraph title={_.title} content={_.content} />
        ))}
      </div>

      <div className='mt-[17px] px-6 lg:mt-[97px] lg:px-20'>
        <h2
          className='mb-4 font-sen text-xl font-bold leading-[48px] 
          text-secondary lg:mb-10 lg:text-4xl'
        >
          What to read next
        </h2>
        <article className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-[46px]'>
          {[0, 1, 2].map((_) => (
            <BlogCard data={FakeBlogs.blogsData[_]} />
          ))}
        </article>
      </div>
    </main>
  )
}
