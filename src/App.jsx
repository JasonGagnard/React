
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage'; 
import InscriptionPage from './components/InscriptionPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/inscription',
    element: <InscriptionPage />
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
    // <div className="App">
    //   <LoginPage /> 
    // </div>
  );
}

export default App;