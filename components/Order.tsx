'use client';

import { useMemo, useState } from 'react';
import { siteConfig } from '../lib/siteConfig';

const sizes = [
  { label: 'Mini', portions: '6-8', price: 380 },
  { label: 'Signature', portions: '12-16', price: 620 },
  { label: 'Event', portions: '24-32', price: 980 }
];

const flavors = [
  { label: 'Vanille framboise', price: 0 },
  { label: 'Chocolat noisette', price: 70 },
  { label: 'Citron meringue', price: 90 }
];

const decorations = [
  { label: 'Minimal chic', price: 120 },
  { label: 'Floral premium', price: 240 },
  { label: 'Theme complet', price: 390 }
];

export default function Order() {
  const [sizeIndex, setSizeIndex] = useState(1);
  const [flavorIndex, setFlavorIndex] = useState(0);
  const [decorationIndex, setDecorationIndex] = useState(1);
  const [delivery, setDelivery] = useState(true);

  const estimate = useMemo(() => {
    const deliveryCost = delivery ? 80 : 0;
    return sizes[sizeIndex].price + flavors[flavorIndex].price + decorations[decorationIndex].price + deliveryCost;
  }, [decorationIndex, delivery, flavorIndex, sizeIndex]);

  const whatsappText = encodeURIComponent(
    `Bonjour Abir Bakes, je veux un devis: ${sizes[sizeIndex].label}, ${flavors[flavorIndex].label}, ${decorations[decorationIndex].label}, livraison ${delivery ? 'oui' : 'non'}. Budget estime ${estimate} MAD.`
  );

  return (
    <section id="commande" className="bg-ivory py-20 sm:py-28">
      <div className="site-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Commande personnalisee</p>
          <h2 className="section-heading mt-4 text-ink">Un parcours de devis qui inspire confiance.</h2>
          <p className="mt-6 leading-8 text-charcoal/72">
            Le configurateur pose les bases d un moteur de prix, de production et de suivi commande. Il est pret a etre branche a Prisma, paiements, uploads et automatisations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-line p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 pb-5">
              <div>
                <h3 className="font-elegant text-4xl font-bold text-ink">Cake Configurator</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                  Estimation instantanee
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-charcoal/58">Budget</p>
                <p className="font-elegant text-4xl font-bold text-ink">{estimate} MAD</p>
              </div>
            </div>

            <div className="mt-7 space-y-7">
              <ConfiguratorGroup
                title="Format"
                items={sizes.map((size) => `${size.label} | ${size.portions} parts`)}
                activeIndex={sizeIndex}
                onChange={setSizeIndex}
              />
              <ConfiguratorGroup
                title="Saveur"
                items={flavors.map((flavor) => flavor.label)}
                activeIndex={flavorIndex}
                onChange={setFlavorIndex}
              />
              <ConfiguratorGroup
                title="Decoration"
                items={decorations.map((decoration) => decoration.label)}
                activeIndex={decorationIndex}
                onChange={setDecorationIndex}
              />

              <label className="flex cursor-pointer items-center justify-between gap-4 border border-ink/10 bg-white/52 p-4">
                <span>
                  <span className="block font-bold text-ink">Livraison premium</span>
                  <span className="mt-1 block text-sm text-charcoal/62">Coordination date, adresse et remise controlee.</span>
                </span>
                <input
                  type="checkbox"
                  checked={delivery}
                  onChange={() => setDelivery((value) => !value)}
                  className="h-5 w-5 accent-gold"
                />
              </label>

              <a
                href={`${siteConfig.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="premium-button w-full bg-ink text-ivory"
              >
                Envoyer ce brief
              </a>
            </div>
          </div>

          <div id="designer" className="border border-ink/10 bg-charcoal p-5 text-ivory sm:p-7">
            <p className="eyebrow">AI Cake Designer</p>
            <h3 className="mt-4 font-elegant text-4xl font-bold text-ivory">Decrivez l evenement, recevez une direction creative.</h3>
            <div className="mt-6 bg-ivory p-4 text-ink">
              <p className="text-sm font-semibold text-charcoal/60">Prompt exemple</p>
              <p className="mt-2 leading-7">
                Je veux un gateau pour une fille de 8 ans qui adore les licornes, couleurs pastel, 15 invites, livraison samedi.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ['Theme', 'Licorne couture, nuages en sucre, details perles champagne'],
                ['Palette', 'Ivoire, rose poudre, lavande claire, touche doree'],
                ['Saveurs', 'Vanille framboise ou citron meringue pour un profil frais'],
                ['Budget estime', '720 - 920 MAD selon decoration et livraison']
              ].map(([label, text]) => (
                <div key={label} className="border-t border-ivory/14 pt-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-champagne">{label}</p>
                  <p className="mt-2 leading-7 text-ivory/76">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConfiguratorGroup({
  title,
  items,
  activeIndex,
  onChange
}: {
  title: string;
  items: string[];
  activeIndex: number;
  onChange: (index: number) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-charcoal/58">{title}</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={item}
              type="button"
              onClick={() => onChange(index)}
              className={`min-h-[54px] border px-4 py-3 text-left text-sm font-bold transition ${
                isActive
                  ? 'border-ink bg-ink text-ivory'
                  : 'border-ink/10 bg-white/58 text-charcoal hover:border-gold'
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
