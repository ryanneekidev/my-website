import "./globals.css";
import { inter } from "./ui/fonts";
import Navbar from "./ui/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[url(../../public/Gradient.png)] bg-fixed`}>
        <div className="h-fit grid grid-cols-[1fr] grid-rows-[5rem_1fr]">
          <div className="row-start-1 row-end-2 col-start-1 col-end-2 flex justify-center items-center px-[0.5rem]">
            <Navbar />
          </div>
          <div className="row-start-2 row-end-3 col-start-1 col-end-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
