import Link from 'next/link';
import "../globals.css";
import { ThemeProvider } from '../app/themeContext';

export const metadata = {
  title: "True Social Interaction",
  description: "Social Media App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <header className="flex flex-col items-center p-4 bg-gray-200">
  <h1 className="text-xl font-bold text-black mb-2">True Social Interaction App</h1>
  <nav className="flex space-x-4">
    <Link href="/" className="text-blue-500 hover:underline">Home</Link>
    <Link href="/about" className="text-blue-500 hover:underline">About</Link>
  </nav>
</header>

          <main className="p-4">{children}</main>
          <footer className="text-center p-4 text-blue-500">
            <p>&copy; {new Date().getFullYear()} - TC - True Social Interaction - Module 4</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}