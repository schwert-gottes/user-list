import { Layout } from "@/layout";
import { UserList } from "@/views/home";
import { users } from "@/constants/users";
import type { User } from "@/types/user";

export async function metadata() {
  const faviconUrl = "/favicon.ico";
  return {
    metadataBase: new URL("https://test.com"),
    title: "Users List",
    description:
      "Browse our comprehensive list of users with detailed profiles including their roles, descriptions, and professional information.",
    icons: {
      icon: [
        {
          url: faviconUrl,
          href: faviconUrl,
        },
      ],
    },
    openGraph: {
      url: `https://test.com/`,
      title: "Users List",
      description: "List of users with their details",
      siteName: "StartHub Academy",
      locale: "en_EN",
      images: [
        {
          url: faviconUrl,
          width: 800,
          height: 600,
          alt: "favicon",
        },
      ],
    },
    alternates: {
      canonical: "https://test.com/",
    },
  };
}

const Page = async () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Users List",
    image: "/favicon.ico",
    description:
      "Browse our comprehensive list of users with detailed profiles including their roles, descriptions, and professional information.",
    url: "https://test.com/",
    itemListElement: users.map((user: User) => ({
      "@type": "ListItem",
      position: user?.id,
      item: {
        "@type": "Person",
        name: user?.name,
        jobTitle: user?.job,
        description: user?.description,
        image: user?.image,
      },
    })),
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout>
        <div className="mx-4">
          <UserList />
        </div>
      </Layout>
    </div>
  );
};

export default Page;
