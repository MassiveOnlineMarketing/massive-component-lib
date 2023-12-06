import { Combobox } from "@/components/input/combo-box";
import { CheckField, CheckInput, InputField, Textarea } from "@/components/input/fields";
import { ToggleShort, ToggleSimple, ToggleWithIcon } from "@/components/input/switch";
import { Heading } from "@/components/typography";
import { cn } from '@/lib/utils'

export default function Page() {

  return (
      <div className="flex flex-col justify-center  h-full bg-white text-black max-w-[500px] mx-auto">
        <Heading level="h4" size='base'>Input</Heading>
        <InputField type="text" placeholder="Name" />
        <Textarea placeholder="Message" required rows={10}/>

        {/* Kan gebruikt worden met zod en react-form door de registar props mee the geven */}
        {/* <Textarea placeholder="Message" required {...register("name")}/> */}

        <CheckField 
          className="mt-3"
          type="checkbox" 
          value='waarde die in de form komt te staan' 
          label="label"
          required 
        />


      <input
        className={cn(
          "inline-flex w-full mt-3 justify-between  py-4 px-8 rounded-xl border border-gray-200",
        )}
        placeholder="Name"
        type="text"
      />

      <Heading level="h4" size='base' className="mt-8">Wat voor broodje moete?</Heading>
      <CheckField 
        className="mt-3"
        type='radio' 
        label="kaas"
        value='test'
        name='waarde om aan te geven dat het bij elkaar hoort'
      />
      <CheckField 
        className="mt-3"
        type='radio' 
        label="ham"
        value='waarde die in de form komt te staan'
        name='waarde om aan te geven dat het bij elkaar hoort'
      />

      
      <Heading level="h4" size='base' className="mt-8">Types</Heading>
      <div className="flex gap-4 mt-2">
        <CheckInput type='checkbox' />
        <CheckInput type='radio' />
        <ToggleWithIcon />
        <ToggleSimple />
        <ToggleShort />
      </div>

      <Heading level="h4" size='base' className="mt-8">Drop down selectie met search</Heading>
      <Combobox />


      



      </div>
  )
}