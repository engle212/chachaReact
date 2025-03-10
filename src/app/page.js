export const dynamic = 'force-dynamic';
import Link from 'next/link';

const BASE_URL = "https://api.json-generator.com";
const API_URL = BASE_URL + "/templates/iPM1idaQlCwC/data";

export default async function IndexPage() {
  const data = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: "Bearer qbxqx0vjd62pmwgi1eu31edj6kxqrshefotxgqso"
    }
  });
  const dataJSON = await data.json();

  return (
    <div>
      <h1>Index!</h1>
      {dataJSON.map((item, index) => (
        <Link key={index} href={"/article"}>{item.title}</Link>
      ))}
    </div>
  );
}
