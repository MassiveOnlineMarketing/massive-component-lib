'use client'

import React from 'react'
import { Heading } from '@/components/typography'
import { DeepMap, FieldValues, UseFormRegister, FieldError } from 'react-hook-form'
import { Slider } from '@/components/ui/slider'
import { InputField, Textarea } from '@/components/input/fields'

type ContactStap = {
    register: UseFormRegister<FieldValues>;
    watch: (fieldName: string) => any;
    errors: DeepMap<FieldValues, FieldError>;
    websiteURL?: string;
};

export const ContactStap: React.FC<ContactStap> = ({ register, watch, errors, websiteURL }) => {

return (
    <>
            <Heading level='h4' size='base' colorScheme='donker'>Tijdlijn, graag binnen</Heading>
            <div className='flex justify-between'>
                <p>zsm</p><p className='ml-14'>6 maanden</p><p>12 maanden</p>
            </div>
            <input type="range" min="0" max="12" className='w-full accent-primary'  {...register('tijdlijn')} />


            <Heading level='h3' size='base' colorScheme='donker' className='mt-6'>Budget</Heading>
            <div className='flex justify-between'>
                <p>€0</p><p className='ml-8'>€15.000</p><p>€30.000</p>
            </div>
            <input type="range" min="1" max="30000" className='w-full accent-primary' {...register('budget')} />


            <Heading level='h3' size='base' colorScheme='donker' className='mt-6'>Naam</Heading>
            <InputField
                type='text'
                placeholder='Uw naam...'
                required
                {...register('name')}
            />
            {errors.name?.message && (
                // use the message from the hook
                <p className='text-red-500'>{errors.name.message}</p>
            )}

            <Heading level='h3' size='base' colorScheme='donker' className='mt-6'>Email</Heading>
            <InputField
                type='email'
                placeholder='Uw email...'
                required
                {...register('email')}
            />
            {errors.email?.message && (
                <p className='text-red-500'>{errors.email.message}</p>
            )}

            <Heading level='h3' size='base' colorScheme='donker' className='mt-6'>Website</Heading>
            <InputField
                type='text'
                placeholder='Uw website url...'
                defaultValue={websiteURL || ''}
                {...register('websiteURL')}
            />
            <Textarea
                placeholder='Uw bericht...'
                rows={3}
                {...register('message')}
            />
            {errors.message?.message && (
                <p className='text-red-500'>{errors.message.message}</p>
            )}
        </>
    )
}
