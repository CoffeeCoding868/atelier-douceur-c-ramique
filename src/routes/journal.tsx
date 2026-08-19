import { createFileRoute } from "@tanstack/react-router";
import atelierTour from "@/assets/atelier-tour.jpg";
import { Section, TitrePage } from "@/components/site/Ui";
import { JOURNAL, SITE } from "@/lib/site-data";

const TITRE = "Journal de l'atelier — actualités céramique à Strasbourg";
const DESC =
  "Ventes éphémères, marchés strasbourgeois avec le collectif Minuit Céramique, nouvelles collections et coulisses de fabrication : le journal de La Poterie des Oiseaux Bleus.";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: Journal,
});

function Journal() {
  return (
    <>
      <TitrePage
        surtitre="Journal de l'atelier"
        titre="Ce qui se passe entre deux cuissons"
        chapeau="Nos rendez-vous, nos essais d'émaux et les coulisses de la fabrication."
      />

      <Section className="max-w-3xl">
        <img
          src={atelierTour}
          alt="Céramiste au tour dans l'atelier de poterie de Strasbourg"
          width={1200}
          height={900}
          loading="lazy"
          className="mb-14 w-full rounded-3xl object-cover"
        />

        <div className="space-y-12">
          {JOURNAL.map((a) => (
            <article key={a.slug} className="border-b border-border pb-12 last:border-0">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{a.date}</p>
              <h2 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">{a.titre}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{a.extrait}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-border surface-cocon p-8">
          <h2 className="font-serif text-2xl">Nous croiser ailleurs</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Nous participons régulièrement à des ventes éphémères et à des marchés à Strasbourg,
            notamment avec le collectif{" "}
            <a href={SITE.minuit} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              Minuit Céramique
            </a>
            . Les dates sont annoncées ici et sur Instagram.
          </p>
        </div>
      </Section>
    </>
  );
}
