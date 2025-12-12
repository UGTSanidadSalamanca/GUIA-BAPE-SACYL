// Destructuring globals provided by CDNs
const { useState, useEffect, useCallback } = React;
const { HashRouter, Routes, Route, Navigate, useLocation, NavLink } = ReactRouterDOM;

// Safe access to Lucide icons global (it can be window.lucide or window.LucideReact depending on version)
const LucideIcons = window.lucide || window.LucideReact || {};
const { 
  Building2, LogIn, Calculator, PhoneIncoming, AlertTriangle, 
  Trash2, Save, MapPin, Mail, Phone, ArrowUp, Info, 
  CheckCircle, Globe, MousePointer, Hammer, Award, BookOpen, 
  GraduationCap, Clock, Calendar, Briefcase, Map, AlertCircle, 
  PhoneMissed, Heart, Baby, UserMinus 
} = LucideIcons;

// --- Components ---

const Header = () => {
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
              {item.icon && <item.icon className="w-4 h-4" />}
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
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

// --- Simulator Logic ---

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
          <Calculator className="w-5 h-5" />
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
            <Save className="w-5 h-5" /> Calcular Puntuación
          </button>
          <button onClick={reset} className="bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 px-6 rounded-lg font-semibold shadow-sm transform active:scale-95 transition-all" aria-label="Limpiar">
            <Trash2 className="w-5 h-5" />
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

// --- Views ---

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
            <Award className="w-5 h-5" /> Experiencia Profesional
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
            <BookOpen className="w-5 h-5" /> Formación Continuada
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
                  Crédito Ordinario<br/>
                  <span className="text-xs text-slate-500">10 horas</span>
                </td>
                <td className="p-3 text-right font-bold text-red-600">0,20</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3">
                  Crédito ECTS<br/>
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
          <GraduationCap className="w-5 h-5" /> Oposición
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
  const AppointmentCard = ({ icon: Icon, title, color, subtitle, features }) => {
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

const PenaltiesView = () => {
  const JustifiedCause = ({ icon: Icon, title, desc }) => (
    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-green-50 transition-colors">
      <Icon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
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
          <AlertTriangle className="w-6 h-6" /> Sanciones por Rechazo Injustificado
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

// --- Main App & Routing ---

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
          </Routes>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </HashRouter>
  );
};

// Mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);