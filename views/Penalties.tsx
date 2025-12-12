import React from 'react';
import { AlertTriangle, PhoneMissed, Heart, Briefcase, Baby, UserMinus } from 'lucide-react';

export const PenaltiesView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b-4 border-red-600 pb-2 mb-6">
        <h2 className="text-3xl font-bold text-red-700">Régimen Sancionador</h2>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" /> Sanciones por Rechazo Injustificado
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-red-700 text-white">
              <tr>
                <th className="p-3 rounded-tl">Infracción</th>
                <th className="p-3">Sanción</th>
                <th className="p-3 rounded-tr w-24">Duración</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-200">
              <tr className="bg-white hover:bg-red-50">
                <td className="p-3">Rechazo de contrato sin causa</td>
                <td className="p-3">Suspensión en la categoría</td>
                <td className="p-3 font-bold text-red-700">6 meses</td>
              </tr>
              <tr className="bg-white hover:bg-red-50">
                <td className="p-3">Inclusión de méritos falsos</td>
                <td className="p-3">Exclusión de TODAS las categorías</td>
                <td className="p-3 font-bold text-red-700">2 años</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 shadow-md flex flex-col md:flex-row gap-6 items-center">
        <div className="bg-amber-100 p-4 rounded-full flex-shrink-0">
          <PhoneMissed className="w-8 h-8 text-amber-700" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-amber-800 mb-2">No Contestación</h3>
          <p className="text-slate-700 mb-2">
            Si en un periodo de <strong>un mes</strong> no se contesta a <strong>4 llamadas</strong> (días distintos):
          </p>
          <div className="bg-white p-3 rounded border border-amber-200 inline-block font-semibold text-amber-900">
            🚫 NO DISPONIBLE durante 3 meses
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-green-700 mb-6">
          Causas Justificadas (Cero Penalización)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <JustifiedCause icon={Briefcase} title="Prestación de Servicios" desc="Trabajando en otra administración o empresa privada." />
          <JustifiedCause icon={UserMinus} title="Jornada Parcial" desc="Renuncia a nombramientos a tiempo parcial." />
          <JustifiedCause icon={Baby} title="Maternidad/Paternidad" desc="Maternidad, riesgo embarazo, lactancia." />
          <JustifiedCause icon={Heart} title="Salud / Cuidados" desc="Incapacidad temporal o cuidado de familiar (hasta 2º grado)." />
        </div>
      </div>
    </div>
  );
};

const JustifiedCause: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-green-50 transition-colors">
    <Icon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-bold text-slate-800">{title}</h4>
      <p className="text-sm text-slate-600 leading-snug">{desc}</p>
    </div>
  </div>
);