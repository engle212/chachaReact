import "./globals.css";

export const metadata = {
  title: "ChaCha",
  description: "A universal media platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
