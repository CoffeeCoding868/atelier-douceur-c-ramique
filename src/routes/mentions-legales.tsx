import { createFileRoute } from "@tanstack/react-router";
import { Section, TitrePage } from "@/components/site/Ui";

const TITRE = "Mentions légales — La Poterie des Oiseaux Bleus";
const DESC =
  "Mentions légales du site de La Poterie des Oiseaux Bleus, atelier-boutique de céramique artisanale à Strasbourg.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: Mentions,
});

function Mentions() {
  return (
    <>
      <TitrePage titre="Mentions légales" />
      <Section className="max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
        <div>
          <h2 className="font-serif text-2xl text-foreground">Éditeur du site</h2>
          <p className="mt-3">
            La Poterie des Oiseaux Bleus — Lisa Débat et Doriane Larreta, co-gérantes.
            <br />
            5 quai Charles Altorffer, 67000 Strasbourg, France.
            <br />
            Contact : bonjour@poteriedesoiseauxbleus.fr
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground">Hébergement</h2>
          <p className="mt-3">
            Le site est hébergé par un prestataire situé dans l'Union européenne. Les coordonnées
            complètes de l'hébergeur sont disponibles sur simple demande.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground">Propriété intellectuelle</h2>
          <p className="mt-3">
            Les textes, photographies, illustrations et créations céramiques présentés sur ce site
            sont la propriété de leurs autrices. Toute reproduction, même partielle, est interdite
            sans autorisation écrite préalable.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground">Responsabilité</h2>
          <p className="mt-3">
            Les prix affichés sont indicatifs et peuvent varier selon la taille, l'émail et la
            disponibilité des pièces. Les photographies ne sont pas contractuelles : chaque pièce
            étant faite main, des variations de teinte et de forme sont normales.
          </p>
        </div>
      </Section>
    </>
  );
}
