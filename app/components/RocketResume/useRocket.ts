"use client";

import { useCallback, useState } from "react";

export default function useRocket() {
  const [launching, setLaunching] = useState(false);
  const [explode, setExplode] = useState(false);

  const launch = useCallback(() => {
    if (launching) return;

    setLaunching(true);
    setExplode(false);

    // Show explosion
    const explosionTimer = setTimeout(() => {
      setExplode(true);
    }, 1700);

    // Download resume
    const downloadTimer = setTimeout(() => {
      const link = document.createElement("a");

      link.href = "/Shamil_K_CV.pdf";
      link.download = "Shamil_K_Resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1850);

    // Hide explosion
    const hideExplosionTimer = setTimeout(() => {
      setExplode(false);
    }, 2400);

    // Reset animation
    const resetTimer = setTimeout(() => {
      setLaunching(false);
    }, 2600);

    return () => {
      clearTimeout(explosionTimer);
      clearTimeout(downloadTimer);
      clearTimeout(hideExplosionTimer);
      clearTimeout(resetTimer);
    };
  }, [launching]);

  return {
    launching,
    explode,
    launch,
  };
}