import { siteConfig } from '../lib/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-ivory">
      <div className="site-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-elegant text-4xl font-bold">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-ivory/62">
            Patisserie personnalisee premium, concue pour devenir la reference digitale des experiences sucrees au Maroc.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-ivory/68">
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-champagne">
            Instagram
          </a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="hover:text-champagne">
            WhatsApp
          </a>
          <span>© {new Date().getFullYear()} {siteConfig.owner}</span>
        </div>
      </div>
    </footer>
  );
}
