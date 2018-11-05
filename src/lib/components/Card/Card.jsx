import React from 'react'
import PropTypes from 'prop-types'
import './Card.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="react-base__card">
      <img src={image} alt={title} title={title} />
      <div className="react-base__card-content">
      <h1>{title}</h1>
      <p>{description}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Card

