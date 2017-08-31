import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ loading }) => (
  <footer className={`Footer ${loading ? 'bottom' : ''}`.trim()}>
    <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
      powered by News API
    </a>
  </footer>
);

Footer.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Footer;
