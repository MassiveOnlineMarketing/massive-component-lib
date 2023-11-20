// WebDesignStep.tsx
'use client'

import React, { useState, useEffect } from 'react'

import { UseFormRegister, FieldValues, DeepMap, FieldError } from 'react-hook-form';
import { Heading } from '@/components/typography';
import { CheckboxGroup, RadioGroup } from '@/app/modal/contact/contact-form';

// TypeScript types
type WebDesignStepProps = {
    register: UseFormRegister<FieldValues>;
    watch: (fieldName: string) => any;
    errors: DeepMap<FieldValues, FieldError>;
};

export const WebDesignStep: React.FC<WebDesignStepProps> = ({ register, watch, errors }) => {

    
    // Use for showing the other reason textarea
    const [showOtherReasonWebFunctionality, setShowOtherReasonWebFunctionality] = useState(false);
    const websiteFunctionaliteit = watch('websiteFunctionaliteit');

    useEffect(() => {
        if (Array.isArray(websiteFunctionaliteit)) {
            setShowOtherReasonWebFunctionality(websiteFunctionaliteit.includes('Een andere reden'));
        }
    }, [websiteFunctionaliteit]);



    return (
        <>
            <Heading level='h4' size='base' colorScheme='donker'>Heeft U al een website?</Heading>
            <RadioGroup data={HEEFT_WEBSITE} register={register} registerType="heeftWebsite" className='mt-3' />
            {watch('heeftWebsite') === 'Ja' && (
                <label className='flex flex-col rounded-xl border border-gray-200 mt-3'>
                    <textarea
                        className=' py-2 px-6 rounded-xl border-8 border-white'
                        placeholder="Uw website url..."
                        rows={1}
                        {...register('websiteURL')}
                    />
                </label>
            )}
            <p>{errors.heeftWebsite?.message}</p>

            <Heading level='h4' size='base' colorScheme='donker' className='mt-6'>Naar welke functionaliteit bent u op zoek?</Heading>
            <CheckboxGroup data={WEBSITE_FUNCTIONALITEIT} register={register} registerType="websiteFunctionaliteit" className='mt-3' />
            {showOtherReasonWebFunctionality && (
                <label className='flex flex-col rounded-xl border border-gray-200 mt-3 '>
                    <textarea
                        className=' py-2 px-6 rounded-xl border-8 border-white'
                        placeholder="Gelieve te specificeren..."
                        rows={2}
                        {...register('otherReasonWebsiteFunctionaliteit')}
                    />
                </label>
            )}
            <p>{errors.websiteURL?.message}</p>
        </>
    );
};


const HEEFT_WEBSITE = [
    { option: 'Ja' },
    { option: 'Nee' }
]
const WEBSITE_FUNCTIONALITEIT = [
    { option: 'Responsief ontwerp' },
    { option: 'Contact/ Reserveringssysteem' },
    { option: 'Online betalingen' },
    { option: 'CMS (Content Management Systeem)' },
    { option: 'Een andere reden' }
]