
import React from 'react';
import ProgramLayout from './ProgramLayout';
import { PROGRAMS } from '../constants';

const ProgramPlanningClub: React.FC = () => {
  const data = PROGRAMS.find(p => p.id === 'planning-club');
  return data ? <ProgramLayout program={data} /> : null;
};

export default ProgramPlanningClub;
