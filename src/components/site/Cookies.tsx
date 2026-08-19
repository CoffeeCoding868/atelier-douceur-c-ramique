import { useEffect, useState } from "react";

const CLE = "pob-cookies";

export function BandeauCookies() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CLE)) setVisible(true);
  }, []);

  if (!visible) return null;

  const repondre = (valeur: string) => {
    localStorage.setItem(CLE, valeur);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-border bg-card p-5 shadow-douce sm:inset-x-auto sm:right-5 sm:max-w-sm">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Ce site n'utilise que des cookies nécessaires à son bon fonctionnement. La carte et les
        contenus Instagram ne se chargent qu'avec votre accord.
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => repondre("accepte")}
          className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          J'accepte
        </button>
        <button
          type="button"
          onClick={() => repondre("refuse")}
          className="rounded-full border border-border px-4 py-2 text-sm"
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
