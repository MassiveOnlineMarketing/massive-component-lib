'use client'

import React from 'react'
import { Heading } from '@/components/typography'
import { DeepMap, FieldValues, UseFormRegister, FieldError } from 'react-hook-form'

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
                        <Heading level='h3' size='base' colorScheme='donker'>Naam</Heading>
                        <input
                            className='inline-flex justify-between  py-4 px-8 rounded-xl border border-gray-200'
                            placeholder="Uw naam..."
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
