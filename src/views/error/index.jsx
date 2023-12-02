import { useEffect } from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const navigate = useNavigate()
  const error = useRouteError()
  console.error(error)

  useEffect(() => {
    if (error.status === 404) {
      navigate('/404')
    }
  })

  return <div>Error</div>
}
