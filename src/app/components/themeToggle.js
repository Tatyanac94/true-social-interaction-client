import { useTheme } from '../themeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="absolute top-4 right-4 p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
