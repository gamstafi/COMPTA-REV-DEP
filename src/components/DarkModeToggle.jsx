import React, { useState, useEffect } from 'react';

    function DarkModeToggle() {
      const [darkMode, setDarkMode] = useState(false);

      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [darkMode]);

      return (
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
      );
    }

    export default DarkModeToggle;
