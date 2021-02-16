/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Layout from '../components/layout';
import ContentContainer from '../components/content-container';

const TermsOfService = () => {
  const heading = 'Terms of Service';

  const content = (
    <div>
      <p>
        By downloading and using Graasp Insights, you: (1) Confirm that you will
        not misuse the software, or help anyone else to do so, (2) Confirm that
        you will not use the software for illicit purposes, (3) Confirm that you
        are solely responsible for the datasets and results handled or generated
        by the application, (4) Accept that the Graasp Association and École
        Polytechnique Fédérale de Lausanne (EPFL) cannot be held liable for any
        damage resulting from your use of the software, including any loss of
        content and data, and (5) Accept that access to the software is provided
        to you “as is”, without any warranty, including as to its proper
        functioning and fitness for a particular purpose.
      </p>

      <p>
        These Terms of Service are governed by the laws of Switzerland. The
        legal jurisdiction for any dispute shall be in Lausanne, Switzerland.
        Please also refer to the Graasp Insights{' '}
        <a href="/disclaimer">Legal Disclaimer</a> and the EPFL websites{' '}
        <a
          href="https://www.epfl.ch/about/overview/regulations-and-guidelines/disclaimer/"
          target="_blank"
          rel="noreferrer"
        >
          disclaimer
        </a>
        .
      </p>
    </div>
  );

  return (
    <Layout>
      <ContentContainer heading={heading} content={content} />
    </Layout>
  );
};

export default TermsOfService;
