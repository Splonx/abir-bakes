import '../styles/globals.css';
import { siteConfig } from '../lib/siteConfig';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="bg-cream text-chocolate antialiased">
        {children}
      </body>
    </html>
  );
}
