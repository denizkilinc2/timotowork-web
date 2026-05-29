import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timo to Work International B.V.",
  description: "Uluslararası İş Gücü ve Ticaret Çözümleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      {/* 
        GÖVDE DEKORASYONU (image_1c909e.jpg görselindeki beyaz boşlukları sıfırlayan kritik ayar):
        margin: 0 ve padding: 0 ile tarayıcı kenar çizgilerini yok ediyoruz.
        backgroundColor: '#0b0f19' ile sayfa yüklenirken beyaz parlamayı engelliyoruz.
      */}
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0b0f19' }}>
        {children}
      </body>
    </html>
  );
}
