import { SEO } from "astro-seo";
import Footer from "@components/footer.astro";
import Navbar from "@components/navbar/navbar.astro";
import { Astro, makeTitle, canonicalURL, resolvedImageWithDomain } from "./Layout.astro";

<Fragment>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />

{/** <link rel="preload" as="image" href=\\{src\\} alt="Hero" /> */}
<SEO title={makeTitle} description="Astroship is a starter website template for Astro built with TailwindCSS." canonical={canonicalURL} twitter={{
creator: "@surjithctly",
site: "@web3templates",
card: "summary_large_image",
}} openGraph={{
basic: {
url: canonicalURL,
type: "website",
title: `Astroship - Starter Template for Astro`,
image: resolvedImageWithDomain,
},
image: {
alt: "Astroship Homepage Screenshot",
},
}} />
</head>
<body>
<Navbar />
<slot />
<Footer />
<style is: global>{`
      /* Improve Page speed */
      /* https://css-tricks.com/almanac/properties/c/content-visibility/ */
      img {
        content-visibility: auto;
      }
    `}</style>
</body></html>
</Fragment>;
