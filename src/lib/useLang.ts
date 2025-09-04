"use client"

import { useEffect, useState } from "react";

export function useCurrentLang() {
  const [currentLang, setCurrentLang] = useState('');

  useEffect(() => {
    if (typeof document !== 'undefined' && document.documentElement) {
      setCurrentLang(document.documentElement.lang);
    }
  }, []);

  return currentLang;
}
