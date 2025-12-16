import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Graziela Portfolio",
  description: "Portfolio profissional de Graziela",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
