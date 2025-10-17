// app/examples/client-state.tsx  (CLIENT component)
'use client';

import { useState, useEffect } from 'react';

export default function IncrementButton() {
  const [count, setCount] = useState(0);

  // optional: mimic mount effects
  useEffect(() => {
    // e.g., read from localStorage, analytics, etc.
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <p>Count: {count}</p>
	  <div className="flex flex-row gap-2">
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
	  <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
	  </div>
    </div>
  );
}