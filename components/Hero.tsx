'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '48h+', label: 'brief recommande' },
  { value: '6', label: 'univers evenementiels' },
  { value: 'ERP', label: 'architecture future' }
];

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-ink text-ivory">
      <img
        src="https://images.unsplash.com/photo-1541781550486-81b7a232857c?w=1800&q=90&auto=format&fit=crop"
        alt="Gateau premium personnalise Abir Bakes"
        className="absolute inset-0 h-full w-full object-cover image-treatment"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,20,17,0.92),rgba(23,20,17,0.6)_45%,rgba(23,20,17,0.18))]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ivory to-transparent" />

      <div className="site-shell relative flex min-h-[92svh] items-end pb-16 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-5">Patisserie personnalisee premium au Maroc</p>
          <h1 className="display-title text-[4.4rem] text-ivory sm:text-[6rem] lg:text-[8.8rem]">
            Abir Bakes
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/82 sm:text-xl">
            Des gateaux sur mesure, des tables sucrees et une future plateforme evenementielle concue pour transformer chaque commande en souvenir partageable.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#designer"
              className="premium-button bg-champagne text-ink shadow-[0_18px_44px_rgba(216,191,135,0.24)]"
            >
              Imaginer mon gateau
            </a>
            <a href="#creations" className="premium-button border border-ivory/42 text-ivory">
              Explorer les creations
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-ivory/18">
            {stats.map((stat) => (
              <div key={stat.label} className="py-4 pr-5">
                <div className="font-elegant text-3xl font-bold text-champagne">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ivory/58">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
