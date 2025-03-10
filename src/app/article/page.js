export const dynamic = 'force-dynamic';

const BASE_URL = "https://api.json-generator.com";
const API_URL = BASE_URL + "/templates/L0Wo66RzmkOi/data";

export default async function ArticlePage() {
  const data = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: "Bearer qbxqx0vjd62pmwgi1eu31edj6kxqrshefotxgqso"
    }
  });
  const dataJSON = await data.json();
  const article = dataJSON[0];

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.source}</p>
      <p>{article.pubDate}</p>
      <p>{article.content}</p>
    </div>
  );
}
