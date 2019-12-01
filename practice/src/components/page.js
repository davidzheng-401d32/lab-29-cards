import React from 'react';
import Deck from './deck.js';
import Card from './card.js';

const Page = (props) => {
  // console.log({props});
  const content = props.content || [];
  return (
    <div>
      {content.map( (deck,i) => (
        <Deck deck={deck}>
          <Card />
        </Deck >
      ))}
    </div>
  );
};
export default Page;