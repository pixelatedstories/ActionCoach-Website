
import React from 'react';
import ProgramLayout from './ProgramLayout';
import { PROGRAMS } from '../constants';

const ProgramStrategic: React.FC = () => {
  const data = PROGRAMS.find(p => p.id === 'strategic-planning');
  return data ? <ProgramLayout program={data} /> : null;
};

export default ProgramStrategic;
