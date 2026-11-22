/* Shared palette values drive both the page tokens and the configuration swatches. */
window.portfolioPreferences = (() => {
  const themes = [
    ['jellybeans', 'Jellybeans', 'dark', '#151515', '#e8e8d3', '#1c1c1c', '#252334', '#3b3b3b', '#adadad', '#597bc5', '#71b9f8', '#d8ad4c', '#a037b0', '#cf6a4c', '#99ad6a'],
    ['horizon', 'Horizon', 'dark', '#1c1e26', '#d5d8da', '#232530', '#2e303e', '#454856', '#a7a9b4', '#e95678', '#25b0bc', '#fab795', '#b877db', '#f09383', '#29d398'],
    ['everforest', 'Everforest', 'dark', '#272e33', '#d3c6aa', '#2e383c', '#374247', '#4f585e', '#a6a195', '#a7c080', '#7fbbb3', '#dbbc7f', '#d699b6', '#e67e80', '#a7c080'],
    ['ayu', 'Ayu Dark', 'dark', '#0b0e14', '#bfbdb6', '#11151c', '#1b202b', '#313947', '#a8a6a0', '#e6b450', '#59c2ff', '#ff8f40', '#d2a6ff', '#f07178', '#aad94c'],
    ['dracula', 'Dracula', 'dark', '#282a36', '#f8f8f2', '#303341', '#3b3d4e', '#575968', '#b8b8c2', '#bd93f9', '#8be9fd', '#f1fa8c', '#ff79c6', '#ff5555', '#50fa7b'],
    ['nord', 'Nord', 'dark', '#2e3440', '#eceff4', '#353d4a', '#434c5e', '#556175', '#b6c0d0', '#88c0d0', '#8fbcbb', '#ebcb8b', '#b48ead', '#bf616a', '#a3be8c'],
    ['gruvbox', 'Gruvbox Dark', 'dark', '#282828', '#ebdbb2', '#32302f', '#3c3836', '#504945', '#bdae93', '#83a598', '#8ec07c', '#fabd2f', '#d3869b', '#fb4934', '#b8bb26'],
    ['solarized', 'Solarized Dark', 'dark', '#002b36', '#eee8d5', '#073642', '#174653', '#4b6770', '#a9b5b5', '#268bd2', '#2aa198', '#b58900', '#6c71c4', '#dc322f', '#859900'],
    ['tokyo', 'Tokyo Night', 'dark', '#1a1b26', '#c0caf5', '#202231', '#292e42', '#414868', '#a9b1d6', '#7aa2f7', '#7dcfff', '#e0af68', '#bb9af7', '#f7768e', '#9ece6a'],
    ['catppuccin', 'Catppuccin Mocha', 'dark', '#1e1e2e', '#cdd6f4', '#252538', '#313244', '#45475a', '#bac2de', '#89b4fa', '#89dceb', '#f9e2af', '#cba6f7', '#f38ba8', '#a6e3a1'],
    ['jellybeans-light', 'Jellybeans Light', 'light', '#f6f4ef', '#222630', '#ffffff', '#eceaf1', '#c9cbd3', '#5d6472', '#4163a8', '#1c689f', '#94650d', '#85519c', '#ae4a31', '#527032'],
    ['solarized-light', 'Solarized Light', 'light', '#fdf6e3', '#26343b', '#fffaf0', '#eee6d5', '#c6c4b8', '#596e75', '#226aa5', '#167b75', '#8b6300', '#6854a3', '#b43630', '#5c7100'],
    ['nord-light', 'Nord Light', 'light', '#eceff4', '#2e3440', '#ffffff', '#e3e8ef', '#c1cad6', '#5b6574', '#4b7197', '#2b7677', '#825c17', '#825f83', '#a23f4c', '#4d6d49'],
    ['catppuccin-latte', 'Catppuccin Latte', 'light', '#eff1f5', '#303446', '#ffffff', '#e5e7ef', '#bcc0cc', '#626880', '#1e66f5', '#047b88', '#895900', '#8839a0', '#d20f39', '#327b39']
  ].map(([id, name, mode, ...colors]) => ({ id, name, mode, colors }));
  const fonts = [ ['geist', 'Geist Mono'], ['inter', 'Inter'], ['ibm', 'IBM Plex Mono'], ['source', 'Source Sans 3'] ];
  const sizes = ['90', '100', '110', '120', '130'];
  const defaults = { theme: 'jellybeans', font: 'geist', size: '100' };
  const keys = { theme: 'fawwas-theme', font: 'fawwas-font', size: 'fawwas-font-size' };
  const state = { ...defaults };
  let storageAvailable = true;
  try {
    for (const key of Object.keys(keys)) {
      const saved = localStorage.getItem(keys[key]);
      const aliases = { 'ayu-dark': 'ayu', 'gruvbox-dark': 'gruvbox', 'solarized-dark': 'solarized', 'tokyo-night': 'tokyo', 'catppuccin-mocha': 'catppuccin' };
      const stored = key === 'theme' ? aliases[saved] || saved : saved;
      const valid = key === 'theme' ? themes.some(t => t.id === stored) : key === 'font' ? fonts.some(f => f[0] === stored) : sizes.includes(stored);
      if (valid) state[key] = stored;
    }
  } catch { storageAvailable = false; }
  const root = document.documentElement;
  function apply() {
    const theme = themes.find(t => t.id === state.theme);
    root.dataset.theme = theme.id;
    root.dataset.font = state.font;
    root.dataset.fontSize = state.size;
    root.style.colorScheme = theme.mode;
    const tokens = ['bg', 'fg', 'surface', 'raised', 'border', 'muted', 'accent', 'cyan', 'yellow', 'violet', 'red', 'green'];
    tokens.forEach((token, i) => root.style.setProperty(`--${token}`, theme.colors[i]));
    document.querySelector('meta[name="theme-color"]').content = theme.colors[0];
  }
  function set(key, value) {
    const valid = key === 'theme' ? themes.some(t => t.id === value) : key === 'font' ? fonts.some(f => f[0] === value) : key === 'size' && sizes.includes(value);
    if (!valid) return;
    state[key] = value;
    try { localStorage.setItem(keys[key], value); } catch { storageAvailable = false; }
    apply();
  }
  apply();
  return { themes, fonts, sizes, defaults, state, set, get storageAvailable() { return storageAvailable; } };
})();
