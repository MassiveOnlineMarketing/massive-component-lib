'use client'

import React, { useState, useEffect } from 'react'
import { Heading } from '@/components/typography'

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { formSchema } from '@/lib/data-schema/form';
import { submitForm } from '@/lib/actions/submit-form';
import { WebDesignStep } from './steps/WebDesignStep';
import { Button } from '@/components/ui/button';
import { ContactStap } from './steps/Contact';
import { cn } from "@/lib/utils"

type Inputs = z.infer<typeof formSchema>;

export const ReactHookFormZod = ({ className }: { className: string }) => {

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
    };


    return (

        <div className={cn(
            className,
            ''
        )}>
            <Heading level='h1' size='5xl' colorScheme='accent'>RHF with Zod Validation</Heading>
            <Heading level='h3' size='xl' colorScheme='accent'>In welke Dienst bent u geïnteresseerd?</Heading>
            <form
                onSubmit={handleSubmit(processForm)}
                className='flex flex-col gap-4 pt-8
                
                max-w-[440px]'
            >

                {/* STEP ONE */}
                {currentStep === "step1" &&
                    <>
                        <Heading level='h3' size='xl' colorScheme='accent'>In welke Dienst bent u geïnteresseerd?</Heading>
                        <RadioGroup data={DIENSTEN_OPTIES} register={register} registerType="dienst" />
                        <p>{errors.dienst?.message}</p>
                        <Button type='button' size='xl' colorScheme='primary' onClick={nextStep}>Volgende</Button>
                    </>
                }

                {/* web dev */}
                {currentStep === "Web Design & Development" &&
                <>
                    <WebDesignStep register={register} watch={watch} errors={errors} />
                    <div className='inline-flex gap-6'>
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
                        <ContactStap register={register} watch={watch} errors={errors} websiteURL={websiteURL || ''}/>
                        <div className='inline-flex gap-6'>
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
    registerType: string
}

export const RadioGroup = ({ data, register, registerType }: RadioGroupProps) => {

    return (
        <div className='flex flex-col gap-3'>
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
    registerType: string
}

export const CheckboxGroup = ({ data, register, registerType }: CheckboxGroupProps) => {
    
        return (
            <div className='flex flex-col gap-3'>
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