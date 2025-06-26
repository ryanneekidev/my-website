import "./globals.css";
import { inter } from "./ui/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-screen w-screen bg-[url(../../public/Gradient.png)]`}>
        {children}
      </body>
    </html>
  );
}
