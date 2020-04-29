
const RandomQuote = () => {
  const textArray = [
    'beach',
    'forest',
    'moutain',
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
