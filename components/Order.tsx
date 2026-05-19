import { siteConfig } from '../lib/siteConfig';

export default function Order(){
  return (
    <section className="my-12">
      <h2 className="section-title">How to Order</h2>
      <ol className="mt-4 list-decimal list-inside text-chocolate/90 space-y-2">
        <li>Choisir le type de création (cake, cupcakes, dessert box, savory bites).</li>
        <li>Envoyer une demande via Instagram en précisant date, taille, goûts et référence.</li>
        <li>Confirmer le design, la date et le prix avec Abir.</li>
      </ol>
      <div className="mt-6">
        <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-pink text-chocolate">Order on Instagram</a>
      </div>
    </section>
  );
}
