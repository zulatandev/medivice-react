import React, { PropsWithChildren } from 'react';

import { DoctorProvider } from "./doctorContext";

function AppProvider({ children }: PropsWithChildren) {
  return (
    <DoctorProvider>
      {children}
    </DoctorProvider>
  );
}

export default AppProvider;
