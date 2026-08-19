import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import oiseau from "@/assets/oiseau-bleu.png";

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-16 sm:py-20 ${className}`}>{children}</section>
  );
}

export function TitrePage({
  surtitre,
  titre,
  chapeau,
}: {
  surtitre?: string;
  titre: string;
  chapeau?: string;
}) {
  return (
    <header className="surface-cocon border-b border-border/60">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-24">
        {surtitre && (
          <p className="apparait text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {surtitre}
          </p>
        )}
        <h1 className="apparait mt-4 font-serif text-4xl leading-tight sm:text-5xl">{titre}</h1>
        {chapeau && (
          <p className="apparait mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {chapeau}
          </p>
        )}
      </div>
    </header>
  );
}

export function Separateur() {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <span className="h-px w-16 bg-border" />
      <img src={oiseau} alt="" width={28} height={28} loading="lazy" className="h-6 w-6 opacity-60" />
      <span className="h-px w-16 bg-border" />
    </div>
  );
}

export function Bouton({
  to,
  href,
  children,
  variante = "plein",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variante?: "plein" | "contour";
}) {
  const classes =
    variante === "plein"
      ? "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
      : "inline-flex items-center justify-center rounded-full border border-foreground/25 px-6 py-3 text-sm text-foreground transition-colors hover:bg-secondary";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={classes}>
      {children}
    </Link>
  );
}

export function Carte({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-border bg-card p-7 ${className}`}>{children}</div>
  );
}
