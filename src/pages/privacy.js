/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Layout from '../components/layout';
import ContentContainer from '../components/content-container';

const PrivacyPolicy = () => {
  const heading = 'Privacy Policy';

  const content = (
    <p>
      Graasp Insights is developed and maintained by the{' '}
      <a href="https://graasp.org" target="_blank" rel="noreferrer">
        Graasp Association
      </a>{' '}
      and supported by the École Polytechnique Fédérale de Lausanne (EPFL), a
      federal public university in Switzerland. Graasp Insights complies with
      the{' '}
      <a
        href="https://www.epfl.ch/about/presidency/presidents-team/legal-affairs/epfl-privacy-policy/"
        target="_blank"
        rel="noreferrer"
      >
        privacy policies
      </a>{' '}
      of EPFL, and with{' '}
      <a
        href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679"
        target="_blank"
        rel="noreferrer"
      >
        GDPR
      </a>
      . We use Google Analytics on this landing page on an anonymized basis, and
      do not share any data with third parties. The Graasp Association&apos;s
      products may be used in Swiss or European digital education research
      projects in compliance with the{' '}
      <a
        href="https://www.swissuniversities.ch/fileadmin/swissuniversities/Dokumente/Organisation/SUK-P/SUK_P-2/OpenScience_Strategy_v2.5_clean.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Swiss
      </a>{' '}
      and{' '}
      <a
        href="https://ec.europa.eu/info/research-and-innovation/strategy/goals-research-and-innovation-policy/open-science_en"
        target="_blank"
        rel="noreferrer"
      >
        European
      </a>{' '}
      Open Science strategies.
    </p>
  );

  return (
    <Layout>
      <ContentContainer heading={heading} content={content} />
    </Layout>
  );
};

export default PrivacyPolicy;
