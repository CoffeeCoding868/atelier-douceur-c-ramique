import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Carte, Section, TitrePage } from "@/components/site/Ui";
import { SITE } from "@/lib/site-data";

const TITRE = "Commander — céramique faite main livrée ou à retirer à Strasbourg";
const DESC =
  "Commandez une pièce de céramique artisanale à Strasbourg : formulaire simple, commandes personnalisées dès 4 pièces, livraison France via Mondial Relay ou retrait à l'atelier.";

export const Route = createFileRoute("/commander")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/commander" },
    ],
    links: [{ rel: "canonical", href: "/commander" }],
  }),
  component: Commander,
});

const champ =
  "mt-2 w-full rounded-2xl border border-input bg-card px-4 py-3 text-base outline-none transition-shadow focus:ring-2 focus:ring-ring";

function Commander() {
  const [envoye, setEnvoye] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const corps = [
      `Nom : ${data.get("nom")}`,
      `E-mail : ${data.get("email")}`,
      `Type de pièces : ${data.get("type")}`,
      `Quantité : ${data.get("quantite")}`,
      `Retrait / livraison : ${data.get("remise")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:bonjour@poteriedesoiseauxbleus.fr?subject=${encodeURIComponent(
      "Demande de commande — site",
    )}&body=${encodeURIComponent(corps)}`;
    setEnvoye(true);
  };

  return (
    <>
      <TitrePage
        surtitre="Commander"
        titre="Commander une pièce"
        chapeau="Pas de tunnel d'achat : vous nous écrivez, on vous répond avec les disponibilités, le délai et les frais d'envoi."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Carte>
            <h2 className="font-serif text-2xl">Votre demande</h2>
            {envoye ? (
              <p className="mt-6 rounded-2xl bg-accent/40 p-5 text-sm leading-relaxed">
                Merci ! Votre message est prêt dans votre logiciel de messagerie — il ne reste qu'à
                l'envoyer. On vous répond en général sous deux à trois jours ouvrés.
              </p>
            ) : (
              <form className="mt-6 space-y-5" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="nom" className="text-sm">
                    Nom
                  </label>
                  <input id="nom" name="nom" required className={champ} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    E-mail
                  </label>
                  <input id="email" name="email" type="email" required className={champ} autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="type" className="text-sm">
                    Type de pièces souhaitées
                  </label>
                  <input
                    id="type"
                    name="type"
                    required
                    placeholder="Tasses géantes, bols, fantômes de poche…"
                    className={champ}
                  />
                </div>
                <div>
                  <label htmlFor="quantite" className="text-sm">
                    Quantité
                  </label>
                  <input id="quantite" name="quantite" type="number" min={1} defaultValue={1} className={champ} />
                </div>
                <div>
                  <label htmlFor="remise" className="text-sm">
                    Retrait ou livraison
                  </label>
                  <select id="remise" name="remise" className={champ} defaultValue="Retrait à l'atelier">
                    <option>Retrait à l'atelier</option>
                    <option>Livraison France — Mondial Relay</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Couleurs, occasion, délai souhaité…"
                    className={champ}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Envoyer ma demande
                </button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Vos informations servent uniquement à traiter votre demande et ne sont jamais
                  transmises à des tiers.
                </p>
              </form>
            )}
          </Carte>

          <div className="space-y-6">
            <Carte>
              <h2 className="font-serif text-xl">Commandes personnalisées</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Pour un projet spécifique (service, cadeaux d'entreprise, vaisselle de restaurant),
                nous travaillons à partir de <strong>4 pièces minimum</strong>. On en discute
                ensemble : forme, émail, taille de série.
              </p>
            </Carte>
            <Carte>
              <h2 className="font-serif text-xl">Livraison & retrait</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>Retrait à l'atelier, 5 quai Charles Altorffer, pendant les horaires d'ouverture.</li>
                <li>Envoi en France via Mondial Relay, frais calculés à la commande selon le poids.</li>
                <li>Emballage soigné : chaque pièce part protégée individuellement.</li>
              </ul>
            </Carte>
            <Carte>
              <h2 className="font-serif text-xl">Délais</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Les délais varient selon le planning des cuissons. Une pièce en stock part sous
                quelques jours ; une série sur mesure demande généralement plusieurs semaines.
              </p>
            </Carte>
            <Carte>
              <h2 className="font-serif text-xl">Par Instagram</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Vous pouvez aussi nous écrire directement sur{" "}
                <a href={SITE.instaLisa} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  @lisa.debat
                </a>{" "}
                ou{" "}
                <a href={SITE.instaDoriane} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  @deuxfoisdeuxmains
                </a>
                .
              </p>
            </Carte>
          </div>
        </div>
      </Section>
    </>
  );
}
