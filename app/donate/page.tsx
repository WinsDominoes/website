import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function Hobbies() {
    return (
        <main>
            <div className="min-w-0 mt-6 flex flex-col gap-8 max-lg:mx-4">
                <div className="grid grid-cols-3 gap-8 max-lg:flex max-lg:flex-col max-lg:justify-center">
                    <div className="col-span-3 flex flex-col max-lg:items-center max-sm:items-start">
                        <h2 className="text-5xl font-bold mt-2">Donate</h2> 
                        <p className="text-base mt-4">
                            Like my services? Want to help me run my WinsCloud Empire? Here are ways you can help support!
                        </p>
                    </div>
                </div>

                <div className="col-span-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#353535] rounded-xl content-center text-center p-4">
                            <div className="flex place-content-center">
                                <Image 
                                    className="h-auto max-w-full rounded-xl" 
                                    src="/icons/open-collective.png"
                                    width={0} 
                                    height={0} 
                                    sizes="50vw" 
                                    style={{ width: '100px', height: 'auto' }} 
                                    alt="Open Collective" 
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className='text-2xl font-bold mb-2'>OpenCollective</h3>
                                <p className="text-base break-all">
                                    <Link href="https://opencollective.com/winscloud">https://opencollective.com/winscloud</Link> 
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#353535] rounded-xl content-center text-center p-4">
                        <div className="flex place-content-center">
                                <Image 
                                    className="h-auto max-w-full rounded-xl" 
                                    src="/icons/monero.png"
                                    width={0} 
                                    height={0} 
                                    sizes="50vw" 
                                    style={{ width: '100px', height: 'auto' }} 
                                    alt="Monero" 
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className='text-2xl font-bold mb-2'>Monero</h3>
                                <p className="text-base">
                                    <pre className="break-all text-wrap">
                                        467eMkLCwdxBEWsgtY5akKU6gEaN4V39T9sddoKhLv487c8HJ7SqaDSVhTCtVanhyihavuG8Fe3CkYFCAkzdJfChKBH4KYB
                                    </pre>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>  
    );
}
