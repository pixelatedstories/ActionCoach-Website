
import React from 'react';
import ProgramLayout from './ProgramLayout';
import { PROGRAMS } from '../constants';

const ProgramBusinessUnlimited: React.FC = () => {
  const data = PROGRAMS.find(p => p.id === 'business-unlimited');
  return data ? <ProgramLayout program={data} /> : null;
};

export default ProgramBusinessUnlimited;
