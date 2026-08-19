import { createFileRoute } from "@tanstack/react-router";
import { Section, TitrePage } from "@/components/site/Ui";

const TITRE = "Politique de confidentialité — La Poterie des Oiseaux Bleus";
const DESC =
  "Comment sont traitées vos données lorsque vous nous écrivez ou passez commande sur le site de La Poterie des Oiseaux Bleus, atelier de céramique à Strasbourg.";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/confidentialite" }],
  }),
  component: Confidentialite,
});

function Confidentialite() {
  return (
    <>
      <TitrePage titre="Politique de confidentialité" />
      <Section className="max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
        <div>
          <h2 className="font-serif text-2xl text-foreground">Données collectées</h2>
          <p className="mt-3">
            Les formulaires de contact et de commande collectent uniquement les informations que
            vous saisissez : nom, adresse e-mail, type de pièces, quantité et message. Elles servent
            exclusivement à répondre à votre demande.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground">Conservation</h2>
          <p className="mt-3">
            Les échanges liés à une commande sont conservés le temps nécessaire au suivi, puis aux
            obligations comptables. Les simples demandes d'information sont supprimées après
            traitement.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground">Cookies</h2>
          <p className="mt-3">
            Le site n'utilise que des cookies techniques nécessaires à son fonctionnement. Les
            contenus externes (carte, Instagram) ne se chargent qu'avec votre accord.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground">Vos droits</h2>
          <p className="mt-3">
            Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression
            de vos données en écrivant à bonjour@poteriedesoiseauxbleus.fr.
          </p>
        </div>
      </Section>
    </>
  );
}
