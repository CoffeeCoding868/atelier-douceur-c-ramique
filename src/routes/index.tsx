import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-atelier.jpg";
import atelierTour from "@/assets/atelier-tour.jpg";
import atelierEtageres from "@/assets/atelier-etageres.jpg";
import universLisa from "@/assets/univers-lisa.jpg";
import universDoriane from "@/assets/univers-doriane.jpg";
import { Bouton, Carte, Section, Separateur } from "@/components/site/Ui";
import { SITE } from "@/lib/site-data";

const TITRE = "La Poterie des Oiseaux Bleus — céramique artisanale à Strasbourg";
const DESC =
  "Atelier-boutique de céramique à Strasbourg (Krutenau) : vaisselle et objets faits main par Lisa Débat et Doriane Larreta, façonnés et cuits sur place, 5 quai Charles Altorffer.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "La Poterie des Oiseaux Bleus",
          description: DESC,
          address: {
            "@type": "PostalAddress",
            streetAddress: "5 quai Charles Altorffer",
            postalCode: "67000",
            addressLocality: "Strasbourg",
            addressCountry: "FR",
          },
          openingHours: ["We 09:00-14:00", "Th-Sa 12:00-19:00"],
          sameAs: [SITE.instaLisa, SITE.instaDoriane],
        }),
      },
    ],
  }),
  component: Accueil,
});

function Accueil() {
  return (
    <>
      <section className="relative">
        <img
          src={hero}
          alt="Atelier-boutique de céramique à Strasbourg, étagères de tasses et bols faits main"
          width={1600}
          height={1104}
          className="h-[78vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/25" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-12 sm:pb-20">
            <div className="apparait max-w-xl rounded-3xl bg-background/85 p-8 backdrop-blur-sm sm:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Krutenau · Strasbourg
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl">
                La Poterie des Oiseaux Bleus
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Un atelier-boutique ouvert sur la rue, le long de l'Ill, où la terre devient des
                objets doux pour les gestes de tous les jours.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Bouton to="/commander">Commander une pièce</Bouton>
                <Bouton to="/notre-histoire" variante="contour">
                  Notre histoire
                </Bouton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              L'atelier ouvert sur la rue
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
              On tourne, on émaille, on cuit — devant vous
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Ici, il n'y a pas d'arrière-boutique. Le tour, le four et les étagères de séchage
              partagent l'espace avec les pièces à vendre. En passant sur le quai, on aperçoit une
              tasse en train de naître, une anse posée, un émail qui sèche.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Vous pouvez entrer, poser vos questions, toucher les pièces. C'est un peu le but.
            </p>
            <div className="mt-7">
              <Bouton to="/boutique" variante="contour">
                Voir les pièces
              </Bouton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={atelierTour}
              alt="Mains de céramiste façonnant un bol sur le tour de potier"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full rounded-3xl object-cover"
            />
            <img
              src={atelierEtageres}
              alt="Étagères de l'atelier céramiste de la Krutenau avec pièces en cours de séchage près du four"
              width={1200}
              height={900}
              loading="lazy"
              className="mt-8 h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Separateur />

      <Section>
        <h2 className="text-center font-serif text-3xl sm:text-4xl">Deux univers, un même atelier</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
          Lisa et Doriane travaillent côte à côte, avec deux gestes et deux langages très
          différents — et c'est exactement ce qui rend les étagères vivantes.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={universLisa}
              alt="Vaisselle céramique artisanale minimaliste bleu ciel et écru par Lisa Débat"
              width={1200}
              height={900}
              loading="lazy"
              className="h-64 w-full object-cover"
            />
            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-oiseau-foreground">Lisa Débat</p>
              <h3 className="mt-3 font-serif text-2xl">Lignes fines, couleurs franches</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Formée au CNIFOP, Lisa tourne une vaisselle utilitaire et intemporelle : tasses (dont
                les fameuses tasses géantes), bols, assiettes, saladiers, vases, presse-agrumes,
                porte-savons et abat-jours.
              </p>
              <Link to="/nos-creatrices" className="mt-5 inline-block text-sm text-primary underline underline-offset-4">
                Découvrir son travail
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={universDoriane}
              alt="Céramiques illustrées de Doriane Larreta : fantômes de poche, tasses à mots doux et tête de canard fleurie"
              width={1200}
              height={900}
              loading="lazy"
              className="h-64 w-full object-cover"
            />
            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-primary">Doriane Larreta</p>
              <h3 className="mt-3 font-serif text-2xl">Des bulles de douceur</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Céramiste-illustratrice sous le nom « Deux fois deux mains », Doriane peint des
                pièces réconfortantes : fantômes de poche, tasses à mots doux, cartes à mantras,
                têtes de canard fleuries.
              </p>
              <Link to="/nos-creatrices" className="mt-5 inline-block text-sm text-primary underline underline-offset-4">
                Découvrir son travail
              </Link>
            </div>
          </article>
        </div>
      </Section>

      <section className="surface-cocon border-y border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3">
          <div>
            <h2 className="font-serif text-2xl">Venir à l'atelier</h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
              5 quai Charles Altorffer
              <br />
              67000 Strasbourg — Krutenau
            </address>
            <a href={SITE.maps} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-primary underline underline-offset-4">
              Ouvrir la carte
            </a>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Horaires</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {SITE.horaires.map((h) => (
                <li key={h.jour}>
                  {h.jour} · {h.heures}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Nous suivre</h3>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a href={SITE.instaLisa} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  Instagram @lisa.debat
                </a>
              </li>
              <li>
                <a href={SITE.instaDoriane} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  Instagram @deuxfoisdeuxmains
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <Carte className="surface-cocon">
            <h2 className="font-serif text-2xl">Une pièce vous fait de l'œil ?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Pas de panier compliqué : vous nous écrivez ce qui vous plaît, on vous répond avec les
              disponibilités, le délai et les frais d'envoi.
            </p>
            <div className="mt-6">
              <Bouton to="/commander">Passer commande</Bouton>
            </div>
          </Carte>
          <Carte>
            <h2 className="font-serif text-2xl">Le journal de l'atelier</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ventes éphémères, nouvelles collections, essais d'émaux et coulisses de cuisson.
            </p>
            <div className="mt-6">
              <Bouton to="/journal" variante="contour">
                Lire le journal
              </Bouton>
            </div>
          </Carte>
        </div>
      </Section>
    </>
  );
}
