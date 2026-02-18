
import React from 'react';
import ProgramLayout from './ProgramLayout';
import { PROGRAMS } from '../constants';

const ProgramFreedom: React.FC = () => {
  const data = PROGRAMS.find(p => p.id === 'one-to-one-freedom');
  return data ? <ProgramLayout program={data} /> : null;
};

export default ProgramFreedom;
