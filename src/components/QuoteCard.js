import React from 'react';




function QuoteCards({ charactere }) {
  return (
      <figure className="QuoteCard">
      <img src={charactere.image} alt={charactere.character} />
      <figcaption>
        <blockquote>{charactere.quote}</blockquote>
        <cite>{charactere.character}</cite>
      </figcaption>
    </figure>
    )



}

export default QuoteCards;
