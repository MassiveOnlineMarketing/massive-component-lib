"use client";

import React, { useState } from 'react'
import { Heading } from '@/components/typography'

export const SimpleForm = () => {
    // storing Data in state
    const [data, setData] = useState<{ [k: string]: FormDataEntryValue; } | undefined>();
    const [displayedFormData, setDisplayData] = useState<{ [k: string]: FormDataEntryValue; } | undefined>();

    // storing checkbox values in state
    const [checkboxValues, setCheckboxValues] = useState<{ [key: string]: any }>({ "Ik lust geen": [] });
    // store multiple checkbox values in state
    // need to give the checkboxes onChange handler of      onChange={handleCheckboxChange}
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setCheckboxValues(prevState => ({
                ...prevState,
                "Ik lust geen": [...prevState["Ik lust geen"], event.target.value]
            }));
        } else {
            setCheckboxValues(prevState => ({
                ...prevState,
                "Ik lust geen": prevState["Ik lust geen"].filter((item: string) => item !== event.target.value)
            }));
        }
    };

    
    // handling the form submit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);
        const formDataObject = Object.fromEntries(formData.entries());

        // Include checkboxValues in the form data
        const dataWithCheckboxes = {
            ...formDataObject,
            "Ik lust geen": checkboxValues["Ik lust geen"]
        };

        setData(dataWithCheckboxes);
        
        form.reset();

        // copy data and set to a new object called displayedFormData
        setDisplayData({ ...dataWithCheckboxes }) ;
        

        // checkboxValues["Ik lust geen"] = [];
    };


    return (
        <div className='pt-8'>
            <Heading level='h1' size='4xl' colorScheme='accent'>Simple form</Heading>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col space-y-4 pt-8'   
            >
                <input 
                    className='rounded-lg p-2'
                    name='name'
                    placeholder='name'
                    // required
                />
                <input 
                    className='rounded-lg p-2'
                    type="email"
                    name='email'
                    placeholder='email'
                    // required
                />
                <input 
                    className='rounded-lg p-2'
                    type='text'
                    name='text message'
                    placeholder='message'
                    // required
                />
                <div className='flex flex-row justify-between'>
                    {/* add a radio group with 4 selections  */}
                    <div className='flex flex-col gap-1 text-white'>
                        <label className=' inline-flex gap-2'>
                            <input 
                                type='radio'
                                name='wat is het lekkerste broodje?'
                                value='Salami'
                            />
                            <p>salami</p>
                        </label>
                        <label className=' inline-flex gap-2'>
                            <input 
                                type='radio'
                                name='wat is het lekkerste broodje?'
                                value='Carpachio'
                            />
                            <p>Carpachio</p>
                        </label>
                        <label className=' inline-flex gap-2'>
                            <input 
                                type='radio'
                                name='wat is het lekkerste broodje?'
                                value='Pindakaas'
                            />
                            <p>Pindakaas</p>
                        </label>
                        <label className=' inline-flex gap-2'>
                            <input 
                                type='radio'
                                name='wat is het lekkerste broodje?'
                                value='Ik wil ook kaas'
                            />
                            <p>Ik will ook kaas</p>
                        </label>
                    </div>


                    {/* Create a check box with 4 selection, use can select multiple options */}
                    <div className='flex flex-col gap-1 text-white'>
                        <label className=' inline-flex gap-2'>
                            <input 
                                type='checkbox'
                                name='Ik lust geen'
                                value='Salami'
                                onChange={handleCheckboxChange}
                            />
                            <p>salami</p>
                        </label>
                        <label className=' inline-flex gap-2'>
                            <input 
                                type='checkbox'
                                name='Ik lust geen'
                                value='Carpachio'
                                onChange={handleCheckboxChange}
                            />
                            <p>Carpachio</p>
                        </label>
                        <label className=' inline-flex gap-2'>
                            <input 
                                type='checkbox'
                                name='Ik lust geen'
                                value='Pindakaas'
                                onChange={handleCheckboxChange}
                            />
                            <p>Pindakaas</p>
                        </label>
                        <label className=' inline-flex gap-2'>
                            <input 
                                type='checkbox'
                                name='Ik lust geen'
                                value='Ik wil ook kaas'
                                onChange={handleCheckboxChange}
                            />
                            <p>Ik will ook kaas</p>
                        </label>
                    </div>


                </div>

                <button className='bg-white'>Submit</button>
            </form>

            <div className='text-white'>
                <pre> 
                    {displayedFormData && JSON.stringify(displayedFormData, null, 2)}
                </pre>
            </div>
        </div>
    )
}
