import './advantages-header.scss';

import React from 'react';
import { string } from 'prop-types';

const AdvantagesHeader = ({ title }) => (
  <header className="advantages-header">
    <h1>{title}</h1>
  </header>
);

AdvantagesHeader.defaultProps = {
  title: 'Why Choose Us',
};

AdvantagesHeader.propTypes = {
  title: string,
};

export default AdvantagesHeader;
