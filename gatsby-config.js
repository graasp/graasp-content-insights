/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

require('dotenv').config({
  path: `.env.${env}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Graasp Desktop - A Cross-Platform Desktop Client for Education`,
    author: {
      name: `Graasp`,
    },
    description: `Graasp Desktop is a free, cross-platform desktop client for the Graasp ecosystem.`,
    keywords: [
      'education',
      'graasp',
      'elearning',
      'e-learning',
      'interactive',
      'collaborative',
      'learning',
      'offline',
      'analytics',
    ],
    siteUrl: 'https://desktop.graasp.org',
    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `get-started`,
      // `pricing`,
      // `call-to-action`,
      // `screenshots`,
      // `testimonials`,
      // `subscribe`,
    ],

    /* Configure the navigation menu */
    menuItems: [
      { path: 'features', label: 'Features' },
      { path: 'get-started', label: 'Get Started' },
      // { path: 'pricing', label: 'Pricing' },
      // { path: 'screenshots', label: 'Screenshots' },
      // { path: 'testimonials', label: 'Testimonials' },
      // { path: 'subscribe', label: 'Subscribe' },
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      {
        service: `Facebook`,
        url: `https://www.facebook.com/graasp`,
        fa: `facebook`,
      },
      {
        service: `Twitter`,
        url: `https://twitter.com/graasp`,
        fa: `twitter`,
      },
      {
        service: `GitHub`,
        url: `https://github.com/graasp/graasp-desktop`,
        fa: `github`,
      },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.svg`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/footer-logo.png`,
      text: `A free, cross-platform desktop client for the Graasp ecosystem.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `1600 Amphitheatre Parkway`,
      line2: `Mountain View, CA`,
      line3: `94043 US`,
    },
    contacts: [
      { text: `contact@graasp.org`, url: `mailto:contact@graasp.org` },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-smoothscroll`,
    `react-scrollspy`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GATSBY_GA_TRACKING_ID,
          anonymize: true,
        },
      },
    },
  ],
};
