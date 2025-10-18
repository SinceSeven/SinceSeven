import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SinceSeven - Модерни уебсайтове и онлайн маркетинг",
  description: "Създаваме модерни уебсайтове и предлагаме онлайн маркетинг услуги за растежа на вашия бизнес.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
