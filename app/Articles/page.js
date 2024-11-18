import Link from "next/link";
import { client } from "@/utilities/sanity/client";

const ARTICLES_QUERY = `*[
  _type == "article"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const articles = await client.fetch(ARTICLES_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {articles.map((article) => (
          <li className="hover:underline" key={article._id}>
            <Link href={`/${article.slug.current}`}>
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
