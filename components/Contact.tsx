import { testimonials } from '../lib/content';
import { siteConfig } from '../lib/siteConfig';

export default function Contact() {
  return (
    <section className="bg-porcelain py-20 sm:py-28">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow">Devis sur mesure</p>
            <h2 className="section-heading mt-4 text-ink">Lancez le brief, Abir affine la creation.</h2>
            <p className="mt-6 leading-8 text-charcoal/72">
              Pour un vrai devis, il faut une date, une ville, le nombre d invites, une inspiration visuelle et le niveau de finition souhaite. La prochaine version pourra gerer upload, paiement, compte client et suivi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="premium-button bg-ink text-ivory">
                WhatsApp
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="premium-button border border-ink/18 text-ink"
              >
                Instagram
              </a>
            </div>

            <div className="mt-10 grid gap-4">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className="border-l-2 border-gold pl-5">
                  <p className="font-elegant text-2xl font-bold leading-8 text-ink">"{testimonial.quote}"</p>
                  <cite className="mt-3 block text-sm font-bold uppercase not-italic tracking-[0.16em] text-charcoal/50">
                    {testimonial.author}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="glass-line p-5 sm:p-7">
            <h3 className="font-elegant text-4xl font-bold text-ink">Brief ideal</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                'Type d evenement',
                'Date et ville',
                'Nombre d invites',
                'Theme ou inspiration',
                'Saveurs preferees',
                'Budget cible'
              ].map((item) => (
                <div key={item} className="border border-ink/10 bg-white/55 p-4">
                  <p className="text-sm font-bold text-ink">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-charcoal/58">A renseigner dans le message de devis.</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-ink/10 pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Roadmap produit</p>
              <p className="mt-3 leading-7 text-charcoal/72">
                Upload inspiration, devis automatique, acompte, planning production, page souvenir et relances anniversaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
