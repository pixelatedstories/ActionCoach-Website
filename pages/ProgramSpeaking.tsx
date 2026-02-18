
import React from 'react';
import ProgramLayout from './ProgramLayout';
import { PROGRAMS } from '../constants';

const ProgramSpeaking: React.FC = () => {
  const data = PROGRAMS.find(p => p.id === 'speaking');
  return data ? <ProgramLayout program={data} /> : null;
};

export default ProgramSpeaking;
