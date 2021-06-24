import Head from "next/head";

const HtmlHead = ({ title, description, keywords }) => {
  return (
    <Head>
      <link rel="preconnect" href="https://app.snipcart.com" />
      <link rel="preconnect" href="https://cdn.snipcart.com" />
      <title>{title}</title>
      <meta key="description" value={description} />
      <meta key="keywords" value={keywords} />
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
      />
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
      ></script>
    </Head>
  );
};

HtmlHead.defaultProps = {
  title: "The Big Store | Ecommerce boilerplate",
  description:
    "Boilerplate for e-commerce websites using Next.js, Strapi, Snipcart & Sendcloud",
  keywords: "CMS, ecommerce, shop, nextjs",
};

export default HtmlHead;
