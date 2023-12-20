import React from 'react';
import HotelPage from '../pages/HotelPage';

export default {
  title: 'Pages/HotelPage',
  component: HotelPage,
};

const generateHotelData = (count) => {
    const hotels = [];
    for (let i = 1; i <= count; i++) {
      hotels.push({
        id: i,
        name: `Hotel ${i}`,
        location: `Location ${i}`,
        price: `$${Math.floor(Math.random() * 200) + 50}/night`,
      });
    }
    return hotels;
  };

const Template = (args) => <HotelPage {...args} />;

export const HotelPageWithHotels = Template.bind({});
HotelPageWithHotels.args = {
  hotelsData: generateHotelData(5),
};
HotelPageWithHotels.storyName = 'Hotel Page with Hotels';

export const HotelPageWithoutHotels = Template.bind({});
HotelPageWithoutHotels.args = {
  hotelsData: [], 
};
HotelPageWithoutHotels.storyName = 'Hotel Page without Hotels';


