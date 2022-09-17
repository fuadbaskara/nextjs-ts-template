import React, { ReactNode, useEffect } from 'react';
import AppComponent from './AppComponent';

export default function Home(): ReactNode {
  const calculateThis = (x: number): number => {
    return x ** 2;
  };

  useEffect(() => {
    calculateThis(2);
  }, []);

  return <AppComponent />;
}
