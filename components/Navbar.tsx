import Link from 'next/link';
import { siteConfig } from '../lib/siteConfig';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cocoa/10 bg-warm/88 text-cocoa shadow-[0_12px_40px_rgba(74,52,40,0.08)] backdrop-blur-xl">
      <div className="site-shell">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="min-w-0" aria-label="Abir Bakes accueil">
            <span className="block truncate font-elegant text-[1.72rem] font-bold leading-none">Abir Bakes</span>
            <span className="mt-1 block text-[0.55rem] font-extrabold uppercase tracking-[0.18em] text-gold">
              Atelier contemporain
            </span>
          </Link>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="premium-button min-h-[44px] shrink-0 bg-gold px-4 text-xs text-ink sm:min-h-[50px] sm:px-5 sm:text-sm"
          >
            WhatsApp
          </a>
        </div>

        <nav className="-mx-3 flex gap-2 overflow-x-auto px-3 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-cocoa/10 bg-ivory/50 px-3 py-2 text-xs font-bold text-taupe transition hover:border-bronze/50 hover:text-cocoa"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
