export const SITE = {
  nom: "La Poterie des Oiseaux Bleus",
  adresse: "5 quai Charles Altorffer, 67000 Strasbourg",
  horaires: [
    { jour: "Mercredi", heures: "9h – 14h" },
    { jour: "Jeudi", heures: "12h – 19h" },
    { jour: "Vendredi", heures: "12h – 19h" },
    { jour: "Samedi", heures: "12h – 19h" },
    { jour: "Dimanche, lundi, mardi", heures: "Fermé" },
  ],
  instaLisa: "https://instagram.com/lisa.debat",
  instaDoriane: "https://instagram.com/deuxfoisdeuxmains",
  siteLisa: "https://lisadebatceramique.com",
  minuit: "https://minuitceramique.com",
  maps: "https://www.google.com/maps/search/?api=1&query=5+quai+Charles+Altorffer+67000+Strasbourg",
  osm: "https://www.openstreetmap.org/export/embed.html?bbox=7.7345%2C48.5760%2C7.7465%2C48.5820&layer=mapnik&marker=48.5790%2C7.7405",
};

export type Categorie = "vaisselle" | "decoration" | "doux";
export type Creatrice = "Lisa" | "Doriane";

export type Piece = {
  id: string;
  nom: string;
  creatrice: Creatrice;
  categorie: Categorie;
  description: string;
  matiere: string;
  prix: string;
};

export const PIECES: Piece[] = [
  {
    id: "tasse-geante",
    nom: "Tasse géante",
    creatrice: "Lisa",
    categorie: "vaisselle",
    description: "Pour les matins lents et les thés qui durent. Anse pleine, ligne fine.",
    matiere: "Grès blanc, émail satiné bleu oiseau",
    prix: "38 €",
  },
  {
    id: "bol-quotidien",
    nom: "Bol du quotidien",
    creatrice: "Lisa",
    categorie: "vaisselle",
    description: "Tourné à la main, pensé pour tenir dans une paume.",
    matiere: "Grès chamotté, émail écru",
    prix: "26 €",
  },
  {
    id: "assiette-ligne",
    nom: "Assiette ligne claire",
    creatrice: "Lisa",
    categorie: "vaisselle",
    description: "Un liseré discret, une profondeur juste. Se mélange avec tout.",
    matiere: "Grès blanc, émail transparent",
    prix: "32 €",
  },
  {
    id: "saladier",
    nom: "Grand saladier",
    creatrice: "Lisa",
    categorie: "vaisselle",
    description: "La pièce du dimanche, celle qui passe de main en main.",
    matiere: "Grès, émail sauge",
    prix: "68 €",
  },
  {
    id: "presse-agrumes",
    nom: "Presse-agrumes",
    creatrice: "Lisa",
    categorie: "vaisselle",
    description: "Bec verseur tourné, cannelures marquées à la main.",
    matiere: "Grès blanc, émail brillant",
    prix: "34 €",
  },
  {
    id: "vase-fin",
    nom: "Vase col fin",
    creatrice: "Lisa",
    categorie: "decoration",
    description: "Pour une seule tige, ou pour rien du tout.",
    matiere: "Grès, émail mat écru",
    prix: "45 €",
  },
  {
    id: "abat-jour",
    nom: "Abat-jour céramique",
    creatrice: "Lisa",
    categorie: "decoration",
    description: "Diffuse une lumière chaude et tamisée au-dessus de la table.",
    matiere: "Porcelaine translucide",
    prix: "120 €",
  },
  {
    id: "porte-savon",
    nom: "Porte-savon",
    creatrice: "Lisa",
    categorie: "decoration",
    description: "Rainuré pour laisser l'eau filer, tout simplement.",
    matiere: "Grès, émail bleu pâle",
    prix: "18 €",
  },
  {
    id: "fantome-poche",
    nom: "Fantôme de poche",
    creatrice: "Doriane",
    categorie: "doux",
    description: "Un petit compagnon à glisser dans une poche, un sac, une main triste.",
    matiere: "Faïence blanche, décor peint à la main",
    prix: "14 €",
  },
  {
    id: "tasse-mots-doux",
    nom: "Tasse à mots doux",
    creatrice: "Doriane",
    categorie: "doux",
    description: "Une phrase écrite au pinceau, révélée au fond de la tasse.",
    matiere: "Faïence, engobes colorés",
    prix: "36 €",
  },
  {
    id: "carte-mantra",
    nom: "Carte à mantra",
    creatrice: "Doriane",
    categorie: "doux",
    description: "Une plaquette de céramique à poser près du lit ou de l'évier.",
    matiere: "Faïence, illustration peinte",
    prix: "22 €",
  },
  {
    id: "tete-canard",
    nom: "Tête de canard fleurie",
    creatrice: "Doriane",
    categorie: "decoration",
    description: "Modelée puis fleurie, elle ne sert à rien et c'est très bien.",
    matiere: "Faïence modelée, émaux colorés",
    prix: "48 €",
  },
  {
    id: "mug-illustre",
    nom: "Mug illustré",
    creatrice: "Doriane",
    categorie: "vaisselle",
    description: "Chaque dessin est unique : personnages, plantes, petites scènes.",
    matiere: "Faïence, décor sous émail",
    prix: "34 €",
  },
  {
    id: "assiette-scene",
    nom: "Assiette à scène",
    creatrice: "Doriane",
    categorie: "decoration",
    description: "Une assiette-tableau, à accrocher ou à sortir pour les gâteaux.",
    matiere: "Faïence, illustration peinte à la main",
    prix: "52 €",
  },
];

export const CATEGORIES: { id: Categorie; label: string }[] = [
  { id: "vaisselle", label: "Vaisselle" },
  { id: "decoration", label: "Décoration" },
  { id: "doux", label: "Objets doux" },
];

export const JOURNAL = [
  {
    slug: "minuit-ceramique",
    date: "12 juin 2026",
    titre: "Vente éphémère avec le collectif Minuit Céramique",
    extrait:
      "Nous rejoignons le collectif Minuit Céramique le temps d'un week-end : une centaine de pièces sorties du four spécialement pour l'occasion, dont une série de tasses géantes en émail bleu oiseau.",
  },
  {
    slug: "emaux-ete",
    date: "28 mai 2026",
    titre: "Trois nouveaux émaux pour l'été",
    extrait:
      "Un sauge très pâle, un rose poudré qui tire vers l'abricot, et un blanc cassé légèrement satiné. Trois mois d'essais, une trentaine de tessons, et enfin des recettes stables à 1260 °C.",
  },
  {
    slug: "coulisses-cuisson",
    date: "9 avril 2026",
    titre: "Coulisses : une cuisson, du dégourdi à l'émail",
    extrait:
      "On vous raconte les deux passages au four : le biscuit à 980 °C qui rend la terre solide et poreuse, puis l'émaillage et la cuisson haute température qui vitrifie tout.",
  },
  {
    slug: "marche-krutenau",
    date: "14 mars 2026",
    titre: "Marché de printemps dans la Krutenau",
    extrait:
      "Un stand devant l'atelier, du café chaud et des pièces à petits prix : les seconds choix, ceux dont l'émail a coulé un peu trop joliment pour finir à la benne.",
  },
];
