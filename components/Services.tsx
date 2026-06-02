import Image from 'next/image';
import { galleryImages } from '../lib/content';
import { siteConfig } from '../lib/siteConfig';

export default function Services() {
  return (
    <section className="section-pad bg-ink text-ivory">
      <div className="site-shell">
        <div className="max-w-2xl">
          <p className="eyebrow text-champagne">Galerie</p>
          <h2 className="section-heading mt-4 text-ivory">Des details qui changent toute la table.</h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden bg-ivory/8 ${
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

        <div className="mt-8 flex flex-col gap-3 border-t border-ivory/14 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-ivory/68">
            Chaque photo doit guider le client vers une inspiration claire: format, finition, couleurs et niveau de detail.
          </p>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="premium-button border border-ivory/24 text-ivory">
            Voir Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
