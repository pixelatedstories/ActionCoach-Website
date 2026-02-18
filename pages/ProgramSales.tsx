
import React from 'react';
import ProgramLayout from './ProgramLayout';
import { PROGRAMS } from '../constants';

const ProgramSales: React.FC = () => {
  const data = PROGRAMS.find(p => p.id === 'sales-training');
  return data ? <ProgramLayout program={data} /> : null;
};

export default ProgramSales;
