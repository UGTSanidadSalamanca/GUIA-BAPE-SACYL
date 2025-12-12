export interface SimulatorState {
  mesesSNS: number;
  mesesOtros: number;
  mesesPrivado: number;
  creditosOrdinarios: number;
  creditosECTS: number;
  ejerciciosOposicion: number;
}

export interface CalculationResult {
  experiencia: number;
  formacion: number;
  oposicion: number;
  total: number;
}
