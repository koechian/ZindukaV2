import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utilities/sanity/client";
import Link from "next/link";

const ARTICLE_QUERY = `*[_type == "article" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function ArticlePage({ params }) {
  const article = await client.fetch(ARTICLE_QUERY, params, options);
  const articleImageUrl = article.image
    ? urlFor(article.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {articleImageUrl && (
        <img
          src={articleImageUrl}
          alt={article.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{article.title}</h1>
      <div className="prose">
        <p>Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(article.body) && <PortableText value={article.body} />}
      </div>
    </main>
  );
}
