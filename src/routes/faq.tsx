import { createFileRoute } from "@tanstack/react-router";
import { Bouton, Section, TitrePage } from "@/components/site/Ui";

const TITRE = "FAQ — entretien, émaux et commandes | Poterie des Oiseaux Bleus";
const DESC =
  "Lave-vaisselle, micro-ondes, émaux alimentaires testés en laboratoire, stages, commandes et livraison : les questions fréquentes sur nos céramiques faites main à Strasbourg.";

const QUESTIONS = [
  {
    q: "Les pièces passent-elles au lave-vaisselle et au micro-ondes ?",
    r: "Oui. Toutes nos pièces utilitaires sont cuites à haute température et supportent le lave-vaisselle comme le micro-ondes. Seule exception : les pièces comportant un décor doré ou lustré, qui ne vont jamais au micro-ondes.",
  },
  {
    q: "Peut-on manger et boire dedans en toute sécurité ?",
    r: "Oui. Nos émaux sont testés en laboratoire et conformes à un usage alimentaire. Les surfaces en contact avec les aliments sont entièrement vitrifiées.",
  },
  {
    q: "Proposez-vous des cours ou des stages de poterie ?",
    r: "Non, nous n'organisons pas de cours ni d'ateliers ouverts au public. Nous accueillons uniquement des stagiaires sous convention, dans le cadre d'écoles ou de formations en céramique, design ou arts appliqués.",
  },
  {
    q: "Comment passer commande ?",
    r: "Via le formulaire de la page Commander, ou en message direct sur les comptes Instagram des deux créatrices. On vous répond avec les disponibilités, le délai et les frais d'envoi.",
  },
  {
    q: "Quels sont les délais de préparation ?",
    r: "Ils varient selon le planning des cuissons et la saison. Une pièce disponible part sous quelques jours ; une commande personnalisée (4 pièces minimum) demande généralement plusieurs semaines.",
  },
  {
    q: "Comment se passent la livraison et le retrait ?",
    r: "Livraison partout en France via Mondial Relay, frais calculés au moment de la commande selon le poids du colis. Sinon, retrait gratuit à l'atelier, 5 quai Charles Altorffer, pendant les horaires d'ouverture.",
  },
  {
    q: "Les pièces sont-elles toutes identiques ?",
    r: "Non, et c'est voulu : chaque pièce est façonnée et émaillée à la main. Les variations de teinte, de matière et de dessin font partie du travail.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <TitrePage surtitre="FAQ" titre="Questions fréquentes" chapeau="Tout ce qu'on nous demande le plus souvent en boutique." />

      <Section className="max-w-3xl">
        <dl className="divide-y divide-border">
          {QUESTIONS.map((item) => (
            <div key={item.q} className="py-7">
              <dt className="font-serif text-xl leading-snug">{item.q}</dt>
              <dd className="mt-3 text-base leading-relaxed text-muted-foreground">{item.r}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <Bouton to="/contact">Poser une autre question</Bouton>
          <Bouton to="/commander" variante="contour">
            Commander une pièce
          </Bouton>
        </div>
      </Section>
    </>
  );
}
