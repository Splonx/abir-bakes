import { experienceSteps } from '../lib/content';

export default function About() {
  return (
    <section id="experience" className="section-pad bg-ivory">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Approche</p>
            <h2 className="section-heading mt-4">Une creation pensee comme un objet de detail.</h2>
          </div>
          <p className="body-copy max-w-xl lg:ml-auto">
            Abir Bakes travaille la texture, la couleur et la finition avec une intention claire: une piece juste, lisible, memorisable.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {experienceSteps.map((step) => (
            <article key={step.label} className="soft-panel p-5 sm:p-6">
              <p className="editorial text-4xl font-bold text-bronze">{step.label}</p>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-charcoal/68">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
