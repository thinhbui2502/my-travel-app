import React from 'react';
import Hotel from './Hotel.js';

export default {
  title: 'Components/Hotel',
  component: Hotel,
};

const Template = (args) => <Hotel {...args} />;

export const HotelCard = Template.bind({});
HotelCard.args = {
  name: 'Luxury Hotel',
  location: 'City Center',
  price: '$200/night',
};
