# Abir Bakes - Next.js Showcase

Site vitrine pour "Abir Bakes" — prêt pour déploiement sur Vercel.

Stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

Installation

```bash
npm install
```

Lancer en local

```bash
npm run dev
# puis ouvrir http://localhost:3000
```

Déploiement sur Vercel

- Connectez le repository à Vercel et déployez (Next.js App Router supporté par défaut).
- Build command: `npm run build`, Output directory: (laissez vide)

Modifier le contenu

- Texte, liens et numéro WhatsApp : `lib/siteConfig.ts`
- Composants : `components/`
- Pages App Router : `app/`
- Styles : `styles/globals.css` et `tailwind.config.cjs`

Notes

- Aucune API Instagram n'est utilisée; les boutons renvoient simplement aux liens publics.
- Replacez les images placeholder dans `components/Gallery.tsx` par vos propres images ou assets locaux.
