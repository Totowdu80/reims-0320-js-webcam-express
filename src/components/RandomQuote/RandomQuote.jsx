
const RandomQuote = () => {
  const textArray = [
    'beach',
    'forest',
    'mountain',
  ];
  const randomIndex = Math.floor(Math.random() * textArray.length);
  const randomElement = textArray[randomIndex];
  return randomElement;
};

export default RandomQuote;

//    'water',
//'harbor',
//'bay',
//'coast',
//'resort',
//'island',
//'lake',
//'landscape',
