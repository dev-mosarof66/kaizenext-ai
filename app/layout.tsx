import type { Metadata } from "next";
import { Poppins, Inter,  Geist, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VoiceAssistant } from "@/components/voice-assistant";
import { defaultMetadata, defaultViewport } from "@/lib/metadata";

export const viewport = defaultViewport;

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});


const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  style: "italic",
})

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable, inter.variable, instrumentSerif.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
        <div className="w-full h-full relative">
          <Navbar />
          {children}
          <Footer />
          <VoiceAssistant />
        </div>
      </body>
    </html>
  );
}
