import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Form } from './ui/form';
import { Separator } from './ui/separator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { RadioComponent, ReusableField } from './ui/form-components';
import { Input } from './ui/input';
import Notes from './Notes';
import { DialogActions } from '@mui/material';

const formSchema = z.object({
    fullName: z.string().min(2, { message: 'Full Name must be at least 2 characters' }).max(50, { message: 'Full Name must be at most 50 characters' }),
    address: z.string().min(5, { message: 'Address must be at least 5 characters' }).max(100, { message: 'Address must be at most 100 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    contact: z.string().min(10, { message: 'Contact Number must be at least 10 characters' }).max(15, { message: 'Contact Number must be at most 15 characters' }),
    lotNumber: z.string().min(1).max(10).optional(),
    streetNumber: z.string().min(1).max(10).optional(),
    suburb: z.string().min(2).max(50).optional(),
    postcode: z.string().min(4).max(4).optional(),
    landWidth: z.number().min(1).max(100).optional(),
    landDepth: z.number().min(1).max(100).optional(),
    driveway: z.string().min(1).max(50).optional(),
});

export default function Lead() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            address: '',
            email: '',
            contact: '',
            lotNumber: '',
            streetNumber: '',
            suburb: '',
            postcode: '',
            landWidth: '',
            landDepth: '',
            driveway: '',
        },
    })

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-fit h-fit rounded-3xl ">
                    Add Lead +
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[640px] h-5/6">
                <DialogHeader>
                    <DialogTitle>Add Lead</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <Separator />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full overflow-auto custom-scroll p-3">
                        <div className="w-full h-fit flex flex-col gap-3">
                            <p className='text-lg'>
                                Owner Details
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                <ReusableField
                                    form={form}
                                    name={'fullName'}
                                    label={'Full Name'}
                                    component={Input}
                                />
                                <ReusableField
                                    form={form}
                                    name={'address'}
                                    label={'Address'}
                                    component={Input}
                                />
                                <ReusableField
                                    form={form}
                                    name={'email'}
                                    label={'Email'}
                                    component={Input}
                                />
                                <ReusableField
                                    form={form}
                                    name={'contact'}
                                    label={'Contact'}
                                    component={Input}
                                />
                            </div>
                        </div>
                        <div className="w-full h-fit flex flex-col gap-3 mb-5">
                            <p className='text-lg'>
                                Property Details
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                <ReusableField
                                    form={form}
                                    name={'lotNumber'}
                                    label={'Lot Number'}
                                    component={Input}
                                />
                                <ReusableField
                                    form={form}
                                    name={'streetNumber'}
                                    label={'Street Number'}
                                    component={Input}
                                />
                                <ReusableField
                                    form={form}
                                    name={'suburb'}
                                    label={'Suburb'}
                                    component={Input}
                                />
                                <ReusableField
                                    form={form}
                                    name={'postcode'}
                                    label={'Post Code'}
                                    component={Input}
                                />
                                <ReusableField
                                    form={form}
                                    name={'landWidth'}
                                    label={'Land Width'}
                                    component={Input}
                                />
                                <ReusableField
                                    form={form}
                                    name={'landDepth'}
                                    label={'Land Depth'}
                                    component={Input}
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
                        </div>
                        <Notes />
                        <div className='flex justify-end py-5 gap-3'>
                            <Button type='reset' variant='outline' className='rounded-3xl px-10' >Cancel</Button>
                            <Button type={'submit'} className='rounded-3xl px-10' >Save</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
