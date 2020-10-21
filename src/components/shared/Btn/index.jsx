import React from 'react';
import { Button } from 'react-bootstrap';
import Styles from './styles';


const Btn = ({label, link}) => {

    return(
        <Styles.Btn>
         <Button href={link}>{label}</Button>
        </Styles.Btn>
              
    );   
};

export default Btn;