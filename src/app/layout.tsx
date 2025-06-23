import "./globals.css";
import Navbar from "../components/Navbar";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Meta tag para verificación de Google Search Console */}
        <meta
          name="google-site-verification"
          content="iC8bIyikOgscHNfeBmy3TRyhJZqWFBuAr_eVHJ7MXlk"
        />
      </head>
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
