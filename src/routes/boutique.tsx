import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import universLisa from "@/assets/univers-lisa.jpg";
import universDoriane from "@/assets/univers-doriane.jpg";
import { Bouton, Section, TitrePage } from "@/components/site/Ui";
import { CATEGORIES, PIECES, type Categorie, type Creatrice } from "@/lib/site-data";

const TITRE = "Boutique — vaisselle artisanale et céramique à Strasbourg";
const DESC =
  "Galerie des pièces de La Poterie des Oiseaux Bleus : vaisselle artisanale, décoration et objets doux faits main à Strasbourg par Lisa Débat et Doriane Larreta. Pièces uniques, quantités limitées.";

export const Route = createFileRoute("/boutique")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/boutique" },
    ],
    links: [{ rel: "canonical", href: "/boutique" }],
  }),
  component: Boutique,
});

function Boutique() {
  const [categorie, setCategorie] = useState<Categorie | "toutes">("toutes");
  const [creatrice, setCreatrice] = useState<Creatrice | "toutes">("toutes");

  const pieces = useMemo(
    () =>
      PIECES.filter(
        (p) =>
          (categorie === "toutes" || p.categorie === categorie) &&
          (creatrice === "toutes" || p.creatrice === creatrice),
      ),
    [categorie, creatrice],
  );

  const puce = (actif: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition-colors ${
      actif ? "border-transparent bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"
    }`;

  return (
    <>
      <TitrePage
        surtitre="Boutique"
        titre="Les pièces de l'atelier"
        chapeau="Chaque pièce est unique et fabriquée en petite quantité : les formes reviennent, les couleurs et les décors, jamais tout à fait."
      />

      <Section>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <button type="button" className={puce(categorie === "toutes")} onClick={() => setCategorie("toutes")}>
              Toutes les catégories
            </button>
            {CATEGORIES.map((c) => (
              <button key={c.id} type="button" className={puce(categorie === c.id)} onClick={() => setCategorie(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" className={puce(creatrice === "toutes")} onClick={() => setCreatrice("toutes")}>
              Les deux créatrices
            </button>
            <button type="button" className={puce(creatrice === "Lisa")} onClick={() => setCreatrice("Lisa")}>
              Lisa Débat
            </button>
            <button type="button" className={puce(creatrice === "Doriane")} onClick={() => setCreatrice("Doriane")}>
              Doriane Larreta
            </button>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {pieces.length} pièce{pieces.length > 1 ? "s" : ""} affichée{pieces.length > 1 ? "s" : ""}
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((p) => (
            <article key={p.id} className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={p.creatrice === "Lisa" ? universLisa : universDoriane}
                alt={`${p.nom} — céramique artisanale faite main à Strasbourg par ${p.creatrice}`}
                width={1200}
                height={900}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {p.creatrice}
                </p>
                <h2 className="mt-2 font-serif text-xl">{p.nom}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">{p.matiere}</p>
                <p className="mt-4 font-serif text-lg">{p.prix}</p>
              </div>
            </article>
          ))}
        </div>

        {pieces.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            Aucune pièce dans cette combinaison pour le moment — écrivez-nous, on fabrique aussi sur
            demande.
          </p>
        )}

        <div className="mt-14 rounded-3xl border border-border surface-cocon p-8 text-center">
          <h2 className="font-serif text-2xl">Une pièce vous plaît ?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Les prix sont indicatifs et varient selon la taille et l'émail. Écrivez-nous pour
            connaître les disponibilités ou passer commande.
          </p>
          <div className="mt-6 flex justify-center">
            <Bouton to="/commander">Commander</Bouton>
          </div>
        </div>
      </Section>
    </>
  );
}
