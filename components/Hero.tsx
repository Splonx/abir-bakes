import Image from 'next/image';
import { siteConfig } from '../lib/siteConfig';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink pt-28 text-ivory">
      <Image
        src="https://images.unsplash.com/photo-1541781550486-81b7a232857c?w=1800&q=90&auto=format&fit=crop"
        alt="Gateau signature Abir Bakes pour evenement premium"
        fill
        priority
        quality={68}
        sizes="100vw"
        className="object-cover object-[58%_50%] image-treatment"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,18,15,0.38),rgba(21,18,15,0.72)_52%,rgba(21,18,15,0.94))] sm:bg-[linear-gradient(90deg,rgba(21,18,15,0.9),rgba(21,18,15,0.58)_48%,rgba(21,18,15,0.16))]" />

      <div className="site-shell relative flex min-h-[calc(100svh-7rem)] flex-col justify-end pb-8 sm:pb-12 lg:pb-16">
        <div className="hero-copy max-w-3xl">
          <p className="eyebrow mb-4 text-champagne">Maison de patisserie premium</p>
          <h1 className="display-title text-ivory">Abir Bakes</h1>
          <p className="mt-5 max-w-[31rem] text-[1.05rem] leading-7 text-ivory/82 sm:text-xl sm:leading-8">
            Des gateaux sur mesure pour les moments que l on veut garder.
          </p>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="premium-button bg-champagne text-ink">
              Commander sur WhatsApp
            </a>
            <a href="#creations" className="premium-button border border-ivory/34 bg-ivory/5 text-ivory">
              Voir les creations
            </a>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-3 border-y border-ivory/16 text-center sm:max-w-xl sm:text-left">
          {[
            ['48h', 'brief'],
            ['Sur mesure', 'design'],
            ['Maroc', 'livraison']
          ].map(([value, label]) => (
            <div key={label} className="px-2 py-4 first:pl-0 last:pr-0">
              <p className="editorial text-2xl font-bold leading-none text-champagne sm:text-3xl">{value}</p>
              <p className="mt-2 text-[0.63rem] font-extrabold uppercase tracking-[0.14em] text-ivory/58">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
