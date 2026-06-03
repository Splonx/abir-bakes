import Image from 'next/image';
import { siteConfig } from '../lib/siteConfig';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-cashmere pt-28 text-cocoa">
      <Image
        src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=1800&q=90&auto=format&fit=crop"
        alt="Piece patissiere signature Abir Bakes avec finition creme et details subtils"
        fill
        priority
        quality={68}
        sizes="100vw"
        className="object-cover object-[50%_20%] image-treatment sm:object-[58%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,243,244,0.04)_0%,rgba(248,243,244,0.18)_38%,rgba(248,243,244,0.56)_76%,rgba(248,243,244,0.72)_100%)] sm:bg-[linear-gradient(90deg,rgba(248,243,244,0.9),rgba(238,227,212,0.62)_48%,rgba(163,51,77,0.08))]" />

      <div className="site-shell relative flex min-h-[calc(100svh-7rem)] flex-col justify-end pb-8 sm:pb-12 lg:pb-16">
        <div className="hero-copy -mx-2 max-w-3xl rounded-[1.35rem] bg-warm/68 p-4 shadow-[0_18px_54px_rgba(74,52,40,0.1)] backdrop-blur-[6px] sm:mx-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0">
          <p className="eyebrow mb-4 text-primary">Maison patissiere contemporaine</p>
          <h1 className="display-title text-cocoa">Abir Bakes</h1>
          <p className="mt-5 max-w-[31rem] text-[1.05rem] leading-7 text-cocoa/78 sm:text-xl sm:leading-8">
            Des pieces sur mesure aux textures fines, pensees pour les celebrations qui meritent une signature douce, precise et memorable.
          </p>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="premium-button bg-primary text-warm">
              Commander une piece
            </a>
            <a href="#creations" className="premium-button border border-primary/18 bg-primarySoft/72 text-primary">
              Decouvrir les creations
            </a>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-3 border-y border-cocoa/14 text-center sm:max-w-xl sm:text-left">
          {[
            ['48h min.', 'brief conseille'],
            ['Sur mesure', 'dessin & saveur'],
            ['Maroc', 'remise coordonnee']
          ].map(([value, label]) => (
            <div key={label} className="px-2 py-4 first:pl-0 last:pr-0">
              <p className="editorial text-2xl font-bold leading-none text-primary sm:text-3xl">{value}</p>
              <p className="mt-2 text-[0.63rem] font-extrabold uppercase tracking-[0.14em] text-taupe">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
