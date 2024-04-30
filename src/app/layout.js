import { Inter } from "next/font/google";
import "./globals.css";
import './base.css'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Presentation website",
  description: "Presentation website",
  icons: {
    icon: './../../public/favicon/favicon.ico',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={inter.className}>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
