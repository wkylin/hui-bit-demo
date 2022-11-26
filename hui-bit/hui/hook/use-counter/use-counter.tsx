import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 2)
  return { count, increment}
}
