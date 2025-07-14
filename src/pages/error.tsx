import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-8xl font-bold text-red-500 mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-2">The page you are looking for was not found.</h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you requested does not exist in the system or has been moved.      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Return to home page
      </button>
    </div>
  )
}

export default ErrorPage