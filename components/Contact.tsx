import { briefFields } from '../lib/content';
import { siteConfig } from '../lib/siteConfig';

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-cream">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="eyebrow">Contact rapide</p>
            <h2 className="section-heading mt-4">Votre date approche?</h2>
            <p className="body-copy mt-5 max-w-lg">
              Envoyez un brief court. Abir affine la creation, le prix et la disponibilite.
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="premium-button bg-ink text-ivory">
                WhatsApp 0659573804
              </a>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="premium-button border border-ink/14 text-ink">
                Instagram
              </a>
            </div>
          </div>

          <div className="soft-panel p-5 sm:p-7">
            <h3 className="editorial text-4xl font-bold leading-none">Brief parfait</h3>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {briefFields.map((field) => (
                <div key={field} className="rounded-[1rem] border border-ink/10 bg-ivory px-4 py-3 text-sm font-bold text-charcoal/74">
                  {field}
                </div>
              ))}
            </div>
            <div className="mt-7 grid gap-4 border-t border-ink/10 pt-6 text-sm leading-7 text-charcoal/70">
              <p>
                <strong className="text-ink">Localisation:</strong> Maroc
              </p>
              <p>
                <strong className="text-ink">Horaires:</strong> commandes sur reservation
              </p>
              <p>
                <strong className="text-ink">Delai conseille:</strong> 48h minimum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
