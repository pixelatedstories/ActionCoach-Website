
import React from 'react';
import ProgramLayout from './ProgramLayout';
import { PROGRAMS } from '../constants';

const ProgramManagement: React.FC = () => {
  const data = PROGRAMS.find(p => p.id === 'management-program');
  return data ? <ProgramLayout program={data} /> : null;
};

export default ProgramManagement;
