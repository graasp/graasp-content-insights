import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import content from '../../content/learn-more.yaml';

export default () => (
  <section id="learn-more">
    <div className="row">
      <div className="twelve columns">
        <div className="hero-text">
          <h1 className="responsive-headline">{content.headline}</h1>
        </div>
        <div className="flex-center downloads">
          <div className="flex-center horizontal">
            <a
              href={content.button1.to}
              className="button full-width"
              style={{ margin: '10px' }}
              download
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" />
              {` ${content.button1.label} `}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
