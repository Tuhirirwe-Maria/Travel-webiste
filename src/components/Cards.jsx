import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              idName = "img-9"
              
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/contact'
            />
            <CardItem
              idName = "img-2"
              
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/contact'
            /> 
          </ul>
          <ul className='cards__items'>
            <CardItem
              idName = "img-3"
              
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/contact'
            />
            <CardItem
            idName = "img-4"
            
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/contact'
            />
            <CardItem
              idName = "img-8"
              
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;