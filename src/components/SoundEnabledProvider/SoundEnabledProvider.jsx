"use client";

import React from "react";

const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);
  return (
    <SoundEnabledContext value={{ isSoundEnabled, setIsSoundEnabled }}>
      {children}
    </SoundEnabledContext>
  );
}

export default SoundEnabledProvider;
