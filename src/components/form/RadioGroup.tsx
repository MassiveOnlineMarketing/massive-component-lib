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