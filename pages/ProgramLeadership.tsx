
import React from 'react';
import ProgramLayout from './ProgramLayout';
import { PROGRAMS } from '../constants';

const ProgramLeadership: React.FC = () => {
  const data = PROGRAMS.find(p => p.id === 'leadership-program');
  return data ? <ProgramLayout program={data} /> : null;
};

export default ProgramLeadership;
