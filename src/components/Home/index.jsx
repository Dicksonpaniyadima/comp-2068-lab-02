import React from 'react';
import Header from '../shared/Header';
import Btn from '../shared/Btn';

// You need to import your shared header...

const Home = () => {
  return (
    <>
      <Header title="This is my personal React site" />
        <Btn link="/About" label="click here to go to about page"/>
    </>
  );
}
 
export default Home;  