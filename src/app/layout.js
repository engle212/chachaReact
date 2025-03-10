import "./globals.css";
import { Roboto } from "next/font/google"

export const metadata = {
  title: "ChaCha",
  description: "A universal media platform",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
