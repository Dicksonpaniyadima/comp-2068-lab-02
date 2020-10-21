import React from 'react';
import { Button } from 'react-bootstrap';


const Btn = ({label, link}) => {

    return(
            <Button href={link}>{label}</Button>  
    );   
};

export default Btn;