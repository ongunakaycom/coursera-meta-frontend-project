import { useState } from 'react';

export const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);

  const submit = async (data) => {
    setLoading(true);

    // Simulate an API call
    const response = Math.random() > 0.5 ? 'success' : 'error';
    const message = response === 'success'
      ? 'Your message has been sent successfully!'
      : 'Something went wrong, please try again later.';

    setLoading(false);
    return { type: response, message };
  };

  return { submit, isLoading };
};
