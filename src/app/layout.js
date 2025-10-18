import "./globals.css";

export const metadata = {
  title: "Retro OS Portfolio",
  description: "A pixel-styled portfolio with retro OS aesthetics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
