"use client";

import React from "react";

import Header from "../components/Header";

import "./styles.css";

import SoundEnabledProvider from "../components/SoundEnabledProvider/SoundEnabledProvider";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundEnabledProvider>
          <Header />
        </SoundEnabledProvider>
        {children}
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
