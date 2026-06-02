import { siteConfig } from '../lib/siteConfig';

export default function Footer() {
  return (
    <>
      <footer className="bg-ink pb-28 pt-10 text-ivory sm:pb-10">
        <div className="site-shell">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="editorial text-4xl font-bold leading-none">{siteConfig.name}</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-ivory/62">
                Pieces sur mesure, textures fines et compositions preparees sur reservation.
              </p>
            </div>
            <div className="grid gap-3 text-sm font-bold text-ivory/72 sm:text-right">
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">
                Instagram
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="hover:text-gold">
                WhatsApp 0659573804
              </a>
              <span>Maroc · Sur reservation</span>
            </div>
          </div>
          <div className="mt-8 border-t border-ivory/12 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-ivory/42">
            © {new Date().getFullYear()} {siteConfig.owner}
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-ivory/94 p-3 shadow-[0_-18px_50px_rgba(21,18,15,0.14)] backdrop-blur-xl sm:hidden">
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <a href="#creations" className="premium-button min-h-[48px] border border-ink/12 text-ink">
            Creations
          </a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="premium-button min-h-[48px] bg-cocoa px-5 text-ivory">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
