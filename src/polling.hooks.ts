import React from 'react';

export const usePolling = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Simulate calls to api and count it
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { count };
};