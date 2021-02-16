import React from 'react';
import PropTypes from 'prop-types';

const ContentContainer = ({ heading, content }) => {
  return (
    <section id="hero">
      <div className="row">
        <div className="twelve columns">
          <div className="hero-text">
            <h1 className="responsive-headline">{heading}</h1>
            <div style={{ padding: '25px', textAlign: 'left' }}>
              <div>{content}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContentContainer.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ContentContainer;
