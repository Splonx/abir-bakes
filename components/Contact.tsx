import { siteConfig } from '../lib/siteConfig';

export default function Contact(){
  return (
    <section className="my-12">
      <h2 className="section-title">Contact</h2>
      <p className="mt-2 text-chocolate/90">For orders and inquiries, contact via Instagram or WhatsApp.</p>
      <div className="mt-4 flex gap-4">
        <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg bg-pink text-chocolate">Message us on Instagram</a>
        <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg border border-chocolate text-chocolate">WhatsApp</a>
      </div>
    </section>
  );
}
