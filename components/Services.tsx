import { eventTypes, platformModules } from '../lib/content';

export default function Services() {
  return (
    <section className="bg-ink py-20 text-ivory sm:py-28">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Ecosysteme evenementiel</p>
            <h2 className="section-heading mt-4 text-ivory">La commande devient un moment pilote.</h2>
            <p className="mt-6 max-w-xl leading-8 text-ivory/70">
              Le front office doit aider le client a penser l evenement complet, pendant que l architecture prepare deja production, CRM, analytics et automatisations.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {eventTypes.map((event) => (
                <span
                  key={event}
                  className="rounded-full border border-ivory/18 px-4 py-2 text-sm font-semibold text-ivory/78"
                >
                  {event}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {platformModules.map((module) => (
              <article key={module.title} className="border border-ivory/12 bg-ivory/[0.04] p-6">
                <h3 className="font-elegant text-3xl font-bold text-champagne">{module.title}</h3>
                <p className="mt-4 leading-7 text-ivory/68">{module.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
