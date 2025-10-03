// src/components/seo/PageMeta.jsx - CORRECTED VERSION
import { Helmet } from "react-helmet-async";

export default function PageMeta({
  title,
  description,
  canonical,
  schema,
  noindex = false,
}) {
  return (
    <Helmet>
      {/* ✅ Only set title if explicitly provided */}
      {title && <title>{title}</title>}

      {/* ✅ Only set description if explicitly provided */}
      {description && <meta name="description" content={description} />}

      {/* ✅ Canonical is always safe */}
      <link rel="canonical" href={canonical} />

      {noindex && <meta name="robots" content="noindex" />}

      {/* Open Graph - only if provided */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />

      {/* Twitter - only if provided */}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}

      {/* ✅ Schema Markup - always include if provided */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
