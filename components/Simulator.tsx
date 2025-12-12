import React, { useState, useEffect, useCallback } from 'react';
import { Calculator, Trash2, Save } from 'lucide-react';
import { SimulatorState, CalculationResult } from '../types';

const INITIAL_STATE: SimulatorState = {
  mesesSNS: 0,
  mesesOtros: 0,
  mesesPrivado: 0,
  creditosOrdinarios: 0,
  creditosECTS: 0,
  ejerciciosOposicion: 0,
};

export const Simulator: React.FC = () => {
  const [inputs, setInputs] = useState<SimulatorState>(INITIAL_STATE);
  const [result, setResult] = useState<CalculationResult>({ experiencia: 0, formacion: 0, oposicion: 0, total: 0 });
  const [isCalculated, setIsCalculated] = useState(false);

  // Load from local storage on mount
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

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('bape-simulator-data', JSON.stringify(inputs));
  }, [inputs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0) numValue = 0;
    
    // Max 3 exams
    if (name === 'ejerciciosOposicion' && numValue > 3) numValue = 3;

    setInputs(prev => ({ ...prev, [name]: numValue }));
    setIsCalculated(false); // Reset calculated state to encourage re-calculation or real-time (optional)
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

    setResult({
      experiencia,
      formacion,
      oposicion,
      total
    });
    setIsCalculated(true);
  }, [inputs]);

  const reset = () => {
    setInputs(INITIAL_STATE);
    setIsCalculated(false);
    localStorage.removeItem('bape-simulator-data');
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-xl border border-red-100 overflow-hidden shadow-inner my-8">
      <div className="bg-red-600 p-4 flex items-center justify-between">
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
            <InputField 
              label="Meses en SNS/UE (0,30 pts/mes)" 
              name="mesesSNS" 
              value={inputs.mesesSNS} 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Meses otros públicos (0,25 pts/mes)" 
              name="mesesOtros" 
              value={inputs.mesesOtros} 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Meses privados concertados (0,10 pts/mes)" 
              name="mesesPrivado" 
              value={inputs.mesesPrivado} 
              onChange={handleInputChange} 
            />
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-red-800 border-b border-red-200 pb-2">Formación y Oposición</h4>
            <InputField 
              label="Créditos Ordinarios (0,20 pts/crédito)" 
              name="creditosOrdinarios" 
              value={inputs.creditosOrdinarios} 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Créditos ECTS (0,50 pts/crédito)" 
              name="creditosECTS" 
              value={inputs.creditosECTS} 
              onChange={handleInputChange} 
            />
            <InputField 
              label="Ejercicios Oposición (5 pts/ejercicio, máx 3)" 
              name="ejerciciosOposicion" 
              value={inputs.ejerciciosOposicion} 
              onChange={handleInputChange}
              max={3}
            />
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button 
            onClick={calculate}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-bold shadow-md transform active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Calcular Puntuación
          </button>
          <button 
            onClick={reset}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 px-6 rounded-lg font-semibold shadow-sm transform active:scale-95 transition-all"
            aria-label="Limpiar formulario"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        {isCalculated && (
          <div className="mt-8 bg-white rounded-lg border-2 border-green-500 p-6 shadow-lg animate-[fadeIn_0.5s_ease-out]">
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

const InputField: React.FC<{
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  max?: number;
}> = ({ label, name, value, onChange, max }) => (
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

const ResultRow: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="font-medium">{label}:</span>
    <span className="font-mono bg-slate-100 px-2 py-1 rounded">{value.toFixed(2)}</span>
  </div>
);