import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogIn, Calculator, PhoneIncoming, AlertTriangle } from 'lucide-react';

export const Navigation: React.FC = () => {
  const navItems = [
    { to: '/acceso', label: 'Acceso BAPE', icon: LogIn },
    { to: '/puntuacion', label: 'Puntuación y Estrategia', icon: Calculator },
    { to: '/llamamientos', label: 'Llamamientos', icon: PhoneIncoming },
    { to: '/penalizaciones', label: 'Penalizaciones', icon: AlertTriangle },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <ul className="max-w-6xl mx-auto flex flex-col md:flex-row list-none p-0 m-0">
        {navItems.map((item) => (
          <li key={item.to} className="flex-1">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 py-4 px-2 text-sm font-bold uppercase transition-all duration-300 border-b-4 h-full
                ${
                  isActive
                    ? 'text-red-700 border-red-600 bg-red-50'
                    : 'text-slate-600 border-transparent hover:bg-slate-50 hover:text-red-600'
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};