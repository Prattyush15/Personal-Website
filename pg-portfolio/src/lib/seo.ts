import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  title: "Prattyush Giriraj — Portfolio",
  description: "Product and data-minded builder who ships clear value with simple UX. Product Manager and Data Engineer with experience at GE Aerospace and Fifth Third Bank.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prattyush.dev',
    siteName: 'Prattyush Giriraj — Portfolio',
    title: 'Prattyush Giriraj — Portfolio',
    description: 'Product and data-minded builder who ships clear value with simple UX.',
    images: [
      {
        url: 'https://prattyush.dev/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prattyush Giriraj Portfolio',
      },
    ],
  },
  twitter: {
    handle: '@prattyush',
    site: '@prattyush',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'author',
      content: 'Prattyush Giriraj',
    },
    {
      name: 'keywords',
      content: 'Product Manager, Data Engineer, Portfolio, UX, Product Development, Data Analytics',
    },
  ],
};

export default SEO;
