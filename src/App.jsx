import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Root } from 'routes/root'
import { Blogs } from 'views/blogs'
import { BlogDetail } from 'views/blogs/[blogId]'
import { ErrorPage } from 'views/error'
import { NotFound } from 'views/error/not-found'
import { Home } from 'views/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/blogs/:blogId',
        element: <BlogDetail />,
        errorElement: <NotFound />
      },
      {
        path: '/404',
        element: <NotFound />
      }
    ],
    errorElement: <ErrorPage />
  }
])

function App() {
  return (
    <div className='w-full font-rajdhani'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
