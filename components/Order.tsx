'use client';

import { useMemo, useState } from 'react';
import { siteConfig } from '../lib/siteConfig';

const occasions = ['Celebration', 'Ceremony', 'Reception', 'Maison'];
const portions = [
  { label: '8 parts', price: 420 },
  { label: '16 parts', price: 680 },
  { label: '30 parts', price: 1120 }
];
const finishes = [
  { label: 'Pure', price: 120 },
  { label: 'Botanical', price: 260 },
  { label: 'Signature', price: 420 }
];

export default function Order() {
  const [occasion, setOccasion] = useState(occasions[0]);
  const [portionIndex, setPortionIndex] = useState(1);
  const [finishIndex, setFinishIndex] = useState(0);

  const estimate = useMemo(() => {
    return portions[portionIndex].price + finishes[finishIndex].price;
  }, [finishIndex, portionIndex]);

  const message = encodeURIComponent(
    `Bonjour Abir Bakes, je veux un devis pour: ${occasion}, ${portions[portionIndex].label}, finition ${finishes[finishIndex].label}. Budget indicatif ${estimate} MAD.`
  );

  return (
    <section id="commande" className="section-pad bg-ivory/92 backdrop-blur-[2px]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">Devis</p>
            <h2 className="section-heading mt-4">Un brief clair, une piece juste.</h2>
            <p className="body-copy mt-5 max-w-md">
              Le parcours reste volontairement simple: contexte, format, finition. Le reste se precise avec l atelier.
            </p>
          </div>

          <div className="soft-panel overflow-hidden">
            <div className="bg-[linear-gradient(135deg,#EEE3D4,#D8C2B3_58%,rgba(197,165,107,0.52))] p-5 text-cocoa sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">Progression</p>
                  <p className="mt-2 text-sm text-cocoa/66">Brief rapide pret a envoyer</p>
                </div>
                <p className="editorial text-4xl font-bold text-gold">{estimate} MAD</p>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {['Evenement', 'Format', 'Finition'].map((step) => (
                  <div key={step} className="h-1 rounded-full bg-gold" aria-label={step} />
                ))}
              </div>
            </div>

            <div className="space-y-8 p-5 sm:p-7">
              <ChoiceGroup title="Evenement" items={occasions} activeItem={occasion} onSelect={setOccasion} />
              <ChoiceGroup
                title="Portions"
                items={portions.map((portion) => portion.label)}
                activeItem={portions[portionIndex].label}
                onSelect={(item) => setPortionIndex(portions.findIndex((portion) => portion.label === item))}
              />
              <ChoiceGroup
                title="Finition"
                items={finishes.map((finish) => finish.label)}
                activeItem={finishes[finishIndex].label}
                onSelect={(item) => setFinishIndex(finishes.findIndex((finish) => finish.label === item))}
              />

              <div className="rounded-[1.25rem] border border-cocoa/10 bg-cashmere/70 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-bronze">A ajouter dans WhatsApp</p>
                <p className="mt-3 text-sm leading-7 text-charcoal/72">
                  Date, lieu, reference visuelle, inscription souhaitee et contraintes de remise.
                </p>
              </div>

              <a
                href={`${siteConfig.whatsapp}?text=${message}`}
                target="_blank"
                rel="noreferrer"
                className="premium-button w-full bg-gold text-cocoa"
              >
                Envoyer le brief
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChoiceGroup({
  title,
  items,
  activeItem,
  onSelect
}: {
  title: string;
  items: string[];
  activeItem: string;
  onSelect: (item: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.15em] text-charcoal/52">{title}</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {items.map((item) => {
          const isActive = activeItem === item;
          return (
            <button
              key={item}
              type="button"
              onClick={() => onSelect(item)}
              className={`min-h-[58px] rounded-[1.15rem] border px-4 py-3 text-left text-sm font-extrabold transition ${
                isActive
                  ? 'border-gold bg-gold/70 text-cocoa shadow-[0_12px_32px_rgba(185,159,130,0.2)]'
                  : 'border-cocoa/10 bg-warm text-charcoal/72 hover:border-bronze'
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
