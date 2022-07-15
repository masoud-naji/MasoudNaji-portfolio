import React from 'react';

// import classes from '../Styles/Card.module.css';

const Card = (props) => {
  // return <div className={`${classes.card} ${props.className}`} >{props.children}</div>;
  return <div>{props.children}</div>
};

export default Card;