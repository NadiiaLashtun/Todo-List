import { useState, useEffect } from 'react';
import { getQuote } from '../api/getQuote';

export const useFetch = () => {
  const [quote, setQuote] = useState('Your only limit is your mind');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const quoteText = await getQuote();
      setQuote(quoteText);
    } catch (error) {
      console.warn('Error fetching data', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  return { quote, isLoading, error, fetchData };
};
