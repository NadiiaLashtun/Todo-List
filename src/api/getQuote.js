// Get Quote
export const getQuote = async () => {
  const response = await fetch('https://gary.rest/api');

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();
  return data.quote;
};
