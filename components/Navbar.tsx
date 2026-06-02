import Link from 'next/link';
import { siteConfig } from '../lib/siteConfig';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/78 text-ivory backdrop-blur-xl">
      <nav className="site-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-baseline gap-2" aria-label="Abir Bakes accueil">
          <span className="font-elegant text-2xl font-bold leading-none">{siteConfig.name}</span>
          <span className="hidden text-[0.66rem] font-bold uppercase tracking-[0.22em] text-champagne sm:inline">
            {siteConfig.slogan}
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ivory/72 transition hover:text-champagne"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-semibold text-ivory/72 transition hover:text-champagne sm:inline"
          >
            Instagram
          </a>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="premium-button border border-champagne/70 bg-champagne text-ink"
          >
            Demander un devis
          </a>
        </div>
      </nav>
    </header>
  );
}
