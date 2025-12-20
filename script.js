// Acceso seguro a las variables globales (UMD)
const React = window.React;
const ReactDOM = window.ReactDOM;
const ReactRouterDOM = window.ReactRouterDOM;

// Desestructuración de Hooks y Router
const { useState, useEffect, useCallback } = React;
const { HashRouter, Routes, Route, Navigate, useLocation, NavLink } = ReactRouterDOM;

// --- GESTIÓN DE ICONOS (FIX CRITICO) ---
// Intentamos obtener la librería Lucide del objeto global
const LucideLibrary = window.lucideReact || window.lucide || {};

// Extraemos los iconos con cuidado.
// IMPORTANTE: Renombramos 'Map' a 'MapIcon' inmediatamente.
// Si no lo hacemos, la variable 'Map' sobrescribe el constructor Map() nativo de JS
// y React explota porque lo necesita internamente.
const {
  Building2, LogIn, Calculator, PhoneIncoming, AlertTriangle,
  Trash2, Save, MapPin, Mail, Phone, ArrowUp, Info,
  CheckCircle, Globe, MousePointer, Hammer, Award, BookOpen,
  GraduationCap, Clock, Calendar, Briefcase, Map: MapIcon, AlertCircle,
  PhoneMissed, Heart, Baby, UserMinus, Bell, Edit, Plus, X,
  List, FileText, CheckCircle2, XCircle, Clock3, FileCheck
} = LucideLibrary;

// Componente de respaldo por si falla la carga de un icono específico
const IconFallback = () => <span className="w-4 h-4 inline-block bg-red-200 rounded-full" title="Icono no cargado"></span>;

// Helper para renderizar iconos de forma segura
const RenderIcon = ({ icon, className }) => {
  if (!icon) return <IconFallback />;
  // Lucide en modo UMD a veces devuelve componentes funcionales directos o objetos con render
  const IconComponent = icon;
  return <IconComponent className={className} />;
};

// --- COMPONENTES DE LA INTERFAZ ---

const Header = () => {
  return (
    <header className="bg-[#C8102E] text-white py-8 px-4 shadow-lg border-b-4 border-red-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
            <RenderIcon icon={Building2} className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold tracking-tight">UGT Sanidad Salamanca</h1>
          </div>
          <p className="text-red-100 text-sm font-medium opacity-90">Secretaría Sindical</p>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-xl md:text-2xl font-semibold mb-1">Guía Rápida BAPE SACYL</h2>
          <p className="text-red-100 text-sm opacity-90">Bolsa Abierta y Permanente</p>
        </div>
      </div>
    </header>
  );
};

const Navigation = () => {
  const navItems = [
    { to: '/acceso', label: 'Acceso BAPE', icon: LogIn },
    { to: '/puntuacion', label: 'Puntuación', icon: Calculator },
    { to: '/llamamientos', label: 'Llamamientos', icon: PhoneIncoming },
    { to: '/penalizaciones', label: 'Penalizaciones', icon: AlertTriangle },
    { to: '/estado-bolsas', label: 'Estado de Bolsas', icon: List },
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
                ${isActive
                  ? 'text-red-700 border-red-600 bg-red-50'
                  : 'text-slate-600 border-transparent hover:bg-slate-50 hover:text-red-600'
                }`
              }
            >
              <RenderIcon icon={item.icon} className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Footer = () => {
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
              <RenderIcon icon={MapPin} className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>Edificio 1 del Hospital Virgen Vega, semisótano.<br />P.º de San Vicente, 58, 182<br />37007 Salamanca</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-red-400 font-semibold mb-4">Comunicación</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <RenderIcon icon={Mail} className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:sanidad.salamanca@ugt-sp.ugt.org" className="hover:text-white transition-colors">sanidad.salamanca@ugt-sp.ugt.org</a>
            </div>
            <div className="flex items-center gap-3">
              <RenderIcon icon={Phone} className="w-5 h-5 flex-shrink-0" />
              <span>923 29 11 00 – Ext. 55598</span>
            </div>
            <div className="flex items-center gap-3">
              <RenderIcon icon={Phone} className="w-5 h-5 flex-shrink-0" />
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

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[#C8102E] text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all transform hover:scale-110 z-40 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
      aria-label="Volver arriba"
    >
      <RenderIcon icon={ArrowUp} className="w-6 h-6" />
    </button>
  );
};

// --- SIMULADOR DE PUNTOS ---

const INITIAL_STATE = {
  mesesSNS: 0,
  mesesOtros: 0,
  mesesPrivado: 0,
  creditosOrdinarios: 0,
  creditosECTS: 0,
  ejerciciosOposicion: 0,
};

const InputField = ({ label, name, value, onChange, max }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm font-medium text-slate-700 mb-1">{label}</label>
    <input
      type="number"
      id={name}
      name={name}
      value={value === 0 ? '' : value}
      placeholder="0"
      onChange={onChange}
      max={max}
      min="0"
      className="border-2 border-slate-200 rounded-md p-2 focus:border-red-500 focus:ring-red-500 focus:outline-none transition-colors"
    />
  </div>
);

const ResultRow = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="font-medium">{label}:</span>
    <span className="font-mono bg-slate-100 px-2 py-1 rounded">{value.toFixed(2)}</span>
  </div>
);

const Simulator = () => {
  const [inputs, setInputs] = useState(INITIAL_STATE);
  const [result, setResult] = useState({ experiencia: 0, formacion: 0, oposicion: 0, total: 0 });
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('bape-simulator-data');
    if (saved) {
      try {
        setInputs(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bape-simulator-data', JSON.stringify(inputs));
  }, [inputs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0) numValue = 0;
    if (name === 'ejerciciosOposicion' && numValue > 3) numValue = 3;

    setInputs(prev => ({ ...prev, [name]: numValue }));
    setIsCalculated(false);
  };

  const calculate = useCallback(() => {
    const experiencia =
      (inputs.mesesSNS * 0.30) +
      (inputs.mesesOtros * 0.25) +
      (inputs.mesesPrivado * 0.10);

    const formacion =
      (inputs.creditosOrdinarios * 0.20) +
      (inputs.creditosECTS * 0.50);

    const oposicion = Math.min(inputs.ejerciciosOposicion, 3) * 5;
    const total = experiencia + formacion + oposicion;

    setResult({ experiencia, formacion, oposicion, total });
    setIsCalculated(true);
  }, [inputs]);

  const reset = () => {
    setInputs(INITIAL_STATE);
    setIsCalculated(false);
    localStorage.removeItem('bape-simulator-data');
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-xl border border-red-100 overflow-hidden shadow-inner my-8">
      <div className="bg-[#C8102E] p-4 flex items-center justify-between">
        <h3 className="text-white font-bold text-lg flex items-center gap-2">
          <RenderIcon icon={Calculator} className="w-5 h-5" />
          Simulador Básico de Puntos
        </h3>
        <span className="text-red-100 text-xs italic">Autobaremo no validado</span>
      </div>

      <div className="p-6">
        <p className="text-slate-500 text-sm mb-6 text-center italic">
          Los datos se guardan automáticamente en tu navegador.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-red-800 border-b border-red-200 pb-2">Experiencia Profesional</h4>
            <InputField label="Meses en SNS/UE (0,30 pts/mes)" name="mesesSNS" value={inputs.mesesSNS} onChange={handleInputChange} />
            <InputField label="Meses otros públicos (0,25 pts/mes)" name="mesesOtros" value={inputs.mesesOtros} onChange={handleInputChange} />
            <InputField label="Meses privados concertados (0,10 pts/mes)" name="mesesPrivado" value={inputs.mesesPrivado} onChange={handleInputChange} />
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-red-800 border-b border-red-200 pb-2">Formación y Oposición</h4>
            <InputField label="Créditos Ordinarios (0,20 pts/crédito)" name="creditosOrdinarios" value={inputs.creditosOrdinarios} onChange={handleInputChange} />
            <InputField label="Créditos ECTS (0,50 pts/crédito)" name="creditosECTS" value={inputs.creditosECTS} onChange={handleInputChange} />
            <InputField label="Ejercicios Oposición (5 pts/ejercicio, máx 3)" name="ejerciciosOposicion" value={inputs.ejerciciosOposicion} onChange={handleInputChange} max={3} />
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button onClick={calculate} className="flex-1 bg-[#C8102E] hover:bg-red-700 text-white py-3 px-6 rounded-lg font-bold shadow-md transform active:scale-95 transition-all flex items-center justify-center gap-2">
            <RenderIcon icon={Save} className="w-5 h-5" /> Calcular Puntuación
          </button>
          <button onClick={reset} className="bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 px-6 rounded-lg font-semibold shadow-sm transform active:scale-95 transition-all" aria-label="Limpiar">
            <RenderIcon icon={Trash2} className="w-5 h-5" />
          </button>
        </div>

        {isCalculated && (
          <div className="mt-8 bg-white rounded-lg border-2 border-green-500 p-6 shadow-lg animate-in">
            <h4 className="text-green-700 font-bold text-lg mb-4 border-b border-green-100 pb-2">Resultado Estimado</h4>
            <div className="space-y-2 text-slate-700">
              <ResultRow label="Experiencia Profesional" value={result.experiencia} />
              <ResultRow label="Formación" value={result.formacion} />
              <ResultRow label="Oposición" value={result.oposicion} />
              <div className="pt-3 mt-2 border-t border-green-200 flex justify-between items-center">
                <span className="font-bold text-lg text-green-800">TOTAL</span>
                <span className="font-black text-3xl text-green-600">{result.total.toFixed(2)} pts</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- VISTAS ---

const AccessView = () => {
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
    <div className="space-y-8 animate-in">
      <div className="border-b-4 border-red-600 pb-2 mb-6">
        <h2 className="text-3xl font-bold text-red-700">Fundamentos y Proceso</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
        <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
          <RenderIcon icon={Globe} className="w-5 h-5" /> Naturaleza de la Bolsa
        </h3>
        <p className="text-slate-700 leading-relaxed">
          La Bolsa Abierta y Permanente (BAPE) es un <strong>procedimiento telemático</strong> abierto permanentemente.
          No deriva directamente de procesos selectivos, sino que es un sistema independiente de gestión de personal temporal.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
        <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
          <RenderIcon icon={CheckCircle} className="w-5 h-5" /> Requisitos Clave
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
          <RenderIcon icon={MousePointer} className="w-5 h-5" /> Proceso de Inscripción
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
                {step.isWarning && <RenderIcon icon={Hammer} className="w-5 h-5 text-red-500 mt-2" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-cyan-50 rounded-lg shadow-md p-6 border-l-4 border-cyan-500">
        <h3 className="text-xl font-bold text-cyan-700 mb-3 flex items-center gap-2">
          <RenderIcon icon={Info} className="w-5 h-5" /> Fecha de Corte
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

const ScoreView = () => {
  return (
    <div className="space-y-8 animate-in">
      <div className="border-b-4 border-red-600 pb-2 mb-6">
        <h2 className="text-3xl font-bold text-red-700">Baremo de Méritos</h2>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-sm text-center">
        <h3 className="text-xl font-bold text-green-800">Puntuación Máxima Total</h3>
        <p className="text-4xl font-black text-green-600 mt-2">115 Puntos</p>
      </div>

      <Simulator />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600 h-full">
          <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
            <RenderIcon icon={Award} className="w-5 h-5" /> Experiencia Profesional
          </h3>
          <table className="w-full text-sm">
            <thead className="bg-[#C8102E] text-white">
              <tr>
                <th className="p-2 text-left rounded-tl">Centro</th>
                <th className="p-2 text-right rounded-tr">Pts/Mes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="p-3">Centros Públicos SNS / UE</td>
                <td className="p-3 text-right font-bold text-red-600">0,30</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3">Otros centros públicos</td>
                <td className="p-3 text-right font-bold text-red-600">0,25</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3">Privadas concertadas</td>
                <td className="p-3 text-right font-bold text-red-600">0,10</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600 h-full">
          <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
            <RenderIcon icon={BookOpen} className="w-5 h-5" /> Formación Continuada
          </h3>
          <p className="text-xs text-slate-500 mb-3 italic">
            Cursos relacionados y finalizados en los últimos 10 años.
          </p>
          <table className="w-full text-sm">
            <thead className="bg-[#C8102E] text-white">
              <tr>
                <th className="p-2 text-left rounded-tl">Tipo</th>
                <th className="p-2 text-right rounded-tr">Puntos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="p-3">
                  Crédito Ordinario<br />
                  <span className="text-xs text-slate-500">10 horas</span>
                </td>
                <td className="p-3 text-right font-bold text-red-600">0,20</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3">
                  Crédito ECTS<br />
                  <span className="text-xs text-slate-500">25-30 horas</span>
                </td>
                <td className="p-3 text-right font-bold text-red-600">0,50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
        <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
          <RenderIcon icon={GraduationCap} className="w-5 h-5" /> Oposición
        </h3>
        <p className="text-slate-700 mb-2">
          Superación de ejercicios en procesos selectivos de la misma categoría en <strong>cualquier Administración Pública</strong>.
        </p>
        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-red-600">5</div>
          <div>
            <p className="font-bold text-slate-800">Puntos por ejercicio aprobado</p>
            <p className="text-sm text-slate-500">Máximo 15 puntos (3 ejercicios)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CallupsView = () => {
  const AppointmentCard = ({ icon, title, color, subtitle, features }) => {
    const colors = {
      green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', badge: 'bg-green-100 text-green-800' },
      cyan: { bg: 'bg-cyan-50', border: 'border-cyan-500', text: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-800' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800' }
    };
    const c = colors[color];
    return (
      <div className={`bg-white rounded-xl shadow-lg border-t-4 ${c.border} p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1`}>
        <RenderIcon icon={icon} className={`w-12 h-12 ${c.text} mb-3`} />
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <span className={`text-xs font-bold px-2 py-1 rounded mt-2 mb-4 ${c.badge}`}>{subtitle}</span>
        <ul className="text-left w-full space-y-2 text-sm text-slate-600">
          {features.map((f, i) => <li key={i} className="flex items-start gap-2"><span className="text-slate-400">•</span> {f}</li>)}
        </ul>
      </div>
    );
  };

  const StrategyItem = ({ title, available, note }) => (
    <div className="bg-white p-4 rounded border border-red-100 shadow-sm">
      <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-sm text-slate-600">Permaneces <strong className="text-green-600">DISPONIBLE</strong> para:</p>
      <ul className="list-disc pl-5 text-sm text-slate-600 mt-1">
        {available.map(a => <li key={a}>{a}</li>)}
      </ul>
      {note && <p className="text-xs text-slate-400 mt-2 italic">{note}</p>}
    </div>
  );

  const DateCard = ({ date }) => (
    <div className="bg-white p-3 rounded shadow text-center font-bold text-slate-700 border border-amber-200">
      📅 {date}
    </div>
  );

  return (
    <div className="space-y-8 animate-in">
      <div className="border-b-4 border-red-600 pb-2 mb-6">
        <h2 className="text-3xl font-bold text-red-700">Llamamientos y Disponibilidad</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AppointmentCard
          icon={Briefcase} title="Interinidad" color="green" subtitle="Máxima estabilidad"
          features={["Plaza vacante sin titular", "Mayor duración temporal", "Prioridad máxima"]}
        />
        <AppointmentCard
          icon={Calendar} title="Larga Duración" color="cyan" subtitle="Con reserva de plaza"
          features={["Sustituciones ≥ 6 meses", "Reserva de plaza garantizada", "Estabilidad media-alta"]}
        />
        <AppointmentCard
          icon={Clock} title="Corta Duración" color="orange" subtitle="Temporal"
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
          <RenderIcon icon={MapIcon} className="w-5 h-5" /> Áreas Geográficas
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Puedes solicitar <strong>todas las áreas/zonas que desees</strong>.</li>
          <li>Debes elegir una única <strong>Área Preferente</strong> (usada exclusivamente para Interinidades).</li>
        </ul>
      </div>

      <div className="bg-amber-50 rounded-lg shadow-md p-6 border-l-4 border-amber-500">
        <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
          <RenderIcon icon={AlertCircle} className="w-5 h-5" /> Actualización de Áreas (Fechas Corte)
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

const PenaltiesView = () => {
  const JustifiedCause = ({ icon, title, desc }) => (
    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-green-50 transition-colors">
      <RenderIcon icon={icon} className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-bold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-600 leading-snug">{desc}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in">
      <div className="border-b-4 border-red-600 pb-2 mb-6">
        <h2 className="text-3xl font-bold text-red-700">Régimen Sancionador</h2>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
          <RenderIcon icon={AlertTriangle} className="w-6 h-6" /> Sanciones por Rechazo Injustificado
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#C8102E] text-white">
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
          <RenderIcon icon={PhoneMissed} className="w-8 h-8 text-amber-700" />
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

const BolsasStatusView = () => {
  // ========================================
  // DATOS DE ESTADO DE BOLSAS - EDITAR AQUÍ
  // ========================================
  // Última actualización: 20/12/2024 09:40
  // Datos extraídos de la web oficial de SACYL

  const bolsasData = [
    {
      id: 1,
      categoria: 'ENFERMERO/A',
      estado: 'documentacion',
      ultimoCorte: '2024',
      fechaCorte: '20/02/2025',
      descripcion: 'Publicada Resolución abriendo plazo para entrega de documentación (del 21 de febrero al 6 de marzo de 2025). Gestionado por Valladolid.',
      cortes: [
        { año: '2024', fecha: '20/02/2025', estado: 'Validación de méritos post-entrega' },
        { año: '2022', fecha: '19/06/2024', estado: 'Lista definitiva publicada' }
      ]
    },
    {
      id: 2,
      categoria: 'AUXILIAR ADMINISTRATIVO',
      estado: 'documentacion',
      ultimoCorte: '2024',
      fechaCorte: '26/11/2024',
      descripcion: 'Corte 2024 en fase de validación tras finalizar entrega de documentación. Gestionado por G.S.A. Salamanca.',
      cortes: [
        { año: '2024', fecha: '26/11/2024', estado: 'Presentación documentación finalizada' },
        { año: '2021', fecha: '27/08/2024', estado: 'Relación definitiva vigente' }
      ]
    },
    {
      id: 3,
      categoria: 'CELADOR',
      estado: 'documentacion',
      ultimoCorte: '2025',
      fechaCorte: '28/04/2025',
      descripcion: 'Publicada resolución para presentación de documentos del nuevo corte. Proceso de estabilización en curso.',
      cortes: [
        { año: '2025', fecha: '28/04/2025', estado: 'En fase de documentación' },
        { año: '2021', fecha: '04/09/2024', estado: 'Relación definitiva previa' }
      ]
    },
    {
      id: 4,
      categoria: 'TÉCNICO EN CUIDADOS AUXILIARES DE ENFERMERÍA (TCAE)',
      estado: 'reclamacion',
      ultimoCorte: '2023',
      fechaCorte: '12/11/2025',
      descripcion: 'Publicada relación provisional del Corte 2023. Urgencia por finalizar tras demora administrativa.',
      cortes: [
        { año: '2023', fecha: '12/11/2025', estado: 'Relación provisional publicada' },
        { año: '2020', fecha: '15/11/2022', estado: 'Relación definitiva vigente' }
      ]
    },
    {
      id: 5,
      categoria: 'T.S. LABORATORIO DE DIAGNÓSTICO CLÍNICO',
      estado: 'reclamacion',
      ultimoCorte: '2024',
      fechaCorte: '24/11/2025',
      descripcion: 'Publicada relación provisional del Corte 2024. Periodo de alegaciones hasta el 9 de diciembre. Gestiona León.',
      cortes: [
        { año: '2024', fecha: '24/11/2025', estado: 'Relación provisional (en alegaciones)' }
      ]
    },
    {
      id: 6,
      categoria: 'ENFERMERO/A MATRONA',
      estado: 'definitiva',
      ultimoCorte: '2025',
      fechaCorte: '18/12/2025',
      descripcion: 'Relación definitiva publicada con celeridad para cobertura de paritorios 2026. Vigente desde 19/12.',
      cortes: [
        { año: '2025', fecha: '18/12/2025', estado: 'Relación definitiva vigente' }
      ]
    },
    {
      id: 7,
      categoria: 'ENFERMERO/A ESPECIALISTA FAMILIAR Y COMUNITARIA',
      estado: 'definitiva',
      ultimoCorte: '2024',
      fechaCorte: '08/10/2025',
      descripcion: 'Relación definitiva publicada. Entrada en vigor el 9 de octubre de 2025.',
      cortes: [
        { año: '2024', fecha: '08/10/2025', estado: 'Relación definitiva publicada' }
      ]
    },
    {
      id: 8,
      categoria: 'GESTIÓN ADMINISTRATIVA (A2)',
      estado: 'definitiva',
      ultimoCorte: '2024',
      fechaCorte: '29/10/2025',
      descripcion: 'Culminado proceso del Corte 2024. Disponibilidad de mandos intermedios para 2026.',
      cortes: [
        { año: '2024', fecha: '29/10/2025', estado: 'Relación definitiva publicada' }
      ]
    },
    {
      id: 9,
      categoria: 'ADMINISTRATIVO (C1)',
      estado: 'reclamacion',
      ultimoCorte: '2025',
      fechaCorte: '21/10/2025',
      descripcion: 'Publicadas listas provisionales de admitidos y excluidos. Convocatoria de plazas fijas en estudio.',
      cortes: [
        { año: '2025', fecha: '21/10/2025', estado: 'Listas provisionales publicadas' }
      ]
    },
    {
      id: 10,
      categoria: 'ENFERMERO/A SALUD MENTAL / TRABAJO / GERIÁTRICA / PEDIÁTRICA',
      estado: 'definitiva',
      ultimoCorte: '2024',
      fechaCorte: '24/04/2025',
      descripcion: 'Sincronización de resoluciones definitivas para todas estas especialidades de enfermería.',
      cortes: [
        { año: '2024', fecha: '24/04/2025', estado: 'Relación definitiva publicada' }
      ]
    },
    {
      id: 11,
      categoria: 'T.S. IMAGEN PARA EL DIAGNÓSTICO',
      estado: 'definitiva',
      ultimoCorte: '2024',
      fechaCorte: '22/07/2025',
      descripcion: 'Estabilización de contratación para servicios de radiología hospitalaria.',
      cortes: [
        { año: '2024', fecha: '22/07/2025', estado: 'Relación definitiva publicada' }
      ]
    },
    {
      id: 12,
      categoria: 'T.S. DOCUMENTACIÓN SANITARIA / TÉCNICO EN FARMACIA',
      estado: 'definitiva',
      ultimoCorte: '2024',
      fechaCorte: '20/02/2025',
      descripcion: 'Publicadas relaciones definitivas en febrero de 2025.',
      cortes: [
        { año: '2024', fecha: '20/02/2025', estado: 'Relación definitiva publicada' }
      ]
    },
    {
      id: 13,
      categoria: 'T.S. NUTRICIÓN Y DIETÉTICA',
      estado: 'definitiva',
      ultimoCorte: '2025',
      fechaCorte: '04/03/2025',
      descripcion: 'Resolución definitiva tras validación de méritos específicos.',
      cortes: [
        { año: '2025', fecha: '04/03/2025', estado: 'Relación definitiva publicada' }
      ]
    },
    {
      id: 14,
      categoria: 'LOGOPEDA',
      estado: 'definitiva',
      ultimoCorte: '2025',
      fechaCorte: '02/12/2025',
      descripcion: 'Resolución reciente para gestión eficiente de servicios de rehabilitación hospitalaria.',
      cortes: [
        { año: '2025', fecha: '02/12/2025', estado: 'Relación definitiva publicada' }
      ]
    },
    {
      id: 15,
      categoria: 'TITULADO SUPERIOR EN ADMINISTRACIÓN SANITARIA',
      estado: 'definitiva',
      ultimoCorte: '2025',
      fechaCorte: '02/12/2025',
      descripcion: 'Refuerzo de la estructura de gestión técnica de la Consejería y Gerencias.',
      cortes: [
        { año: '2025', fecha: '02/12/2025', estado: 'Relación definitiva publicada' }
      ]
    },
    {
      id: 16,
      categoria: 'L.E. MEDICINA FAMILIAR Y COMUNITARIA (BAPE)',
      estado: 'documentacion',
      ultimoCorte: '2025',
      fechaCorte: '28/04/2025',
      descripcion: 'Categoría prioritaria para planificación de centros rurales. En fase de entrega de documentos.',
      cortes: [
        { año: '2025', fecha: '28/04/2025', estado: 'En fase de documentación' }
      ]
    },
    {
      id: 17,
      categoria: 'ODONTÓLOGO',
      estado: 'definitiva',
      ultimoCorte: '2025',
      fechaCorte: '23/07/2025',
      descripcion: 'Relación definitiva estabilizada para servicios de salud bucodental.',
      cortes: [
        { año: '2025', fecha: '23/07/2025', estado: 'Relación definitiva publicada' }
      ]
    },
    {
      id: 18,
      categoria: 'MÉDICO DE ADMISIÓN Y DOC. CLÍNICA',
      estado: 'definitiva',
      ultimoCorte: '2025',
      fechaCorte: '08/10/2025',
      descripcion: 'Actualización de listados para gestión de flujos asistenciales.',
      cortes: [
        { año: '2025', fecha: '08/10/2025', estado: 'Relación definitiva publicada' }
      ]
    },
    {
      id: 19,
      categoria: 'T.E. PREVENCIÓN DE RIESGOS LABORALES',
      estado: 'definitiva',
      ultimoCorte: '2022',
      fechaCorte: '30/05/2022',
      descripcion: 'Última definitiva 2022. Nueva fecha de corte para actualizaciones fijada el 10/07/2023.',
      cortes: [
        { año: '2022', fecha: '30/05/2022', estado: 'Relación definitiva vigente' }
      ]
    },
    {
      id: 20,
      categoria: 'T.S. HIGIENE BUCODENTAL',
      estado: 'definitiva',
      ultimoCorte: '2024',
      fechaCorte: '26/11/2024',
      descripcion: 'Relación definitiva publicada y operativa.',
      cortes: [
        { año: '2024', fecha: '26/11/2024', estado: 'Relación definitiva publicada' }
      ]
    }
  ];

  const getEstadoBadge = (estado) => {
    const estados = {
      abierta: { label: 'Abierta', color: 'bg-green-100 text-green-800', icon: CheckCircle2 },
      cerrada: { label: 'Cerrada', color: 'bg-gray-100 text-gray-800', icon: XCircle },
      documentacion: { label: 'Fase Documentación', color: 'bg-blue-100 text-blue-800', icon: FileText },
      reclamacion: { label: 'Fase Reclamación', color: 'bg-yellow-100 text-yellow-800', icon: AlertCircle },
      definitiva: { label: 'Lista Definitiva', color: 'bg-purple-100 text-purple-800', icon: FileCheck }
    };
    return estados[estado] || estados.cerrada;
  };

  const CategoriaCard = ({ bolsa }) => {
    const estadoBadge = getEstadoBadge(bolsa.estado);

    return (
      <div className="bg-white rounded-lg shadow-md border-l-4 border-red-600 p-6 hover:shadow-lg transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{bolsa.categoria}</h3>
            <div className="flex items-center gap-2 mb-3">
              <RenderIcon icon={estadoBadge.icon} className="w-4 h-4" />
              <span className={`text-xs font-bold px-3 py-1 rounded ${estadoBadge.color}`}>
                {estadoBadge.label}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500 mb-1">Último Corte</div>
            <div className="text-lg font-bold text-red-700">{bolsa.ultimoCorte}</div>
            <div className="text-xs text-slate-600">{bolsa.fechaCorte}</div>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          {bolsa.descripcion}
        </p>

        {bolsa.cortes && bolsa.cortes.length > 0 && (
          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <RenderIcon icon={Clock3} className="w-4 h-4" />
              Historial de Cortes
            </h4>
            <div className="space-y-2">
              {bolsa.cortes.map((corte, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs bg-slate-50 p-2 rounded">
                  <span className="font-medium text-slate-700">Corte {corte.año}</span>
                  <span className="text-slate-500">{corte.fecha}</span>
                  <span className="text-slate-600 italic">{corte.estado}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-in">
      <div className="border-b-4 border-red-600 pb-2 mb-6">
        <h2 className="text-3xl font-bold text-red-700">Estado de las Bolsas por Categoría</h2>
        <p className="text-slate-500 text-sm mt-2">Información actualizada sobre el estado de cada convocatoria BAPE</p>
      </div>

      <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-bold text-cyan-800 mb-2 flex items-center gap-2">
          <RenderIcon icon={Info} className="w-5 h-5" />
          Leyenda de Estados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded bg-green-100 text-green-800">Abierta</span>
            <span className="text-xs text-slate-600">Inscripción activa</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded bg-blue-100 text-blue-800">Fase Documentación</span>
            <span className="text-xs text-slate-600">Presentar documentos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded bg-yellow-100 text-yellow-800">Fase Reclamación</span>
            <span className="text-xs text-slate-600">Periodo de alegaciones</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded bg-purple-100 text-purple-800">Lista Definitiva</span>
            <span className="text-xs text-slate-600">Bolsa operativa</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded bg-gray-100 text-gray-800">Cerrada</span>
            <span className="text-xs text-slate-600">No admite inscripciones</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {bolsasData.map(bolsa => (
          <CategoriaCard key={bolsa.id} bolsa={bolsa} />
        ))}
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-bold text-amber-800 mb-2 flex items-center gap-2">
          <RenderIcon icon={AlertCircle} className="w-5 h-5" />
          Nota Importante
        </h3>
        <p className="text-slate-700 text-sm leading-relaxed">
          Esta información se actualiza periódicamente desde la web oficial de SACYL.
          Para información oficial y actualizada en tiempo real, consulta siempre el{' '}
          <a
            href="https://www.saludcastillayleon.es/profesionales/es/procesos_selectivos/nuevo-procedimiento-bolsas-empleo/convocatorias-abiertas"
            target="_blank"
            rel="noreferrer"
            className="text-amber-700 font-semibold hover:underline"
          >
            portal oficial de SACYL
          </a>.
        </p>
      </div>
    </div>
  );
};

const NewsView = () => {
  // ========================================
  // DATOS ESTÁTICOS - EDITAR AQUÍ
  // ========================================
  // Última actualización: 19/12/2024 21:44
  // Generado automáticamente con actualizar_novedades.py
  const staticNews = [
    {
      id: 1,
      title: 'Próxima Fecha de Corte BAPE',
      description: 'Recuerda actualizar tus áreas geográficas y méritos antes del 09/03/2025. Todos los cambios deben estar registrados antes de las 23:59:59.',
      category: 'general',
      dueDate: '2025-03-09'
    },
    {
      id: 2,
      title: 'Convocatoria: AUXILIAR ADMINISTRATIVO',
      description: 'Publicada Resolución por la que se concede plazo para la presentación de la documentación acreditativa de requisitos y méritos de la bolsa de empleo',
      category: 'convocatoria',
      dueDate: '2025-03-19'
    },
    {
      id: 3,
      title: 'Convocatoria: CELADOR',
      description: 'Publicada Resolución por la que se concede plazo para la presentación de la documentación acreditativa de requisitos y méritos de la bolsa de empleo',
      category: 'convocatoria',
      dueDate: '2025-03-19'
    },
    {
      id: 4,
      title: 'Convocatoria: ENFERMERO/A',
      description: 'Publicada Resolución por la que se concede plazo para la presentación de la documentación acreditativa de requisitos y méritos de la bolsa de empleo',
      category: 'convocatoria',
      dueDate: '2025-02-20'
    },
    {
      id: 5,
      title: 'Convocatoria: FISIOTERAPEUTA',
      description: 'Publicada Resolución por la que se procede a la publicación de la relación definitiva de las personas candidatas de la bolsa de empleo',
      category: 'convocatoria',
      dueDate: '2025-06-11'
    },
    {
      id: 6,
      title: 'Recordatorio: Certificado Digital',
      description: 'Verifica la vigencia de tu certificado digital para poder acceder al portal BAPE sin problemas. Desde julio 2025 es obligatorio.',
      category: 'general',
      dueDate: '2025-07-01'
    }
  ];

  const categories = [
    { id: 'general', label: 'General', color: 'blue' },
    { id: 'normativa', label: 'Normativa', color: 'purple' },
    { id: 'convocatoria', label: 'Convocatoria', color: 'green' },
    { id: 'formacion', label: 'Formación', color: 'orange' },
    { id: 'urgente', label: 'Urgente', color: 'red' }
  ];

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    due.setHours(0, 0, 0, 0);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    const colors = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-800' },
      green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', badge: 'bg-green-100 text-green-800' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800' },
      red: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-700', badge: 'bg-red-100 text-red-800' }
    };
    return colors[category?.color || 'blue'];
  };

  const NewsCard = ({ item }) => {
    const daysUntil = getDaysUntilDue(item.dueDate);
    const colors = getCategoryColor(item.category);
    const category = categories.find(c => c.id === item.category);
    const isExpired = daysUntil < 0;
    const isUrgent = daysUntil >= 0 && daysUntil <= 7;

    return (
      <div className={`bg-white rounded-lg shadow-md border-l-4 ${colors.border} p-5 transition-all hover:shadow-lg ${isExpired ? 'opacity-60' : ''}`}>
        <div className="flex items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-bold px-2 py-1 rounded ${colors.badge}`}>
                {category?.label}
              </span>
              {isExpired && (
                <span className="text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-600">
                  VENCIDA
                </span>
              )}
              {isUrgent && !isExpired && (
                <span className="text-xs font-bold px-2 py-1 rounded bg-yellow-100 text-yellow-800 animate-pulse">
                  ⚠️ PRÓXIMA
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">{item.description}</p>
            )}
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <RenderIcon icon={Calendar} className="w-4 h-4" />
                <span>Vence: {new Date(item.dueDate).toLocaleDateString('es-ES')}</span>
              </div>
              {!isExpired && (
                <span className={`font-semibold ${isUrgent ? 'text-yellow-700' : 'text-slate-600'}`}>
                  {daysUntil === 0 ? 'Hoy' : daysUntil === 1 ? 'Mañana' : `${daysUntil} días`}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const groupedNews = categories.map(category => ({
    ...category,
    items: staticNews.filter(item => item.category === category.id)
  })).filter(group => group.items.length > 0);

  return (
    <div className="space-y-8 animate-in">
      <div className="border-b-4 border-red-600 pb-2 mb-6">
        <h2 className="text-3xl font-bold text-red-700">Novedades y Fechas Importantes</h2>
        <p className="text-slate-500 text-sm mt-2">Información oficial actualizada por UGT Sanidad Salamanca</p>
      </div>

      {staticNews.length === 0 ? (
        <div className="bg-slate-50 rounded-lg border-2 border-dashed border-slate-300 p-12 text-center">
          <RenderIcon icon={Bell} className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500 text-lg">No hay novedades publicadas</p>
          <p className="text-slate-400 text-sm mt-2">Próximamente se publicarán actualizaciones importantes</p>
        </div>
      ) : (
        <div className="space-y-6">
          {groupedNews.map(group => (
            <div key={group.id}>
              <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-${group.color}-500`}></span>
                {group.label}
                <span className="text-sm font-normal text-slate-400">({group.items.length})</span>
              </h3>
              <div className="space-y-4">
                {group.items
                  .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
                  .map(item => (
                    <NewsCard key={item.id} item={item} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- RENDERIZADO PRINCIPAL ---

const ScrollHandler = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
        <ScrollHandler />
        <Header />
        <Navigation />

        <main className="flex-grow max-w-6xl mx-auto w-full p-4 md:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/acceso" replace />} />
            <Route path="/acceso" element={<AccessView />} />
            <Route path="/puntuacion" element={<ScoreView />} />
            <Route path="/llamamientos" element={<CallupsView />} />
            <Route path="/penalizaciones" element={<PenaltiesView />} />
            <Route path="/estado-bolsas" element={<BolsasStatusView />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </HashRouter>
  );
};

// Mount con comprobación de seguridad
try {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  }
} catch (error) {
  console.error("Error en montaje:", error);
  document.body.innerHTML += `<div style="color:red; padding:20px;">Error crítico de montaje: ${error.message}</div>`;
}
