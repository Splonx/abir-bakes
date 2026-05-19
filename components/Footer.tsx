import React from 'react';
import { siteConfig } from '../lib/siteConfig';

export default function Footer(){
  return (
    <footer className="mt-12 bg-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">{siteConfig.name}</div>
        <div className="text-sm">
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="underline">Instagram</a>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} {siteConfig.owner}</div>
      </div>
    </footer>
  );
}
