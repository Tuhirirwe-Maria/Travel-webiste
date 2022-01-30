import React from 'react';
import './Services.css'

function Services_CardItems(props) {
  return (
      <div>
          <div className='service_card'>
              <div className='icon'>
              {props.icon}
              </div>
          <div className='service_cardContent'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
          </div>
          </div>
      </div>
  );
}

export default Services_CardItems;
