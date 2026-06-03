'use client';

import { useMemo, useState } from 'react';
import { siteConfig } from '../lib/siteConfig';

const occasions = ['Signature', 'Ceremonie', 'Reception', 'Maison'];
const portions = [
  { label: '8 parts', price: 420 },
  { label: '16 parts', price: 680 },
  { label: '30 parts', price: 1120 }
];
const finishes = [
  { label: 'Pure', price: 120 },
  { label: 'Botanique', price: 260 },
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
    `Bonjour Abir Bakes, je souhaite une proposition pour: ${occasion}, ${portions[portionIndex].label}, finition ${finishes[finishIndex].label}. Budget indicatif ${estimate} MAD.`
  );

  return (
    <section id="commande" className="section-pad bg-ivory/92 backdrop-blur-[2px]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">Commande</p>
            <h2 className="section-heading mt-4">Quelques choix pour ouvrir la creation.</h2>
            <p className="body-copy mt-5 max-w-md">
              Ce premier brief donne le cadre. Abir affine ensuite les saveurs, les proportions et les details selon votre moment.
            </p>
          </div>

          <div className="soft-panel overflow-hidden">
            <div className="bg-[linear-gradient(135deg,#F8F3F4,#EEE3D4_58%,rgba(163,51,77,0.18))] p-5 text-cocoa sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Progression</p>
                  <p className="mt-2 text-sm text-cocoa/66">Estimation indicative avant echange</p>
                </div>
                <p className="editorial text-4xl font-bold text-primary">{estimate} MAD</p>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {['Moment', 'Format', 'Finition'].map((step) => (
                  <div key={step} className="h-1 rounded-full bg-primary" aria-label={step} />
                ))}
              </div>
            </div>

            <div className="space-y-8 p-5 sm:p-7">
              <ChoiceGroup title="Moment" items={occasions} activeItem={occasion} onSelect={setOccasion} />
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
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">A glisser dans WhatsApp</p>
                <p className="mt-3 text-sm leading-7 text-charcoal/72">
                  Date, lieu, inspiration visuelle, inscription souhaitee et contraintes de remise.
                </p>
              </div>

              <a
                href={`${siteConfig.whatsapp}?text=${message}`}
                target="_blank"
                rel="noreferrer"
                className="premium-button w-full bg-primary text-warm"
              >
                Envoyer ma demande
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
                  ? 'border-primary bg-primary text-warm shadow-[0_12px_32px_rgba(128,0,32,0.16)]'
                  : 'border-cocoa/10 bg-warm text-charcoal/72 hover:border-primaryLight'
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
