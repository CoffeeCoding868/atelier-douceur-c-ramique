import { Link } from "@tanstack/react-router";
import { useState } from "react";
import oiseau from "@/assets/oiseau-bleu.png";

const LIENS = [
  { to: "/", label: "Accueil" },
  { to: "/notre-histoire", label: "Notre histoire" },
  { to: "/nos-creatrices", label: "Nos créatrices" },
  { to: "/boutique", label: "Boutique" },
  { to: "/commander", label: "Commander" },
  { to: "/journal", label: "Journal" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOuvert(false)}>
          <img src={oiseau} alt="Petit oiseau bleu dessiné à la main" width={40} height={40} className="h-9 w-9 opacity-80" />
          <span className="font-serif text-lg leading-tight sm:text-xl">
            La Poterie
            <span className="block text-xs uppercase tracking-[0.28em] text-muted-foreground sm:text-[0.7rem]">
              des Oiseaux Bleus
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {LIENS.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={ouvert}
          onClick={() => setOuvert((o) => !o)}
          className="rounded-full border border-border px-4 py-2 text-sm lg:hidden"
        >
          {ouvert ? "Fermer" : "Menu"}
        </button>
      </div>

      {ouvert && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          {LIENS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOuvert(false)}
              className="block border-b border-border/60 py-3 text-base text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
