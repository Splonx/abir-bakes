import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { title: 'Vanilla Cake', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop', category: 'Cakes' },
  { title: 'Chocolate Drip', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80&auto=format&fit=crop', category: 'Cakes' },
  { title: 'Rose Cupcakes', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6df5?w=800&q=80&auto=format&fit=crop', category: 'Cupcakes' },
  { title: 'Mini Tartlets', img: 'https://images.unsplash.com/photo-1505253216967-9a9cdd8c6aa0?w=800&q=80&auto=format&fit=crop', category: 'Dessert Boxes' },
  { title: 'Dessert Box', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop', category: 'Dessert Boxes' },
  { title: 'Savory Bites', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80&auto=format&fit=crop', category: 'Savory Bites' },
  { title: 'Birthday Special', img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80&auto=format&fit=crop', category: 'Birthday cakes' },
  { title: 'Cupcake Box', img: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80&auto=format&fit=crop', category: 'Cupcakes' }
];

export default function Gallery(){
  return (
    <section id="gallery" className="my-12">
      <div className="flex flex-col gap-3">
        <h2 className="section-title">Gallery</h2>
        <p className="text-chocolate/80">A selection of creations — cakes, cupcakes, dessert boxes and savory bites.</p>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="card overflow-hidden"
          >
            <img src={it.img} alt={it.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-medium">{it.title}</h3>
              <p className="text-sm text-chocolate/70">{it.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
