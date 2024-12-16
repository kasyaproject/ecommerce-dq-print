import { Inter } from "next/font/google";
import "./ui/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DQ Printing Admin Dashboard",
  description: "E-Commerce DQ Printing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/astronaut.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
