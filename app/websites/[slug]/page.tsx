import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { createClient } from "@/prismicio";

export async function generateStaticParams() {
  const client = createClient();
  const websites = await client.getAllByType("website");

  return websites.map((w) => ({
    slug: w.uid,
  }));
}

type WebsitePageType = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WebsitePage({ params }: WebsitePageType) {
  const { slug } = await params;
  const client = createClient();
  const website = await client.getByUID("website", slug);

  return (
    <main><WebsiteHeader website={website} /></main>
  );
}
