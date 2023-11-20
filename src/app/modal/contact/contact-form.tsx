'use client'

import React, { useState, useEffect } from 'react'

// form validation
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { formSchema } from '@/lib/data-schema/form';

import { EnvelopeIcon } from "@heroicons/react/24/solid";

// actions
import { submitForm } from '@/lib/actions/submit-form';
import { cn } from "@/lib/utils"

// components
import { Heading } from '@/components/typography'
import { Button } from '@/components/ui/button';

// form steps
import { WebDesignStep } from './WebDesignStep';
import { ContactStap } from './Contact';

type Inputs = z.infer<typeof formSchema>;

type MultiStepContactForm = {
    className?: string,
    children: React.ReactNode,
    handleClose: () => void
}

export const MultiStepContactForm: React.FC<MultiStepContactForm> = ({ className, children, handleClose }) => {
    // set state data
    const [data, setData] = useState<Inputs>();

    // destructure helper functions from Zod
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    // store the website url 
    const websiteURL = watch('websiteURL');

    
    
    // Handling the next step
    const [currentStep, setCurrentStep] = useState("step1");
    const [stepHistory, setStepHistory] = useState<string[]>([]);
    const dienst = watch('dienst');

    const nextStep = () => {
        setStepHistory(prev => [...prev, currentStep]);

        switch (currentStep) {
            case "step1":
                switch (dienst) {
                    case "Web Design & Development":
                        setCurrentStep("Web Design & Development");
                        break;
                    case "eCommerce en Webwinkel oplossingen":
                        setCurrentStep("eCommerce en Webwinkel oplossingen");
                        break;
                    case "SEO (Zoekmachineoptimalizatie)":
                        setCurrentStep("SEO (Zoekmachineoptimalizatie)");
                        break;
                    case "Advertentie beheer":
                        setCurrentStep("Advertentie beheer");
                        break;
                    case "Online strategie ontwikkeling":
                        setCurrentStep("Online strategie ontwikkeling");
                        break;
                    case "Geen van de bovenstaande":
                        setCurrentStep("contactDetails");
                        break;
                    default:
                        setCurrentStep("contactDetails");
                        break;
                }
                break;
            case "Web Design & Development":
            case "eCommerce en Webwinkel oplossingen":
            case "SEO (Zoekmachineoptimalizatie":
            case "Advertentie beheer":
            case "Online strategie ontwikkeling":
            case "Geen van de bovenstaande":
                setCurrentStep("contactDetails");
                break;
            default:
                setCurrentStep("step2");
                break;
        }
    };
    console.log(currentStep);

    const prevStep = () => {
        // Pop the last step from the history
        const lastStep = stepHistory[stepHistory.length - 1];

        // Remove the last step from the history
        setStepHistory(prev => prev.slice(0, -1));

        // Set the last step as the current step
        setCurrentStep(lastStep);
    };

    // skip to contact details
    const skipToContactDetails = () => {
        setCurrentStep("contactDetails");
    };


    // handling the form submit
    const processForm: SubmitHandler<Inputs> = async data => {
        console.log('submitting form')
        const result = await submitForm(data);

        if (!result) {
            console.log('something went wrong')
            return;
        }

        if (result.error) {
            console.log(result.error)
            return;
        }

        reset();
        setData(data);
        // handleClose(); 
    };


    return (

        <div className={cn(
            className,
            'h-full w-full'
        )}>
            <div className='flex gap-6 mb-auto'>
                <Button variant='icon' colorScheme='ghost' size='sm' className=' ml-auto' onClick={skipToContactDetails}><EnvelopeIcon className='h-5 w-5' />Direct contact</Button>
                {children}
            </div>

            <form
                onSubmit={handleSubmit(processForm)}
                className=' max-w-[440px] mx-auto lg:mr-0 lg:ml-[15%]'
            >

                {/* STEP ONE */}
                {currentStep === "step1" &&
                    <>
                        <p className='font-semibold text-[#4B5563]'>1/3</p>
                        <Heading level='h3' size='xl' colorScheme='accent' className='mb-8'>In welke Dienst bent u geïnteresseerd?</Heading>
                        <RadioGroup data={DIENSTEN_OPTIES} register={register} registerType="dienst" />
                        <p>{errors.dienst?.message}</p>
                        <Button type='button' size='xl' colorScheme='primary' className='w-full mt-12' onClick={nextStep}>Volgende</Button>
                    </>
                }

                {/* web dev */}
                {currentStep === "Web Design & Development" &&
                <>  
                    <p className='font-semibold text-[#4B5563]'>2/3</p>
                    <Heading level='h3' size='xl' colorScheme='accent' className='mb-8'>Web Design & Development</Heading>
                    <WebDesignStep register={register} watch={watch} errors={errors} />
                    <div className='inline-flex gap-6 mt-12 w-full'>
                        <Button type='button'  className="px-12 py-3 rounded-md" colorScheme='outline' onClick={prevStep}>Terug</Button>
                        <Button type='button'  className="w-full py-3 rounded-md" colorScheme='primary' onClick={nextStep}>Volgende</Button>
                    </div>
                </>
                }


                {/* ECOMM STEP TWO */}
                {currentStep === "eCommerce en Webwinkel oplossingen" &&
                    <p>eCommerce en Webwinkel oplossingen</p>
                }


                {/* SEO STEP TWO */}
                {currentStep === "SEO (Zoekmachineoptimalizatie)" &&
                    <p>SEO Zoekmachineoptimalizatie</p>
                }




                {/* SEA STEP TWO */}
                {currentStep === "Advertentie beheer" &&
                    <p>Advertentie beheer</p>
                }




                {/* STRATEGY STEP TWO */}
                {currentStep === "Online strategie ontwikkeling" &&
                    <p>Online strategie ontwikkeling</p>
                }




                {/* STEP THREE */}
                {currentStep === "contactDetails" &&
                    <>
                        <p className='font-semibold text-[#4B5563]'>3/3</p>
                        <Heading level='h3' size='xl' colorScheme='accent' className='mb-8'>Contact Gegevens</Heading>
                        <ContactStap register={register} watch={watch} errors={errors} websiteURL={websiteURL || ''}/>
                        <div className='inline-flex gap-6 mt-12 w-full'>
                            <Button type='button' className="px-12 py-3 rounded-md" colorScheme='outline' onClick={prevStep}>Terug</Button>
                            <Button type='submit' disabled={isSubmitting}  className="w-full py-3 rounded-md" colorScheme='primary'>Versturen</Button>
                        </div>
                    </>
                }


            </form>



            <div className=''>
                <pre>
                    {data && JSON.stringify(data, null, 2)}
                </pre>
            </div>

        </div>
    )
}



const DIENSTEN_OPTIES = [
    { option: 'Web Design & Development' }, 
    { option: 'eCommerce en Webwinkel oplossingen' }, 
    { option: 'SEO (Zoekmachineoptimalizatie)' }, 
    { option: 'Advertentie beheer' }, 
    { option: 'Online strategie ontwikkeling' }, 
    { option: 'Geen van de bovenstaande' }
]











type RadioGroupProps = {
    data: { option: string }[],
    register: ReturnType<typeof useForm>['register'], 
    registerType: string,
    className?: string
}

export const RadioGroup = ({ data, register, registerType, className }: RadioGroupProps) => {

    return (
        <div className={cn('flex flex-col gap-3', className)}>
            {data.map((option, index) => (
                <label key={index} className='inline-flex justify-between  py-4 px-8 rounded-xl border border-gray-200'>
                    <p>{option.option}</p>
                    <input className='h-4 w-4 my-auto rounded border-gray-300 accent-purple-500 focus:accent-purple-500' 
                        type="radio" value={option.option} {...register(registerType)}/>
                </label>
            ))}
        </div>
    )
}

type CheckboxGroupProps = {
    data: { option: string }[],
    register: ReturnType<typeof useForm>['register'], 
    registerType: string,
    className?: string
}

export const CheckboxGroup = ({ data, register, registerType, className }: CheckboxGroupProps) => {
    
        return (
            <div className={cn('flex flex-col gap-3', className)}>
                {data.map((option, index) => (
                    <label key={index} className='inline-flex justify-between  py-4 px-8 rounded-xl border border-gray-200'>
                        <p>{option.option}</p>
                        <input className='h-4 w-4 my-auto rounded border-gray-300 accent-purple-500 focus:accent-purple-500' 
                            type="checkbox" value={option.option} {...register(registerType)}/>
                    </label>
                ))}
            </div>
        )
    }