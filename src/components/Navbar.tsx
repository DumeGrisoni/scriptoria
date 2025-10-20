import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Scriptoria.png';

const Navbar = () => {
  const pathname = useLocation().pathname;

  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/articles', label: 'Articles' },
    { href: '/maps', label: 'Cartes' },
    { href: '/writing', label: 'Manuscrit' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-950 backdrop-blur-md border-b border-slate-200 ">
      <div className=" mx-auto flex items-center justify-around gap-4 py-3 px-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain"
            width={100}
            height={100}
          />
          <span className="font-bold text-lg text-slate-200">
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
                    ? 'bg-slate-200 text-slate-800 shadow'
                    : 'text-slate-50 hover:bg-slate-500 hover:text-slate-100')
                }
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* mobile burger (simple) */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer px-2 py-1 rounded-md bg-slate-100">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-20">
              {links.map((l) => (
                <Link
                  to={l.href}
                  key={l.href}
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
