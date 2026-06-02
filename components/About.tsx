import { experienceSteps } from '../lib/content';

export default function About() {
  return (
    <section id="experience" className="bg-ivory py-20 sm:py-28">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Vision produit</p>
            <h2 className="section-heading mt-4 text-ink">
              D une patisserie artisanale a une plateforme d experiences.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-charcoal/78">
            <p>
              Abir Bakes ne doit pas etre pense comme une boutique de gateaux. Le produit doit aider un client a preparer un moment: anniversaire, mariage, baby shower, fiancailles, corporate ou table privee.
            </p>
            <p>
              La nouvelle structure pose les fondations: decouverte des creations, personnalisation, devis, suivi, production interne, CRM et extension marketplace pour plusieurs patissiers premium au Maroc.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {experienceSteps.map((step) => (
            <article key={step.label} className="border-t border-ink/16 pt-6">
              <span className="font-elegant text-4xl font-bold text-gold">{step.label}</span>
              <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 leading-7 text-charcoal/70">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
