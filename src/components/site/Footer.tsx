import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-serif text-xl">La Poterie des Oiseaux Bleus</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Atelier-boutique de céramique artisanale à Strasbourg, quartier Krutenau. Pièces
            façonnées et cuites sur place par Lisa et Doriane.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Nous trouver</h3>
          <address className="mt-3 not-italic text-sm leading-relaxed">
            5 quai Charles Altorffer
            <br />
            67000 Strasbourg
          </address>
          <a href={SITE.maps} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-primary underline underline-offset-4">
            Voir sur la carte
          </a>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Horaires</h3>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            {SITE.horaires.map((h) => (
              <li key={h.jour}>
                <span className="text-foreground">{h.jour}</span> · {h.heures}
              </li>
            ))}
            <li>Fermé les jours fériés</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Suivre l'atelier</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={SITE.instaLisa} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                @lisa.debat
              </a>
            </li>
            <li>
              <a href={SITE.instaDoriane} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                @deuxfoisdeuxmains
              </a>
            </li>
            <li>
              <a href={SITE.minuit} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                Collectif Minuit Céramique
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} La Poterie des Oiseaux Bleus — fait main à Strasbourg</p>
          <div className="flex gap-4">
            <Link to="/mentions-legales" className="underline underline-offset-4">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="underline underline-offset-4">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
