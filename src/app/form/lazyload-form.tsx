'use client'

// LazyLoadedForm.tsx
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

// Components to lazy load
const components = {
    ReactHookFormZod: dynamic(() => import('./react-hook-form-zod').then(mod => mod.ReactHookFormZod), { loading: () => <p>Loading...</p>, ssr: false }),
    ReactHookForm: dynamic(() => import('./react-hook-form').then(mod => mod.ReactHookForm), { loading: () => <p>Loading...</p>, ssr: false }),
    // Add other components here

};

// TypeScript types
type LazyLoadedFormProps = {
    componentName: keyof typeof components;
};



export const LazyLoadedForm: React.FC<LazyLoadedFormProps> = ({ componentName }) => {
    // should component be loaded
    const [loadComponent, setLoadComponent] = useState(false);
    // get component from components object
    const DynamicComponent = components[componentName];

    return (
        <>
            {/* Show button only when the component isnt loaded */}
            {!loadComponent && <Button onClick={() => setLoadComponent(true)}>Load Form</Button>}

            {/* Show component only when button is clicked */}
            {loadComponent && <DynamicComponent />}
        </>
    );
};