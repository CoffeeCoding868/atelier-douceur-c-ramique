import { createFileRoute } from "@tanstack/react-router";
import atelierEtageres from "@/assets/atelier-etageres.jpg";
import { Bouton, Section, Separateur, TitrePage } from "@/components/site/Ui";

const TITRE = "Notre histoire — atelier céramique Biscuit devenu Oiseaux Bleus";
const DESC =
  "De l'atelier Biscuit ouvert par Lisa Débat il y a huit ans à La Poterie des Oiseaux Bleus née en 2025 avec Doriane Larreta : l'histoire d'un atelier de céramique à Strasbourg.";

export const Route = createFileRoute("/notre-histoire")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/notre-histoire" },
    ],
    links: [{ rel: "canonical", href: "/notre-histoire" }],
  }),
  component: Histoire,
});

const ETAPES = [
  {
    annee: "2018",
    titre: "L'atelier Biscuit",
    texte:
      "Lisa ouvre seule son atelier de céramique à Strasbourg. Un tour, un four d'occasion, quelques étagères et beaucoup d'essais. « Biscuit », comme la terre après sa première cuisson : solide, encore poreuse, prête à recevoir la couleur.",
  },
  {
    annee: "2019",
    titre: "La rencontre",
    texte:
      "Avant le Covid, Lisa croise Doriane, illustratrice tombée dans la terre. Elles se prêtent des outils, partagent des fours, se donnent des avis francs sur des émaux ratés. L'amitié précède largement le projet commun.",
  },
  {
    annee: "2025",
    titre: "La Poterie des Oiseaux Bleus",
    texte:
      "En septembre, Doriane rejoint Lisa dans les mêmes locaux du 5 quai Charles Altorffer. L'atelier change de nom et devient un atelier-boutique ouvert sur la rue, où l'on fabrique et où l'on vend au même endroit.",
  },
];

function Histoire() {
  return (
    <>
      <TitrePage
        surtitre="Notre histoire"
        titre="Deux mains, puis quatre"
        chapeau="Ce n'est pas un changement de logo : c'est une amitié créative devenue un lieu."
      />

      <Section className="max-w-3xl">
        <ol className="space-y-12">
          {ETAPES.map((e) => (
            <li key={e.annee} className="relative border-l border-border pl-8">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-accent" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{e.annee}</p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl">{e.titre}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{e.texte}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="max-w-4xl">
        <figure className="rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
          <blockquote className="font-serif text-2xl leading-snug sm:text-3xl">
            « On ne fait pas les mêmes objets, et c'est ce qui nous a décidées. Mes tasses toutes
            simples à côté de ses fantômes, ça raconte mieux la céramique que chacune de son côté. »
          </blockquote>
          <figcaption className="mt-5 text-sm text-muted-foreground">Lisa</figcaption>
        </figure>
      </Section>

      <Separateur />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={atelierEtageres}
            alt="Pièces de poterie en cours de séchage dans l'atelier céramique de Strasbourg"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-3xl object-cover"
          />
          <div>
            <h2 className="font-serif text-3xl">Deux styles qui se complètent</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              D'un côté, une vaisselle utilitaire, minimaliste, faite pour durer et pour être
              utilisée tous les jours : formes tournées, lignes tendues, émaux doux mais francs. De
              l'autre, des pièces illustrées qui parlent, consolent et font sourire — des objets
              qu'on offre autant qu'on garde.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Entre les deux, une même exigence : de la terre travaillée à la main, des émaux testés,
              des cuissons maîtrisées, et rien qui parte de l'atelier sans avoir été vérifié.
            </p>
            <figure className="mt-7 border-l-2 border-accent pl-5">
              <blockquote className="font-serif text-xl leading-snug">
                « Je fabrique des bulles de douceur. Si une tasse fait dire quelque chose à
                quelqu'un, elle a fait son travail. »
              </blockquote>
              <figcaption className="mt-2 text-sm text-muted-foreground">Doriane</figcaption>
            </figure>
            <div className="mt-8 flex flex-wrap gap-3">
              <Bouton to="/nos-creatrices">Rencontrer les créatrices</Bouton>
              <Bouton to="/boutique" variante="contour">
                Voir les pièces
              </Bouton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
