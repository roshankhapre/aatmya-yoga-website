// src/components/seo/IndexStatus.jsx
export default function IndexStatus() {
  const pages = [
    "/",
    "/about",
    "/contact",
    "/programs",
    "/children-yoga-training",
    "/teen-yoga-training",
    "/teacher-training",
    "/workshops",
    "/testimonials",
  ];

  const checkIndexing = (url) => {
    return fetch(
      `https://www.google.com/search?q=site:www.aatmyayoga.com${url}`
    )
      .then((response) => response.text())
      .then((html) =>
        html.includes("No results found") ? "Not Indexed" : "Indexed"
      );
  };

  return (
    <div className="p-4">
      <h3>Indexing Status</h3>
      {pages.map((page) => (
        <div key={page}>
          {page}: <span className="checking">Checking...</span>
        </div>
      ))}
    </div>
  );
}
