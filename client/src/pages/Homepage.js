import React from 'react';
import Intro from '../components/Intro';
import Categories from '../components/Categories';
import Call from '../components/Call';

export default function Homepage() {
  return (
    <React.Fragment>
      <Intro />
      <Categories />
      <Call />
    </React.Fragment>
  );
}
