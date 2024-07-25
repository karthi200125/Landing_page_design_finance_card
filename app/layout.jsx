import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./animations/CustomCursor";
import SmoothScroll from "./animations/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capo Card",
  description: "Streamlining Your financial journey online",
  icons: [
    {
      url: '/logo.png',
      href: '/logo.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ fontFamily: 'gatte' }} >
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
