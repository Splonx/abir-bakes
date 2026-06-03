import { siteConfig } from '../lib/siteConfig';

export default function Footer() {
  return (
    <>
      <footer className="bg-[linear-gradient(180deg,#D8C2B3,#EEE3D4)] pb-28 pt-10 text-cocoa sm:pb-10">
        <div className="site-shell">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="editorial text-4xl font-bold leading-none">{siteConfig.name}</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-cocoa/66">
                Pieces sur mesure, textures fines et compositions preparees sur reservation.
              </p>
            </div>
            <div className="grid gap-3 text-sm font-bold text-cocoa/72 sm:text-right">
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">
                Instagram
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="hover:text-primary">
                WhatsApp
              </a>
              <span>Maroc · Sur reservation</span>
            </div>
          </div>
          <div className="mt-8 border-t border-cocoa/12 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-cocoa/44">
            © {new Date().getFullYear()} {siteConfig.owner}
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-cocoa/10 bg-warm/94 p-3 shadow-[0_-18px_50px_rgba(185,159,130,0.18)] backdrop-blur-xl sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a href="#creations" className="premium-button min-h-[48px] min-w-0 border border-cocoa/12 px-3 text-cocoa">
            Creations
          </a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="premium-button min-h-[48px] min-w-0 bg-primary px-3 text-warm">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
