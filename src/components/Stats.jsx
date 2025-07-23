import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const storedViews = Number(localStorage.getItem('views') || 0);
    const newViews = storedViews + 1;
    localStorage.setItem('views', newViews);
    setViews(newViews);
  }, []);

  return (
    <div className="fixed bottom-2 right-2 bg-tertiary text-white py-1 px-3 rounded shadow-card text-xs">
      Views: {views}
    </div>
  );
};

export default Stats;
