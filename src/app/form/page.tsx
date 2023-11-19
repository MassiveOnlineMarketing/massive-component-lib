import { Heading } from "@/components/typography";
import { SimpleForm } from "./simple-form";
import { ReactHookForm } from "./react-hook-form";
import { ReactHookFormZod } from "./react-hook-form-zod";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center h-full bg-white text-black">
            <Heading level="h1" size="4xl" colorScheme="default">
                Page
            </Heading>


            <SimpleForm />

            <ReactHookForm />

            <ReactHookFormZod />


        </div>
    );
}
