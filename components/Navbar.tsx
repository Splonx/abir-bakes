import Link from 'next/link';
import React from 'react';
import { siteConfig } from '../lib/siteConfig';

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-elegant text-xl text-chocolate">{siteConfig.name}</Link>
        <div className="space-x-4">
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-pink text-chocolate text-sm">Instagram</a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-chocolate text-chocolate text-sm">WhatsApp</a>
        </div>
      </nav>
    </header>
  );
}
