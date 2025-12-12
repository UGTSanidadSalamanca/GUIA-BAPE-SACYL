import React from 'react';
import { Building2 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#C8102E] text-white py-8 px-4 shadow-lg border-b-4 border-red-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
            <Building2 className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold tracking-tight">UGT Sanidad Salamanca</h1>
          </div>
          <p className="text-red-100 text-sm font-medium opacity-90">Secretaría Sindical</p>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-xl md:text-2xl font-semibold mb-1">Guía Rápida BAPE SACYL</h2>
          <p className="text-red-100 text-sm opacity-90">Bolsa Abierta y Permanente - Servicio de Salud de Castilla y León</p>
        </div>
      </div>
    </header>
  );
};