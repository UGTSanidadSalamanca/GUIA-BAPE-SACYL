import React from 'react';
import { Info, CheckCircle, Globe, MousePointer, Hammer } from 'lucide-react';

export const AccessView: React.FC = () => {
  const steps = [
    { title: "Acceso al Portal", desc: "Acceder a www.saludcastillayleon.es/profesionales/es/bolsa" },
    { title: "Identificación", desc: "Certificado digital, DNI electrónico o Cl@ve" },
    { title: "Datos Personales", desc: "Completar los datos personales y de contacto" },
    { title: "Selección de Categoría", desc: "Elegir la categoría profesional a la que se opta" },
    { title: "Áreas Geográficas", desc: "Seleccionar las áreas, centros o zonas de interés" },
    { title: "Méritos", desc: "Adjuntar la documentación acreditativa" },
    { title: "REGISTRAR SOLICITUD", desc: "Pulsar el icono del martillo. Sin esto NO cuenta.", isWarning: true },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b-4 border-red-600 pb-2 mb-6">
        <h2 className="text-3xl font-bold text-red-700">Fundamentos y Proceso</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
        <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
          <Globe className="w-5 h-5" /> Naturaleza de la Bolsa
        </h3>
        <p className="text-slate-700 leading-relaxed">
          La Bolsa Abierta y Permanente (BAPE) es un <strong>procedimiento telemático</strong> abierto permanentemente. 
          No deriva directamente de procesos selectivos, sino que es un sistema independiente de gestión de personal temporal.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
        <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" /> Requisitos Clave
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Titulación:</strong> Académica requerida para la categoría.</li>
          <li><strong>Nacionalidad:</strong> Requisitos legales vigentes.</li>
          <li><strong>Capacidad funcional:</strong> Sin limitaciones incompatibles.</li>
          <li><strong>Habilitación:</strong> No haber sido separado del servicio.</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
        <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
          <MousePointer className="w-5 h-5" /> Proceso de Inscripción
        </h3>
        
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-start gap-4 p-4 rounded-lg transition-transform hover:translate-x-1 ${step.isWarning ? 'bg-yellow-50 border border-yellow-200' : 'bg-slate-50'}`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${step.isWarning ? 'bg-red-600 text-white' : 'bg-red-600 text-white'}`}>
                {index + 1}
              </div>
              <div>
                <h4 className={`font-bold ${step.isWarning ? 'text-red-700' : 'text-red-900'}`}>{step.title}</h4>
                <p className="text-slate-600 text-sm mt-1">{step.desc}</p>
                {step.isWarning && <Hammer className="w-5 h-5 text-red-500 mt-2" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-cyan-50 rounded-lg shadow-md p-6 border-l-4 border-cyan-500">
        <h3 className="text-xl font-bold text-cyan-700 mb-3 flex items-center gap-2">
          <Info className="w-5 h-5" /> Fecha de Corte
        </h3>
        <p className="mb-2 font-medium">Es una "foto fija" del estado de los aspirantes.</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
          <li>Se anuncia con al menos 20 días naturales de antelación.</li>
          <li>Determina qué méritos y zonas se tienen en cuenta.</li>
          <li><strong>¡Mantén tus datos actualizados!</strong></li>
        </ul>
      </div>
    </div>
  );
};