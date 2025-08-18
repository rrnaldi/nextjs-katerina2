import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";



const poppins = Poppins({
  weight: ["400", "600","700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Katerina",
    default: "Katerina"
  },
  description: "Healthy Foods, Asian Foods, Instant Foods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body
      
      >
        {children}
      </body>
    </html>
  );
}
