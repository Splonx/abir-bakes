'use client';

import { motion } from 'framer-motion';
import { featuredCreations } from '../lib/content';

export default function Gallery() {
  return (
    <section id="creations" className="bg-porcelain py-20 sm:py-28">
      <div className="site-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Creations signature</p>
            <h2 className="section-heading mt-4 text-ink">Un catalogue pense par evenement.</h2>
          </div>
          <p className="max-w-md leading-7 text-charcoal/70">
            Chaque creation devient une entree vers un parcours: inspiration, brief, prix estime, production et souvenir partageable.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featuredCreations.map((creation, index) => (
            <motion.article
              key={creation.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group overflow-hidden border border-ink/10 bg-ivory"
            >
              <div className="aspect-[1.25] overflow-hidden">
                <img
                  src={creation.image}
                  alt={creation.title}
                  className="h-full w-full object-cover image-treatment transition duration-500 group-hover:scale-[1.035]"
                />
              </div>
              <div className="flex items-end justify-between gap-4 p-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{creation.event}</p>
                  <h3 className="mt-2 font-elegant text-3xl font-bold text-ink">{creation.title}</h3>
                </div>
                <p className="text-right text-sm font-semibold text-charcoal/72">{creation.price}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
