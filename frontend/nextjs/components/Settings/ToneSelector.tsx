import React, { ChangeEvent } from 'react';

interface ToneSelectorProps {
  tone: string;
  onToneChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
export default function ToneSelector({ tone, onToneChange }: ToneSelectorProps) {
  return (
    <div className="form-group">
      <label htmlFor="tone" className="agent_question">Tono del Reporte </label>
      <select 
        name="tone" 
        id="tone" 
        value={tone} 
        onChange={onToneChange} 
        className="form-control-static"
        required
      >
        <option value="Objective">Objetivo - Presentación imparcial y sin sesgos de los hechos y hallazgos</option>
        <option value="Formal">Formal - Se adhiere a los estándares académicos con un lenguaje sofisticado y una estructura adecuada</option>
        <option value="Analytical">Analítico - Evaluación crítica y examen detallado de datos y teorías</option>
        <option value="Persuasive">Persuasivo - Convencer al público de una particular visión o argumento</option>
        <option value="Informative">Informativo - Proporcionar información clara y exhaustiva sobre un tema</option>
        <option value="Explanatory">Explicativo - Clarificar conceptos y procesos complejos</option>
        <option value="Descriptive">Descriptivo - Descripción detallada de fenómenos, experimentos o casos de estudio</option>
        <option value="Critical">Crítico - Evaluar la validez y relevancia de la investigación y sus conclusiones</option>
        <option value="Comparative">Comparativo - Juxtaponer diferentes teorías, datos o métodos para resaltar diferencias y similitudes</option>
        <option value="Speculative">Especulativo - Explorar hipótesis y posibles implicaciones o direcciones de investigación futuras</option>
        <option value="Reflective">Reflexivo - Considerar el proceso de investigación y personal insights o experiencias</option>
        <option value="Narrative">Narrativo - Contar una historia para ilustrar los hallazgos o metodologías de investigación</option>
        <option value="Humorous">Humorístico - Ligero y entretenido, generalmente para hacer el contenido más accesible</option>
        <option value="Optimistic">Optimista - Resaltar hallazgos positivos y beneficios potenciales</option>
        <option value="Pessimistic">Pesimista - Enfocarse en limitaciones, desafíos o resultados negativos</option>
        <option value="Simple">Simple - Escrito para lectores jóvenes, usando vocabulario básico y explicaciones claras</option>
        <option value="Casual">Casual - Estilo conversacional y relajado para lectura fácil y cotidiana</option>
      </select>
    </div>
  );
}