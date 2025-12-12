import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-12 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-2">UGT Sanidad Salamanca</h3>
          <p className="text-sm opacity-80">Sección Sindical</p>
          <div className="mt-4 text-xs opacity-60">
            &copy; {new Date().getFullYear()} UGT Sanidad Salamanca.
            <br />
            Esta guía tiene carácter informativo.
          </div>
        </div>

        <div>
          <h4 className="text-red-400 font-semibold mb-4">Contacto</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>Edificio 1 del Hospital Virgen Vega, semisótano.<br/>P.º de San Vicente, 58, 182<br/>37007 Salamanca</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-red-400 font-semibold mb-4">Comunicación</h4>
          <div className="space-y-3 text-sm">
             <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:sanidad.salamanca@ugt-sp.ugt.org" className="hover:text-white transition-colors">sanidad.salamanca@ugt-sp.ugt.org</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>923 29 11 00 – Ext. 55598</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>Móvil: 637 585 924</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-red-400 font-semibold mb-4">Enlaces Oficiales</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.saludcastillayleon.es/profesionales/es/bolsa" target="_blank" rel="noreferrer" className="hover:text-white hover:underline transition-colors">
                Portal BAPE SACYL
              </a>
            </li>
            <li>
              <a href="https://www.saludcastillayleon.es" target="_blank" rel="noreferrer" className="hover:text-white hover:underline transition-colors">
                Salud Castilla y León
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};