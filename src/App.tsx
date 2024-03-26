import { Navigate, RouterProvider } from 'react-router-dom';
import { Toaster } from "sonner";
import './index.css';
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import { useAuthContext } from './context/AuthContext';
import { BackgroundBeams } from './components/ui/background-beams';

function App() {

  const { authUser } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (authUser ? <Home /> : <Navigate to={'/login'} />),
    },
    {
      path: "/sign-up",
      element: (authUser ? <Navigate to={'/'} /> : <Signup />)
    },
    {
      path: "/login",
      element: (authUser ? <Navigate to={'/'} /> : <Login />)
    }
  ]);

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center relative z-10'>
        <Toaster position='top-center' />
        <RouterProvider router={router} />
      </div>
      <BackgroundBeams />
    </>
  );
}

export default App;
