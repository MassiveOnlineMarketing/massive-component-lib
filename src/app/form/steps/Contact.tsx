'use client'

import React from 'react'
import { Heading } from '@/components/typography'
import { DeepMap, FieldValues, UseFormRegister, FieldError } from 'react-hook-form'
import { Slider } from '@/components/ui/slider'

type ContactStap = {
    register: UseFormRegister<FieldValues>;
    watch: (fieldName: string) => any;
    errors: DeepMap<FieldValues, FieldError>;
    websiteURL?: string;
};

export const ContactStap: React.FC<ContactStap> = ({ register, watch, errors, websiteURL }) => {

return (
    <>
            <p className='font-semibold text-[#4B5563]'>3/3</p>
            <Heading level='h3' size='xl' colorScheme='donker'>Contact Gegevens</Heading>

            <Heading level='h3' size='base' colorScheme='donker'>Tijdlijn, graag binnen</Heading>
            <div className='flex justify-between'>
                <p>zsm</p><p className='ml-14'>6 maanden</p><p>12 maanden</p>
            </div>
            <input type="range" min="0" max="12"  {...register('tijdlijn')} />


            <Heading level='h3' size='base' colorScheme='donker'>Budget</Heading>
            <div className='flex justify-between'>
                <p>€0</p><p className='ml-8'>€15.000</p><p>€30.000</p>
            </div>
            <input type="range" min="1" max="30000"  {...register('budget')} />


            <Heading level='h3' size='base' colorScheme='donker'>Naam</Heading>
            <input
                className='inline-flex justify-between  py-4 px-8 rounded-xl border border-gray-200'
                placeholder="Uw naam..."
                required
                {...register("name")}
            />
            {errors.name?.message && (
                // use the message from the hook
                <p className='text-red-500'>{errors.name.message}</p>
            )}

            <Heading level='h3' size='base' colorScheme='donker'>Email</Heading>
            <input
                className='inline-flex justify-between  py-4 px-8 rounded-xl border border-gray-200'
                placeholder="Uw email..."
                type='email'
                required
                {...register("email")}
            />
            {errors.email?.message && (
                <p className='text-red-500'>{errors.email.message}</p>
            )}

            <Heading level='h3' size='base' colorScheme='donker'>Website</Heading>
            <input
                className='inline-flex justify-between  py-4 px-8 rounded-xl border border-gray-200'
                placeholder="Uw website url..."
                defaultValue={websiteURL || ''}
                {...register("websiteURL")}
            />
            <input
                className='inline-flex justify-between  py-4 px-8 rounded-xl border border-gray-200'
                placeholder="Uw bericht..."
                {...register("message")}
            />
            {errors.message?.message && (
                <p className='text-red-500'>{errors.message.message}</p>
            )}
        </>
    )
}
