import Link from 'next/link';
import { siteConfig } from '../lib/siteConfig';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-ink/88 text-ivory backdrop-blur-xl">
      <div className="site-shell">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="min-w-0" aria-label="Abir Bakes accueil">
            <span className="block truncate font-elegant text-[1.72rem] font-bold leading-none">Abir Bakes</span>
            <span className="mt-1 block text-[0.55rem] font-extrabold uppercase tracking-[0.18em] text-champagne">
              Luxury bakery
            </span>
          </Link>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="premium-button min-h-[44px] shrink-0 bg-champagne px-4 text-xs text-ink sm:min-h-[50px] sm:px-5 sm:text-sm"
          >
            WhatsApp
          </a>
        </div>

        <nav className="-mx-3 flex gap-2 overflow-x-auto px-3 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-ivory/12 px-3 py-2 text-xs font-bold text-ivory/72 transition hover:border-champagne/60 hover:text-champagne"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
