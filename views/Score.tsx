import React from 'react';
import { Simulator } from '../components/Simulator';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

export const ScoreView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
            <thead className="bg-red-600 text-white">
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
            <thead className="bg-red-600 text-white">
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