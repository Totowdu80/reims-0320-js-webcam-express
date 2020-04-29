import React from 'react';

const RandomQuote = () => {
  const textArray = [
    'beach',
    'forest',
    'moutain',
    'water',
    'harbor',
    'bay',
    'coast',
    'resort',
    'island',
    'lake',
    'landscape',
  ];
  const randomIndex = Math.floor(Math.random() * textArray.length);
  const randomElement = textArray[randomIndex];
  return randomElement;
};

export default RandomQuote;
