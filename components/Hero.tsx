import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../lib/siteConfig';

export default function Hero(){
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col md:flex-row items-center gap-8 my-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1"
      >
        <h1 className="section-title text-4xl md:text-5xl font-bold">Custom Cakes & Sweet Treats</h1>
        <p className="mt-4 text-lg text-chocolate/90">Freshly baked creations made with love for every occasion.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-pink text-chocolate font-medium">Order on Instagram</a>
          <a href="#gallery" className="px-6 py-3 rounded-full border border-chocolate text-chocolate">View creations</a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1"
      >
        <div className="card p-6">
          <img src="https://images.unsplash.com/photo-1512058564366-c9e9ff3d7bdb?w=1200&q=80&auto=format&fit=crop" alt="baked cake" className="w-full rounded-lg object-cover h-56" />
        </div>
      </motion.div>
    </motion.section>
  );
}
