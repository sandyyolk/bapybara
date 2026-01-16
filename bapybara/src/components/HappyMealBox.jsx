import React, { Suspense } from 'react';

// Use React.lazy to dynamically import Spline to ensure client-side rendering compatibility
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function HappyMealBox() {
  return (
    <div className="spline-container">
      <Suspense fallback={<div className="loading">Loading 3D Experience...</div>}>
        <Spline scene="https://prod.spline.design/XuOdatxbQlyAYF2c/scene.splinecode" />
      </Suspense>

      <style>{`
        .spline-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        
        .loading {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgba(255, 255, 255, 0.5);
            font-family: var(--font-heading, sans-serif);
        }
      `}</style>
    </div>
  );
}
