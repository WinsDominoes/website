import React from "react";
import Link from 'next/link';
import Photo from '../components/Photo'

export default function Hobbies() {
    return (
        <main>
            <div className="min-w-0 mt-6 flex flex-col gap-8 max-lg:mx-4">
                <div className="grid grid-cols-3 gap-8 max-lg:flex max-lg:flex-col max-lg:justify-center">
                    <div className="col-span-3 flex flex-col max-lg:items-center max-sm:items-start">
                        <h2 className="text-5xl font-bold mt-2">Donate</h2> 
                        <p className="text-base mt-4">
                            Want to help me run my WinsCloud Empire? Here are ways you can help support!
                        </p>
                    </div>
                </div>

                <div className="col-span-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="grid gap-4 content-center">
                            <div>
                                <h3 className='text-2xl font-bold my-2'>OpenCollective</h3>
                                <p className="text-base">
                                    <Link href="https://opencollective.com/winscloud">https://opencollective.com/winscloud</Link> 
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-4 content-center">    
                            <h3 className='text-2xl font-bold my-2'>Bank Transfer <span className='font-bold underline decoration-2 decoration-red-500'>(Thai Citizens Only)</span></h3>
                            <p className="text-base">
                                SCB: 433-1383337
                            </p>
                        </div>
                        <div className="grid gap-4 content-center">
                            <div>
                                <h3 className='text-2xl font-bold my-2'>Monero</h3>
                                <p className="text-base">
                                    <code>
                                        467eMkLCwdxBEWsgtY5akKU6gEaN4V39T9sddoKhLv487c8HJ7SqaDSVhTCtVanhyihavuG8Fe3CkYFCAkzdJfChKBH4KYB
                                    </code>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>  
    );
}
