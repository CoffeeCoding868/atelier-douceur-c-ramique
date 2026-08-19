import { createFileRoute } from "@tanstack/react-router";
import universLisa from "@/assets/univers-lisa.jpg";
import universDoriane from "@/assets/univers-doriane.jpg";
import { Bouton, Section, Separateur, TitrePage } from "@/components/site/Ui";
import { SITE } from "@/lib/site-data";

const TITRE = "Nos créatrices — Lisa Débat & Doriane Larreta, céramistes à Strasbourg";
const DESC =
  "Lisa Débat, céramiste formée au CNIFOP, et Doriane Larreta, céramiste-illustratrice : deux parcours, deux styles, un atelier-boutique de poterie à Strasbourg.";

export const Route = createFileRoute("/nos-creatrices")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/nos-creatrices" },
    ],
    links: [{ rel: "canonical", href: "/nos-creatrices" }],
  }),
  component: Creatrices,
});

function Creatrices() {
  return (
    <>
      <TitrePage
        surtitre="Nos créatrices"
        titre="Lisa & Doriane"
        chapeau="Deux céramistes, deux gestes, un même établi au bord de l'Ill."
      />

      <Section>
        <article className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={universLisa}
            alt="Tasses, bol et vases en grès émaillé bleu ciel par la céramiste Lisa Débat"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-3xl object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Céramiste</p>
            <h2 className="mt-3 font-serif text-4xl">Lisa Débat</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Formée au CNIFOP, Lisa travaille principalement au tour. Son vocabulaire tient en peu
              de mots : des lignes fines, des proportions justes, des couleurs douces mais franches.
              Rien de décoratif qui ne serve la prise en main.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Elle tourne un grès chamotté qu'elle laisse sécher lentement, tourne les pieds au
              cuir, cuit une première fois à 980 °C, émaille au trempé, puis remonte à 1260 °C pour
              vitrifier. Ses émaux sont testés en laboratoire pour un usage alimentaire.
            </p>
            <h3 className="mt-7 font-serif text-xl">Ce qu'elle fabrique</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tasses et tasses géantes, bols, assiettes, saladiers, vases, presse-agrumes,
              porte-savons, abat-jours.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Bouton href={SITE.instaLisa} variante="contour">
                @lisa.debat
              </Bouton>
              <Bouton href={SITE.siteLisa} variante="contour">
                lisadebatceramique.com
              </Bouton>
            </div>
          </div>
        </article>
      </Section>

      <Separateur />

      <Section>
        <article className="grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2">
            <img
              src={universDoriane}
              alt="Fantômes de poche, tasses à mots doux et canard fleuri en céramique illustrée par Doriane Larreta"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="lg:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Céramiste-illustratrice
            </p>
            <h2 className="mt-3 font-serif text-4xl">Doriane Larreta</h2>
            <p className="mt-2 font-serif text-lg text-muted-foreground">« Deux fois deux mains »</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Doriane vient du dessin. Elle modèle, estampe, puis peint : engobes et décors sous
              émail, tracés au pinceau fin, un par un. Aucune pièce n'est strictement identique à
              une autre, parce que la main tremble un peu et que c'est tant mieux.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Sa démarche est assumée : fabriquer des « bulles de douceur » et créer de l'échange
              avec les client·es. On vient souvent lui raconter à qui la tasse est destinée.
            </p>
            <h3 className="mt-7 font-serif text-xl">Ce qu'elle fabrique</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Fantômes de poche, tasses à mots doux, cartes à mantras, têtes de canard fleuries,
              mugs et assiettes illustrés.
            </p>
            <div className="mt-7">
              <Bouton href={SITE.instaDoriane} variante="contour">
                @deuxfoisdeuxmains
              </Bouton>
            </div>
          </div>
        </article>
      </Section>
    </>
  );
}
