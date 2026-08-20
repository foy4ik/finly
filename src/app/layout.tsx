import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://finly.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Finly — управляйте личными финансами осознанно",
    template: "%s · Finly",
  },
  description:
    "Finly помогает понимать свои траты, планировать бюджет и формировать здоровые финансовые привычки. Бюджетирование, аналитика и цели накоплений в одном приложении.",
  keywords: [
    "личные финансы",
    "бюджет",
    "финансовое приложение",
    "учёт расходов",
    "накопления",
    "Finly",
  ],
  authors: [{ name: "Finly" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Finly",
    title: "Finly — управляйте личными финансами осознанно",
    description:
      "Понимайте свои траты, планируйте бюджет и стройте здоровые финансовые привычки вместе с Finly.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Finly — приложение для управления личными финансами",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finly — управляйте личными финансами осознанно",
    description:
      "Понимайте свои траты, планируйте бюджет и стройте здоровые финансовые привычки вместе с Finly.",
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${fraunces.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
