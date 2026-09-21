import { useEffect } from "react";
import { useLocation } from "wouter";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
};

const SITE_URL = "https://www.cnsousatec.com.br";
const DEFAULT_DESCRIPTION =
  "Manutenção elétrica, hidráulica e eletrônica em Brasília e no Distrito Federal. Fale com a Cnsousatec para solicitar um orçamento.";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
}: SeoProps) {
  const [location] = useLocation();
  const currentPath = location || path;

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${currentPath === "/" ? "/" : currentPath}`;
    const pageTitle =
      title ??
      "Manutenção Elétrica, Hidráulica e Eletrônica 24h em Brasília | Cnsousatec";
    document.title = pageTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow");
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:image", `${SITE_URL}/logo-cnsousatec-glow.png`);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaId = "cnsousatec-local-business-schema";
    let schema = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!schema) {
      schema = document.createElement("script");
      schema.id = schemaId;
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "CNSOUSATEC",
      url: SITE_URL,
      telephone: "+55 61 99274-3428",
      image: `${SITE_URL}/logo-cnsousatec-glow.png`,
      areaServed: ["Brasília", "Distrito Federal", "Águas Lindas de Goiás"],
      serviceType: [
        "Manutenção elétrica",
        "Manutenção hidráulica",
        "Manutenção eletrônica",
      ],
    });
  }, [currentPath, description, title]);

  return null;
}
