import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"
import { Separator } from "./ui/separator"
import { Combobox } from "./combo-box"
import { CheckboxComponent, ProgressBarComponent, RadioComponent, ReusableField } from "./ui/form-components"
import { useEffect, useState } from "react"

const formSchema = z.object({
    range: z.tuple([z.number(), z.number()]),
    width: z.string().optional(),
    depth: z.string().optional(),
    bedrooms: z.array(z.string()),
    living: z.string(),
    storeys: z.string(),
    garage: z.string(),
    driveway: z.string(),
})

export function Filter() {
    const [isChanged, setIsChanged] = useState(true)
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            range: [50, 300],
            width: '',
            depth: '',
            bedrooms: [],
            living: '1',
            storeys: 'single',
            garage: 'single',
            driveway: 'left'
        },
    })

    useEffect(() => {
        const subscription = form.watch((values) => {
            setIsChanged(false)
        })
        return () => subscription.unsubscribe()
    }, [form])


    function onSubmit(values) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full h-full overflow-auto custom-scroll">
                <div className='w-full flex flex-col '>
                    <div className='w-full h-fit flex justify-around items-center py-4 px-0'>
                        <p className='text-2xl font-bold'>Filters</p>
                        <Button variant={"secondary"} className="bg-muted" onClick={() => { form.reset(); setIsChanged(true) }} disabled={isChanged} >Reset</Button>
                    </div>
                    <Separator />
                </div>
                <div className="w-full h-full px-8 flex flex-col gap-3">
                    <ReusableField
                        form={form}
                        label={'House Sizes (sq)'}
                        name={'range'}
                        component={ProgressBarComponent}
                    />

                    <ReusableField
                        form={form}
                        label={'Land Width'}
                        name={'width'}
                        component={Combobox}
                        frameworks={[
                            { value: '', label: 'Select' },
                            { value: "12.5", label: "12.5" },
                            { value: "15", label: "15" },
                            { value: "18", label: "18" },
                            { value: "24", label: "24" },
                        ]}
                        placeholder={'Select'}
                    />
                    <ReusableField
                        form={form}
                        label={'Land Depth'}
                        name={'depth'}
                        component={Combobox}
                        frameworks={[
                            { value: '', label: 'Select' },
                            { value: "12.5", label: "12.5" },
                            { value: "15", label: "15" },
                            { value: "18", label: "18" },
                            { value: "24", label: "24" },
                        ]}
                        placeholder={'Select'}
                    />
                    <ReusableField
                        form={form}
                        label={'No of bedrrooms'}
                        name={'bedrooms'}
                        component={CheckboxComponent}
                        options={[
                            { value: "1", label: "1" },
                            { value: "2", label: "2" },
                            { value: "3", label: "3" },
                            { value: "4", label: "4" },
                            { value: "5", label: "5" },
                            { value: "6", label: "6+" },
                        ]}
                    />
                    <ReusableField
                        form={form}
                        label={'No of living'}
                        name={'living'}
                        component={RadioComponent}
                        options={[
                            { value: "1", label: "1" },
                            { value: "2", label: "2" },
                            { value: "3", label: "3" },
                        ]}
                    />
                    <ReusableField
                        form={form}
                        label={'Storeys'}
                        name={'storeys'}
                        component={RadioComponent}
                        options={[
                            { value: "single", label: "Single" },
                            { value: "double", label: "Double" },
                        ]}
                    />
                    <ReusableField
                        form={form}
                        label={'Garage'}
                        name={'garage'}
                        component={RadioComponent}
                        options={[
                            { value: "single", label: "Single" },
                            { value: "double", label: "Double" },
                        ]}
                    />
                    <ReusableField
                        form={form}
                        label={'Driveway'}
                        name={'driveway'}
                        component={RadioComponent}
                        options={[
                            { value: "left", label: "Left" },
                            { value: "right", label: "Right" },
                            { value: "not-sure", label: "Not Sure" },
                        ]}
                    />
                </div>
            </form>
        </Form>
    )
}
