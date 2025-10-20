import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Scriptoria.png';

const Navbar = () => {
  const pathname = useLocation().pathname;

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/articles', label: 'Articles' },
    { href: '/maps', label: 'Cartes' },
    { href: '/writing', label: 'Ecriture' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-50 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className=" mx-auto flex items-center justify-between gap-4 py-3 px-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain"
            width={100}
            height={100}
          />
          <span className="font-bold text-lg text-slate-700">
            SCRIPTORIA -{' '}
            <span className="italic font-light">World builder</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                className={
                  'px-3 py-1 rounded-md text-sm font-medium ' +
                  (active
                    ? 'bg-slate-600 text-white shadow'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-600')
                }
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
