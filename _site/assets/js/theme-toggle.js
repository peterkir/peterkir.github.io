(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('theme-toggle-btn');
    if (!toggleButton) return;

    var colorSchemes = ['light', 'dark'];
    var currentSchemeIndex = 0;
    var savedScheme = localStorage.getItem('jtd-theme') || (window.jtd && jtd.getTheme && jtd.getTheme());
    var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedScheme && colorSchemes.indexOf(savedScheme) !== -1) {
      currentSchemeIndex = colorSchemes.indexOf(savedScheme);
    } else if (systemPrefersDark) {
      currentSchemeIndex = 1;
    }

    function updateButton(scheme) {
      toggleButton.setAttribute('title', scheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      toggleButton.setAttribute('aria-pressed', scheme === 'dark' ? 'true' : 'false');
    }

    function applyColorScheme(scheme, persist) {
      if (window.jtd && typeof window.jtd.setTheme === 'function') {
        window.jtd.setTheme(scheme);
      } else {
        document.documentElement.setAttribute('data-theme', scheme);
      }
      document.documentElement.setAttribute('data-theme', scheme);
      if (persist) {
        localStorage.setItem('jtd-theme', scheme);
      }
      updateButton(scheme);
    }

    applyColorScheme(colorSchemes[currentSchemeIndex], false);

    toggleButton.addEventListener('click', function(e) {
      e.preventDefault();
      currentSchemeIndex = (currentSchemeIndex + 1) % colorSchemes.length;
      applyColorScheme(colorSchemes[currentSchemeIndex], true);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('jtd-theme')) {
        currentSchemeIndex = e.matches ? 1 : 0;
        applyColorScheme(colorSchemes[currentSchemeIndex], false);
      }
    });
  });
})();
