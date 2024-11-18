'use client'
import { BreadcrumbComponent } from '@/components/breadcrumb'
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center p-4 rounded-xl items-center gap-2 w-full h-full flex-wrap overflow-y-auto custom-scroll'>
            <div className='w-full h-24 flex justify-center items-center font-semibold'>
                <BreadcrumbComponent loading={false} partName={'terms and conditions'} />
            </div>
            <div className='w-full hidden md:flex justify-start items-center font-bold text-2xl'>
                {`Terms & Conditions`}
            </div>
            <div className='w-full h-fit flex flex-col bg-muted p-10 rounded-xl gap-4'>
                <div className='w-full h-fit flex flex-col gap-4'>
                    <p className='font-semibold text-lg'>
                        1. Acceptance of Terms
                    </p>
                    <p>
                        By using the App, you agree to comply with these Terms and any other applicable laws or regulations. If you do not agree with any part of these Terms, you must stop using the App immediately.
                    </p>
                </div>
                <div className='w-full h-fit flex flex-col gap-4'>
                    <p className='font-semibold text-lg'>
                        2. Changes to Term
                    </p>
                    <p>
                        We reserve the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting the revised Terms within the App or on our website. You are responsible for reviewing these Terms periodically. Your continued use of the App after the posting of changes constitutes your acceptance of such changes.
                    </p>
                </div>
                <div className='w-full h-fit flex flex-col gap-4'>
                    <p className='font-semibold text-lg'>
                        3. User Accounts
                    </p>
                    <p>
                        To access certain features of the App, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update your information as necessary. You are responsible for maintaining the confidentiality of your account and password, and for all activities that occur under your account.
                    </p>
                </div>
                <div className='w-full h-fit flex flex-col gap-4'>
                    <p className='font-semibold text-lg'>
                        4. Use of the App
                    </p>
                    <div>
                        <p>
                            You agree to use the App in accordance with these Terms and for lawful purposes only. You may not use the App to:
                        </p>
                        <ul className='list-disc list-inside'>
                            <li>
                                Violate any applicable local, state, national, or international law.
                            </li>
                            <li>
                                Engage in any unauthorized or harmful activities, including but not limited to hacking, spamming, or distributing malicious software.
                            </li>
                            <li>
                                Attempt to access, modify, or delete data without authorization.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
