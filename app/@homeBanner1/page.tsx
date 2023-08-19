"use client";

import { useState } from "react";

export default function HomeBanner1() {
  const [showError, setShowError] = useState(false);

  if (showError) throw new Error("Home banner 1 failed");

  return (
    <div className="w-full bg-blue-200 p-4">
      <h1>Home Banner 1</h1>
      <button onClick={() => setShowError(true)}>Throw error</button>
    </div>
  );
}
