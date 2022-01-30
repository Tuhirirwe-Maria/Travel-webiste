import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({idName , path, text, label }) {
  return (
    <div>
      <div className='cards__item'>
        <Link className='cards__item__link' to={path}>
          <div className='cards__item__pic-wrap' id={idName} data-category={label}>
         
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardItem