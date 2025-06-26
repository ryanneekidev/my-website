import "./globals.css";
import { inter } from "./ui/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-screen w-screen bg-[url(../../public/Gradient.png)] grid grid-cols-[1fr] grid-rows-[4rem_1fr]`}>
        <div className="row-start-1 row-end-2 col-start-1 col-end-2 bg-pink-500 text-white">
          navbar
        </div>
        <div className="row-start-2 row-end-3 col-start-1 col-end-2">
          {children}
        </div>
      </body>
    </html>
  );
}
