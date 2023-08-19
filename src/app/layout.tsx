import "./globals.css";

import localFont from "next/font/local";

const Satoshi = localFont({
  src: "./font/Satoshi-Variable.woff2",
});

export const metadata = {
  title: "Dekrú - Sitios web y aplicaciones para tu negocio",
  description: "",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* favicon */}

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />

      <body className={Satoshi.className}>{children}</body>
    </html>
  );
}
