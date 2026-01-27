import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["300","400","500","600","700","800"] });

export const metadata = { title: "Giriraj Patel | Portfolio", description: "Personal portfolio" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-slate-950 text-slate-50`}>{children}</body>
    </html>
  );
}
