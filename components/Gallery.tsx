'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { categories, featuredCreations } from '../lib/content';
import { siteConfig } from '../lib/siteConfig';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const creations = useMemo(() => {
    if (activeCategory === 'Tous') {
      return featuredCreations;
    }

    return featuredCreations.filter((creation) => creation.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="creations" className="section-pad bg-cream">
      <div className="site-shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Editions</p>
            <h2 className="section-heading mt-4">La piece avant tout.</h2>
          </div>
          <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="premium-button hidden bg-gold text-cocoa sm:inline-flex">
            Demander un devis
          </a>
        </div>

        <div className="-mx-3 mt-8 flex gap-2 overflow-x-auto px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
                  isActive
                    ? 'border-gold bg-gold/70 text-cocoa'
                    : 'border-ink/12 bg-warm text-charcoal/70 hover:border-bronze'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {creations.map((creation, index) => (
            <article key={creation.title} className="group overflow-hidden bg-warm shadow-[0_18px_60px_rgba(185,159,130,0.16)]">
              <div className="relative aspect-[0.78] overflow-hidden sm:aspect-[1.08]">
                <Image
                  src={creation.image}
                  alt={creation.alt}
                  fill
                  loading={index === 0 ? 'eager' : 'lazy'}
                  quality={72}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover image-treatment transition duration-500 group-hover:scale-[1.025]"
                />
                <div className="absolute left-4 top-4 rounded-full bg-warm/92 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-cocoa">
                  {creation.category}
                </div>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <h3 className="editorial text-4xl font-bold leading-none">{creation.title}</h3>
                  <p className="mt-3 text-sm font-bold text-bronze">{creation.price}</p>
                </div>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button min-h-[46px] border border-cocoa/16 text-cocoa"
                >
                  Devis
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
