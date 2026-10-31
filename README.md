# OUSMANE.DEV — Portfolio

Portfolio d'**Ousmane Mohamed ALHOUSSEINI**, développeur web et professionnel des systèmes d'information (Abidjan).
React 19 + Vite 7, CSS natif, aucune autre dépendance.

## Lancer le projet

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère /dist, prêt à être mis en ligne
npm run preview    # teste le build localement
```

## Structure

```
public/
  cv/CV-Ousmane-Mohamed-Alhousseini.pdf   ← CV téléchargeable (remplacer ce fichier pour le mettre à jour)
  images/                                 ← portrait détouré, photo À propos, aquarelles, image de partage
src/
  data/profile.js     ← TOUT le contenu (identité, compétences, expériences, formation)
  data/projects.js    ← projets (emplacements provisoires à remplacer — mode d'emploi dans le fichier)
  data/logos.js       ← logos des 8 technologies flottantes
  components/         ← Header, Hero, Features, About, Skills, Experience, Education, Projects, Contact, Footer, Cursor
  hooks/              ← useReveal (apparitions au scroll), useScrollSpy (menu actif)
  styles/             ← base.css (tokens, boutons, animations), layout.css, hero.css, sections.css
img/                  ← ressources d'origine (non publiées)
```

## Formulaire de contact

- **Sans configuration** : le bouton ouvre la messagerie du visiteur avec le message pré-rempli (aucun envoi simulé).
- **Envoi direct** (recommandé) : créez une clé gratuite sur [web3forms.com](https://web3forms.com) avec
  `ousmaneag1997@gmail.com`, copiez `.env.example` en `.env` et renseignez `VITE_WEB3FORMS_ACCESS_KEY`,
  puis relancez `npm run build`. Sur Netlify/Vercel, ajoutez la même variable dans les réglages du site.

## Mise en ligne

Le build utilise des chemins relatifs : `dist/` fonctionne à la racine d'un domaine comme dans un sous-dossier.

- **Netlify** : glisser-déposer le dossier `dist/` sur app.netlify.com/drop, ou connecter le dépôt
  (build : `npm run build`, dossier : `dist`).
- **Vercel** : `npx vercel` à la racine du projet (framework détecté : Vite).
- **GitHub Pages** : pousser le contenu de `dist/` sur la branche `gh-pages`.
- **Hébergement classique** (cPanel, FTP) : envoyer le contenu de `dist/` dans `public_html`.

## Ajouter un projet

Voir l'en-tête de `src/data/projects.js`. Les cartes marquées « Contenu provisoire » disparaissent dès que
vous supprimez les entrées `placeholder: true`.
