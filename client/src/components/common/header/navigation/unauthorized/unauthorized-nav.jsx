import React from 'react';

import ListItem from '../list-item/list-item';
import ButtonListItem from '../button-list-item/button-list-item';

const UnauthorizedNav = () => (
  <ul>
    <ListItem link="/home" text="Home" />
    <ListItem link="/about" text="About" />
    <ListItem link="/services" text="Services" />
    <ListItem link="/contact" text="Contact" />
    <ButtonListItem link="/login" text="Login" />
  </ul>
);

export default UnauthorizedNav;
