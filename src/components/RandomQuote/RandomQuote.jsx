
const RandomQuote = () => {
  const textArray = [
    'beach',
    'forest',
    'mountain',
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
