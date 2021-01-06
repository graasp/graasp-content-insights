import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import content from '../../content/hero.yaml';

export default () => {
  return (
    <section id="hero">
      <div className="row">
        <div className="twelve columns">
          <div className="hero-text">
            <h1 className="responsive-headline">{content.headline}</h1>
            <p>{content.body}</p>
          </div>

          <div className="flex-center downloads">
            <div className="flex-center horizontal">
              <img
                src={content.github}
                alt=""
                className="column platform-img"
              />
              <a
                href="https://github.com/graasp/graasp-insights"
                className="button full-width"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
                {` ${content.button1.label}`}
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={content.image} alt="" className="animated fadeInUpBig" />
        </div>
      </div>
    </section>
  );
};
