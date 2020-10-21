import React from 'react';
import Styles from './styles';

const Para = ({text}) => {
  return (
    <Styles.Para>
      <p>{text}</p>
    </Styles.Para>
  );
}
 
export default Para;