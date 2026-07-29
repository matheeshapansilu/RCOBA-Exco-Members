'use client';

import React, { useEffect } from 'react';

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Prevent Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevent Copy/Cut/Paste
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // Prevent Keyboard Shortcuts (Ctrl+C, Ctrl+P, Ctrl+S, F12, etc.)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow normal typing in input fields (like the search bar or passcode)
      if (document.activeElement?.tagName === 'INPUT') {
        return;
      }

      if (
        (e.ctrlKey || e.metaKey) && 
        ['c', 'v', 'x', 'p', 's', 'u'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }

      // Block F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCopy);
    document.addEventListener('paste', handleCopy);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCopy);
      document.removeEventListener('paste', handleCopy);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <>{children}</>;
}
