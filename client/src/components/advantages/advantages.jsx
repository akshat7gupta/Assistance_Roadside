import './advantages.scss';

import React from 'react';
import imageIcons from '../icons/image-icons';
import Advantage from './advantage/advantage';
import AdvantagesHeader from './header/advantages-header';

const advantages = [
  {
    title: 'Satisfied Customers',
    text: 'We work with clients from all over the world and always strive to deliver fast and quality service.',
    img: imageIcons.dealership,
  },
  {
    title: 'Low Prices',
    text: 'We help you find the lowest and most affordable prices for the transportation service you need.',
    img: imageIcons.crane,
  },
  {
    title: 'Safety',
    text: 'As a provider of transportation services and roadside assistance, we guarantee honesty and integrity.',
    img: imageIcons.safety,
  },
];

const Advantages = () => (
  <section className="advantages">
    <AdvantagesHeader title="Why Choose Us" />
    <article className="advantages-wrapper">
      {advantages.map(({ title, text, img }) => (
        <Advantage
          title={title}
          text={text}
          img={img}
        />
      ))}
    </article>
  </section>
);

export default Advantages;
