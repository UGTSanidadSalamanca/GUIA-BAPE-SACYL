import React from 'react';
import { Clock, Calendar, Briefcase, Map, AlertCircle } from 'lucide-react';

export const CallupsView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b-4 border-red-600 pb-2 mb-6">
        <h2 className="text-3xl font-bold text-red-700">Llamamientos y Disponibilidad</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AppointmentCard 
          icon={Briefcase}
          title="Interinidad"
          color="green"
          subtitle="Máxima estabilidad"
          features={["Plaza vacante sin titular", "Mayor duración temporal", "Prioridad máxima"]}
        />
        <AppointmentCard 
          icon={Calendar}
          title="Larga Duración"
          color="cyan"
          subtitle="Con reserva de plaza"
          features={["Sustituciones ≥ 6 meses", "Reserva de plaza garantizada", "Estabilidad media-alta"]}
        />
        <AppointmentCard 
          icon={Clock}
          title="Corta Duración"
          color="orange"
          subtitle="Temporal"
          features={["Sustituciones < 6 meses", "Nombramientos eventuales", "Guardias y refuerzos"]}
        />
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold text-red-800 mb-4">Estrategia de Disponibilidad</h3>
        <div className="space-y-4">
          <StrategyItem title="Si aceptas Corta Duración" available={["Larga Duración", "Interinidades"]} />
          <StrategyItem title="Si aceptas Larga Duración" available={["Interinidades"]} note="No disponible para Corta Duración" />
          <div className="bg-white p-4 rounded border border-red-100">
             <h4 className="font-bold text-slate-800 mb-1">✅ Si aceptas Interinidad</h4>
             <p className="text-slate-600 text-sm">Quedas <strong>NO DISPONIBLE</strong> para otros llamamientos.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
        <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
          <Map className="w-5 h-5" /> Áreas Geográficas
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Puedes solicitar <strong>todas las áreas/zonas que desees</strong>.</li>
          <li>Debes elegir una única <strong>Área Preferente</strong> (usada exclusivamente para Interinidades).</li>
        </ul>
      </div>

      <div className="bg-amber-50 rounded-lg shadow-md p-6 border-l-4 border-amber-500">
        <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" /> Actualización de Áreas (Fechas Corte)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DateCard date="9 de Marzo" />
          <DateCard date="9 de Junio" />
          <DateCard date="9 de Septiembre" />
          <DateCard date="9 de Diciembre" />
        </div>
        <p className="mt-4 text-amber-700 text-sm font-medium italic">⚠️ Planifica tus cambios con antelación a estas fechas (hasta las 23:59:59).</p>
      </div>
    </div>
  );
};

const AppointmentCard: React.FC<{ icon: any, title: string, color: 'green' | 'cyan' | 'orange', subtitle: string, features: string[] }> = ({ icon: Icon, title, color, subtitle, features }) => {
  const colors = {
    green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', badge: 'bg-green-100 text-green-800' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-500', text: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-800' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800' }
  };
  const c = colors[color];

  return (
    <div className={`bg-white rounded-xl shadow-lg border-t-4 ${c.border} p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1`}>
      <Icon className={`w-12 h-12 ${c.text} mb-3`} />
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <span className={`text-xs font-bold px-2 py-1 rounded mt-2 mb-4 ${c.badge}`}>{subtitle}</span>
      <ul className="text-left w-full space-y-2 text-sm text-slate-600">
        {features.map((f, i) => <li key={i} className="flex items-start gap-2"><span className="text-slate-400">•</span> {f}</li>)}
      </ul>
    </div>
  );
};

const StrategyItem: React.FC<{ title: string, available: string[], note?: string }> = ({ title, available, note }) => (
  <div className="bg-white p-4 rounded border border-red-100 shadow-sm">
    <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-sm text-slate-600">Permaneces <strong className="text-green-600">DISPONIBLE</strong> para:</p>
    <ul className="list-disc pl-5 text-sm text-slate-600 mt-1">
      {available.map(a => <li key={a}>{a}</li>)}
    </ul>
    {note && <p className="text-xs text-slate-400 mt-2 italic">{note}</p>}
  </div>
);

const DateCard: React.FC<{ date: string }> = ({ date }) => (
  <div className="bg-white p-3 rounded shadow text-center font-bold text-slate-700 border border-amber-200">
    📅 {date}
  </div>
);