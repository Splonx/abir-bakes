import Image from 'next/image';
import { galleryImages } from '../lib/content';
import { siteConfig } from '../lib/siteConfig';

export default function Services() {
  return (
    <section className="section-pad bg-[linear-gradient(180deg,#EEE3D4,#D8C2B3_62%,#FBF7EF)] text-cocoa">
      <div className="site-shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Matieres</p>
          <h2 className="section-heading mt-4 text-cocoa">Textures, lignes, finitions.</h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden bg-warm/40 shadow-[0_18px_48px_rgba(74,52,40,0.12)] ${
                index === 0 ? 'col-span-2 aspect-[1.1] sm:aspect-[0.74]' : 'aspect-[0.74]'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                quality={72}
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover image-treatment"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-cocoa/14 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-cocoa/68">
            Le visuel reste central: creme, cocoa, ivoire, reliefs et finitions doivent parler avant le discours.
          </p>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="premium-button border border-cocoa/18 bg-warm/34 text-cocoa">
            Voir Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
