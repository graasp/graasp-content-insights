import React from 'react';

import Layout from '../components/layout';

import Hero from '../components/hero';
import Features from '../components/features';
import Pricing from '../components/pricing';
import CalltoAction from '../components/call-to-action';
import Screenshots from '../components/screenshots';
import Testimonials from '../components/testimonials';
import Subscribe from '../components/subscribe';
import LearnMore from '../components/learn-more';

import { useSiteMetadata } from '../hooks/use-site-metadata';
import Seo from '../components/seo';

export default () => {
  const { sections } = useSiteMetadata();
  const availableSections = {
    hero: Hero,
    features: Features,
    pricing: Pricing,
    'call-to-action': CalltoAction,
    screenshots: Screenshots,
    testimonials: Testimonials,
    subscribe: Subscribe,
    'learn-more': LearnMore,
  };

  return (
    <>
      <Layout>
        <Seo />
        {sections.map((section) => {
          const Tagname = availableSections[section];
          return <Tagname />;
        })}
      </Layout>
    </>
  );
};
