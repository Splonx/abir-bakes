import React from 'react';

const services = [
  { title: 'Custom Cakes', desc: 'Personalized cakes for any theme or flavor.' },
  { title: 'Sweet Treats', desc: 'Cupcakes, tartlets and small pastries.' },
  { title: 'Savory Bites', desc: 'Savoury options for events and gatherings.' },
  { title: 'Events & Birthdays', desc: 'Cakes and dessert tables for special occasions.' }
];

export default function Services(){
  return (
    <section className="my-12">
      <h2 className="section-title">Services</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={i} className="card p-5">
            <h3 className="font-medium">{s.title}</h3>
            <p className="text-chocolate/80 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
