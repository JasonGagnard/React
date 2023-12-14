
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ConnexionPage from './components/connexion/ConnexionPage';
import InscriptionPage from './components/inscription/InscriptionPage';
import Navbar from './components/navbar/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ConnexionPage />
  },
  {
    path: '/inscription',
    element: <InscriptionPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   <LoginPage /> 
    // </div>
  );
}

export default App;
