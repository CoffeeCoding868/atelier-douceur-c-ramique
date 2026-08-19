import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Carte, Section, TitrePage } from "@/components/site/Ui";
import { SITE } from "@/lib/site-data";

const TITRE = "Contact — atelier céramique, 5 quai Charles Altorffer Strasbourg";
const DESC =
  "Nous écrire, nous trouver et venir à l'atelier-boutique de céramique de la Krutenau à Strasbourg : adresse, horaires, carte, accès et Instagram.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const champ =
  "mt-2 w-full rounded-2xl border border-input bg-card px-4 py-3 text-base outline-none transition-shadow focus:ring-2 focus:ring-ring";

function Contact() {
  const [envoye, setEnvoye] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const corps = `Nom : ${data.get("nom")}\nE-mail : ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:bonjour@poteriedesoiseauxbleus.fr?subject=${encodeURIComponent(
      "Message depuis le site",
    )}&body=${encodeURIComponent(corps)}`;
    setEnvoye(true);
  };

  return (
    <>
      <TitrePage
        surtitre="Contact"
        titre="Venir, écrire, passer dire bonjour"
        chapeau="L'atelier est ouvert sur la rue, le long de l'Ill, à deux pas de la Petite France."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Carte>
            <h2 className="font-serif text-2xl">Nous écrire</h2>
            {envoye ? (
              <p className="mt-6 rounded-2xl bg-accent/40 p-5 text-sm leading-relaxed">
                Merci ! Votre message est prêt dans votre logiciel de messagerie — il ne reste qu'à
                l'envoyer.
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
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={6} required className={champ} />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Envoyer
                </button>
              </form>
            )}
          </Carte>

          <div className="space-y-6">
            <Carte>
              <h2 className="font-serif text-2xl">L'atelier-boutique</h2>
              <address className="mt-3 not-italic text-base leading-relaxed">
                5 quai Charles Altorffer
                <br />
                67000 Strasbourg
              </address>
              <ul className="mt-5 space-y-1 text-sm text-muted-foreground">
                {SITE.horaires.map((h) => (
                  <li key={h.jour}>
                    <span className="text-foreground">{h.jour}</span> · {h.heures}
                  </li>
                ))}
                <li>Fermé les jours fériés</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <a href={SITE.instaLisa} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  @lisa.debat
                </a>
                <a href={SITE.instaDoriane} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  @deuxfoisdeuxmains
                </a>
              </div>
            </Carte>

            <Carte className="p-0 overflow-hidden">
              <iframe
                title="Carte de l'atelier de céramique, 5 quai Charles Altorffer à Strasbourg"
                src={SITE.osm}
                loading="lazy"
                className="h-72 w-full border-0"
              />
            </Carte>

            <Carte>
              <h2 className="font-serif text-xl">Accès</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>À pied : quartier Krutenau, le long de l'Ill, à quelques minutes de la Petite France.</li>
                <li>Tram : arrêts Porte de l'Hôpital et Étoile Bourse, puis 5 à 10 minutes de marche.</li>
                <li>Vélo : arceaux sur le quai, piste cyclable le long de l'eau.</li>
                <li>Voiture : parkings Sainte-Aurélie, Austerlitz et Bateliers à proximité.</li>
              </ul>
              <a href={SITE.maps} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-primary underline underline-offset-4">
                Itinéraire
              </a>
            </Carte>
          </div>
        </div>
      </Section>
    </>
  );
}
