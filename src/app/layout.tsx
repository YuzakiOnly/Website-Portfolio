import type { Metadata } from "next";
import "./globals.css";
import { Inter, Montserrat, Instrument_Sans, Syne } from "next/font/google";
import Navbar from "@/components/layout/main-navbar";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/smooth-scroll";
import { LanguageProvider } from "@/context/language-context";
import { SplashCursorProvider } from "@/context/splash-cursor-context";
import Footer from "@/components/layout/footer/footer";
import SplashCursor from "@/components/reactbits/SplashCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "M. ARYA ARDIANSYAH — Full Stack Developer",
  description: "Portfolio of M. ARYA ARDIANSYAH, Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${instrumentSans.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <SplashCursorProvider>
              <SmoothScroll />
              <SplashCursor />
              <Navbar />
              <main>{children}</main>
              <Footer />
            </SplashCursorProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
