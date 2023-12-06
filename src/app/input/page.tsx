import { Combobox } from "@/components/input/combo-box";
import { CheckField, CheckInput, InputField, Textarea } from "@/components/input/fields";
import { ToggleShort, ToggleSimple, ToggleWithIcon } from "@/components/input/switch";
import { cn } from '@/lib/utils'

export default function Page() {

  return (
      <div className="flex flex-col justify-center items-center h-full bg-white text-black max-w-[500px] mx-auto">
        <InputField type="text" placeholder="Name" />
        <Textarea placeholder="Message" required />

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

      <CheckField 
        className="mt-3"
        type='radio' 
        label="hoi"
        value='test'
        name='waarde om aan te geven dat het bij elkaar hoort'
      />
      <CheckField 
        className="mt-3"
        type='radio' 
        label="hoi"
        value='waarde die in de form komt te staan'
        name='waarde om aan te geven dat het bij elkaar hoort'
      />

      <div className="flex gap-4 mt-4">
        <CheckInput type='checkbox' />
        <CheckInput type='radio' />
        <ToggleWithIcon />
        <ToggleSimple />
        <ToggleShort />
      </div>
      <Combobox />


      



      </div>
  )
}