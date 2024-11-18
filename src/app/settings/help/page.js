'use client'
import { BreadcrumbComponent } from '@/components/breadcrumb'
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center p-4 rounded-xl items-center gap-2 w-full h-full flex-wrap overflow-y-auto custom-scroll'>
            <div className='w-full h-24 flex justify-center items-center font-semibold'>
                <BreadcrumbComponent loading={false} partName={'help'} />
            </div>
            <div className='w-full h-fit flex flex-col bg-muted p-10 rounded-xl gap-4'>
                <div className='w-full h-fit flex flex-col gap-4'>
                    <p className='font-semibold text-lg'>
                        Getting Started
                    </p>
                    <div>
                        <p>
                            If you&apos;re new here, start with these basic guides to help you get up and running.
                        </p>
                        <ul className='list-disc list-inside'>
                            <li >
                                <span>Creating an Account</span>
                                <br />
                                <span className="ml-5">Learn how to sign up for an account and access all the features.</span>
                            </li>
                            <li>
                                <span>
                                    Setting Up Your Profile
                                </span>
                                <br />
                                <span className="ml-5">
                                    Customize your account by adding a profile picture, bio, and personal details.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Basic Navigation
                                </span>
                                <br />
                                <span className="ml-5">
                                    A guide to navigating through the platform&apos;s key features.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full h-fit flex flex-col gap-4'>
                    <p className='font-semibold text-lg'>
                        Account Management
                    </p>
                    <div>
                        <p>
                            Managing your account is easy. Here&apos;s how to keep things running smoothly.
                        </p>
                        <ul className='list-disc list-inside'>
                            <li >
                                <span>
                                    Changing Your Password
                                </span>
                                <br />
                                <span className="ml-5">
                                    Step-by-step instructions on how to reset your password if you&apos;ve forgotten it, or how to update it for security.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Managing Email Preferences
                                </span>
                                <br />
                                <span className="ml-5">
                                    Lean how to control the types of notifications and emails you receive.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Deleting or Deactivating Your Account
                                </span>
                                <br />
                                <span className="ml-5">
                                    If you ever wish to close your account, here&apos;s how you can do that.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full h-fit flex flex-col gap-4'>
                    <p className='font-semibold text-lg'>
                        Troubleshooting
                    </p>
                    <div>
                        <p>
                            Running into problems? Check out these solutions to common issues.
                        </p>
                        <ul className='list-disc list-inside'>
                            <li>
                                <span>
                                    Loglin Issues
                                </span>
                                <br />
                                <span className="ml-5">
                                    If you&apos;re having trouble logging in, follow these steps to resolve it.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Payment or Billing Issues
                                </span>
                                <br />
                                <span className="ml-5">
                                    Having issues with a payment? Find out how to update your payment details or address billing concerns.
                                </span>
                            </li>
                            <li>
                                <span>
                                    App/Website Not Loading
                                </span>
                                <br />
                                <span className="ml-5">
                                    Troubleshooting tips for when the app or website is not responding.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}