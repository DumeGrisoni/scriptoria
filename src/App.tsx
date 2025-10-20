import { Outlet } from 'react-router-dom'; // Affiche la page courante
import './index.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col  w-full justify-start items-center">
      <Navbar />
      <div className="pt-20 w-full bg-slate-950 text-slate-50">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
