import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('../pages/LazyLoadedComponent'));

const Lazy = () => {
    return (
        <div>
            <h1>Loading a component lazily:</h1>
            <Suspense fallback="Loading........">
                <LazyComponent />
            </Suspense>
        </div>
    );
};

export default Lazy;