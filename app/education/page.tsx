"use client"
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Timeline from '../components/Timeline'
import Progress from '../components/ProgressBar/ProgressBar';
import Photo from '../components/Photo'

export default function Education() {
    return (
        <main>
            <div className="min-w-0 mt-6 flex flex-col gap-8 max-lg:mx-4">
                <div className="grid grid-cols-3 gap-8 max-lg:flex max-lg:flex-col">
                    <div className="col-span-3 flex flex-col max-lg:items-center max-sm:items-start">
                        <h2 className="text-5xl font-bold mt-2">Education</h2> 
                        <p className="text-base mt-4">
                            I have studied in schools located in Bangkok and Chonburi. 
                            I have also completed several <span className='font-bold underline decoration-2 decoration-sky-500'>academic proficiency tests</span> as well as the <Link href="https://ged.com"><span className='font-bold'>General Education Development (GED) Test</span></Link>, a diploma of <span className='font-bold underline decoration-2 decoration-red-500'>high school equivalency</span>. 
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <div>
                        <h2 className="text-3xl font-bold my-2">Diplomas & Reports</h2> 
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                            <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col gap-6">
                                <div className="col-span-2 flex flex-col gap-2">
                                    <span className="text-2xl font-bold">GED Results</span>
                                    <div className="col-span-2 grid grid-cols-4 max-sm:flex max-sm:flex-col gap-4">
                                        <span className="text-xl">Mathematics: <span className='font-bold underline decoration-2 decoration-sky-500'>176</span>/200</span>
                                        <span className="text-xl">Science: <span className='font-bold underline decoration-2 decoration-green-500'>172</span>/200</span>
                                        <span className="text-xl">English: <span className='font-bold underline decoration-2 decoration-red-500'>166</span>/200</span>
                                        <span className="text-xl">Social Studies: <span className='font-bold underline decoration-2 decoration-orange-500'>180</span>/200</span>
                                    </div>
                                </div>

                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/diplomas/ged.png" href="https://cloud.winsdominoes.net/s/xSJPxR9oxE5Gtgx" alt="Test of General Development Education - GED Diploma" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/diplomas/ged-transcript.png" href="#" alt="Certain information has been censored for privacy - GED Transcript" dim="false"></Photo>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col gap-6">
                                <div className="col-span-2 flex flex-col gap-2">
                                    <span className='text-2xl font-bold'>English Proficiency Tests</span>
                                </div>
                                <div className="grid gap-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/diplomas/ielts_english_test.png" href="" alt="International English Language Testing System - IELTS" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-2 content-center">
                                <div>
                                        <Photo src="/images/photos/diplomas/graphical-ielts.png" href="#" alt="Graphical View - IELTS" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/diplomas/kmitl-tep.png" href="https://cloud.winsdominoes.net/s/ZtWxcEZj56bFXCZ" alt="KMITL Test of English Proficiency (KMITL-TEP)" dim="false"></Photo>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center my-4">
                                <p className="text-lg font-bold">View my <a className="font-bold underline decoration-2 decoration-sky-500">reports</a> by clicking on the images!</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 max-lg:flex max-lg:flex-col">
                        <p className="text-3xl font-bold">
                            Past Schools
                        </p>
                        <div className="col-span-4">
                            <Timeline />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
