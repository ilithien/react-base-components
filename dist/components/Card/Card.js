import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

var Card = function Card(_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description;

  return React.createElement(
    'div',
    { className: 'react-base__card' },
    React.createElement('img', { src: image, alt: title, title: title }),
    React.createElement(
      'div',
      { className: 'react-base__card-content' },
      React.createElement(
        'h1',
        null,
        title
      ),
      React.createElement(
        'p',
        null,
        description
      )
    )
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Card;