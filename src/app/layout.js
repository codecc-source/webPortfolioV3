import "./globals.css";
import "./retro.css";

export const metadata = {
  title: "Carlito Tingson Jr. | CTJR_OSv3",
  description:
    "Software Engineer — Frontend / WordPress / Performance / Maintenance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
