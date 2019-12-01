import React from 'react';

const Deck = (props) => {
  console.log(props);
  return (
    <section className="deck">
           <header><h2>{props.deck.title}</h2></header>
           {React.Children.map(props.children, child =>
    React.cloneElement(child, { card: props.deck.records[0] }))}
            {/* {React.Children.map(props.children, child => 
          (child, {card: props.deck.records} ))} */}

          {/* <ul>
            {props.deck.records.map(card,i => {
              <li>
                {card[i]}
              </li>
            })}
          </ul> */}
    </section>
  )
          }

export default Deck;