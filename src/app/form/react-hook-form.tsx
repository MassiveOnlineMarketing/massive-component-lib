'use client';

import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Heading } from '@/components/typography'

type Inputs = {
    name: string;
    email?: string;
    message?: string;
};

export const ReactHookForm = () => {
    const [ data, setDate ] = useState<Inputs>();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            name: "name",
        }
    });


    // this function will be called when the form is submitted
    const processForm: SubmitHandler<Inputs> = data => setDate(data);

    return (
        <div className='pt-8'>
            <Heading level='h1' size='5xl' colorScheme='accent'>React Hook Form</Heading>

            <form
                onSubmit={handleSubmit(processForm)}
                className='flex flex-col space-y-4 pt-8'
            >
                <input 
                    placeholder="name"
                    className='rounded-lg p-2'
                    // registar the name and error message in the hook
                    {...register("name", { required: 'Naam is verplicht',
                    // set validation rules
                        minLength: {
                            value: 2,
                            message: 'Minimaal 2 karakters'
                        },
                    })}
                />
                {errors.name?.message && (
                    // use the message from the hook
                    <p className='text-red-500'>{errors.name.message}</p>
                )}




                <input 
                    placeholder="email"
                    type='email'
                    className='rounded-lg p-2'
                    {...register("email", { required: 'Email is verplicht',
                        minLength: {
                            value: 2,
                            message: 'Minimaal 2 karakters'
                        },
                    })}
                />
                {errors.email?.message && (
                    <p className='text-red-500'>{errors.email.message}</p>
                )}

                <button className='bg-white'> Submit</button>
            </form>
            
            <div className='text-white'>
                <pre> 
                    {data && JSON.stringify(data, null, 2)}
                </pre>
            </div>

        </div>
    )
}
