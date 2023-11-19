import { z } from 'zod';

export const formSchema = z.object({

    // favoriteFoods: z.array(z.enum(['pizza doos', 'burger broodje', 'sushi', 'sate'])).optional(),
    // radioOption: z.enum(['option1', 'option2', 'option3']).optional(), // replace with your options

    heeftWebsite: z.enum(['Ja', 'Nee']).optional().nullable(),
    websiteURL: z.string().optional().nullable(),

    dienst: z.enum(['Web Design & Development', 'eCommerce en Webwinkel oplossingen', 'SEO (Zoekmachineoptimalizatie)', 'Advertentie beheer', 'Online strategie ontwikkeling', 'Geen van de bovenstaande']).optional().nullable(), 
    websiteFunctionaliteit: z.array(z.enum(['Responsief ontwerp', 'Contact/ Reserveringssysteem', 'Online betalingen', 'CMS (Content Management Systeem)', 'Een andere reden'])).optional().nullable(),
    otherReasonWebsiteFunctionaliteit: z.string().optional().nullable(),


    // Contact gegevens
    name: z.string().optional(),
    email: z.string().optional(),
    message: z.string().optional(),
})