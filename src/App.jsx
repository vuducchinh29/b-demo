import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Root } from 'routes/root'
import { Blogs } from 'views/blogs'
import { BlogDetail } from 'views/blogs/[blogId]'
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
        element: <BlogDetail />
      }
    ]
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
