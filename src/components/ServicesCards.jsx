import React from 'react';
import ServicesCardItems from './ServicesCardItems';
import './Services.css'
import { ImAirplane } from 'react-icons/im';
import { BsHouseFill } from 'react-icons/bs';
import { AiFillCar} from 'react-icons/ai';
import { MdCelebration } from 'react-icons/md';
import { SiVisa } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';


function ServicesCards() {
  return (
      
  <div className='Service_cards'>
      <div>
      <ServicesCardItems
      icon = {<ImAirplane />}
      title = "Flight Reservations"
      content = " Preference for any particular airline is of course taken into consideration whenever reservations are made. "
      />
      <ServicesCardItems
      icon = {<BsHouseFill />}
      title = "Accommodation"
      content = "Customers have choice of their specific accommodation needs, no matter where – regionally, nationally, and internationally. Certain corporate discounts are available, with preferred accommodation establishments "
      />
      <ServicesCardItems
      icon = {<AiFillCar />}
      title = "Car Hire"
      content = " A mutually beneficial relationship exists with Europcar, Budget and Avis from with special rates which are passed onto our customers. However, should the customer prefer any other car rental company, we shall provide "
      />
      </div>
      <div>
      <ServicesCardItems
      icon = {<MdCelebration/>}
      title = "Specials"
      content = " Airline packages or any other specials are passed on to our customers. As a common practice at Mars Travel, we communicate the “specials” to the customers whenever the specials are received from the airlines. "
      />
      <ServicesCardItems
      icon = {<SiVisa />}
      title = "Visas"
      content = "Mars Travel has a department which offers professional and timeous visa services. The department also advises clients regarding visa requirements and/or any other information relevant to a specific destination"
      />
      <ServicesCardItems
      icon = {<BsPhoneVibrate />}
      title = "Emergency Services"
      content = "Mars Travel provides a 24 hour, 7 day a week emergency service to all customers"
      />
      </div>
  </div>
  );
}

export default ServicesCards;
