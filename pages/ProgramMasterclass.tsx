
import React from 'react';
import ProgramLayout from './ProgramLayout';
import { PROGRAMS } from '../constants';

const ProgramMasterclass: React.FC = () => {
  const data = PROGRAMS.find(p => p.id === 'business-masterclass');
  return data ? <ProgramLayout program={data} /> : null;
};

export default ProgramMasterclass;
