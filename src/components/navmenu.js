import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Scrollspy from 'react-scrollspy';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export default function () {
  const [isVisible, setVisibility] = useState(false);

  const { menuItems } = useSiteMetadata();

  let showStyle = null;
  if (isVisible) {
    showStyle = { transform: 'scaleY(1)' };
  } else {
    showStyle = null;
  }

  return (
    <nav id="nav-wrap">
      <button
        id="toggle-btn"
        type="button"
        href="/#"
        title="Menu"
        onClick={() => setVisibility(!isVisible)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <Scrollspy
        className="nav mobile"
        style={showStyle}
        items={menuItems.map((a) => a.path)}
        currentClassName="current"
        offset={-100}
      >
        {menuItems.map((value, index) => {
          if (value.path === 'user-guide') {
            return (
              <li key={String(index)}>
                <button type="button">
                  <a
                    href="https://github.com/graasp/graasp-insights/blob/master/docs/introduction.md"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'inherit' }}
                  >
                    {value.label}
                  </a>
                </button>
              </li>
            );
          }
          return (
            <li key={String(index)}>
              <button
                type="button"
                onClick={() => {
                  scrollTo(`#${value.path}`);
                  setVisibility(0);
                }}
              >
                {value.label}
              </button>
            </li>
          );
        })}
      </Scrollspy>
    </nav>
  );
}
