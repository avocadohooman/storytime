// app/examples/client-state.tsx  (CLIENT component)
'use client';

import { useState, useEffect } from 'react';

export default function ClientStateDemo() {
  const [count, setCount] = useState(0);

  // optional: mimic mount effects
  useEffect(() => {
    // e.g., read from localStorage, analytics, etc.
  }, []);

  return (
    <div className="space-y-2">
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}