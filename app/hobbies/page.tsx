"use client"
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Progress from '../components/ProgressBar/ProgressBar';
import Photo from '../components/Photo'

export default function Hobbies() {
    return (
        <main>
            <div className="min-w-0 mt-6 flex flex-col gap-8 max-lg:mx-4">
                <div className="grid grid-cols-3 gap-8 max-lg:flex max-lg:flex-col max-lg:justify-center">
                    <div className="col-span-3">
                    <h2 className="text-5xl font-bold mt-2">Hobbies</h2> 
                        <p className="text-base mt-4">
                            Let&apos;s switch from the mathematical (nerdy) side of things and look at some creativity and arts! In my free time, I like to do <span className="font-bold underline decoration-2 decoration-indigo-500">graphic design</span>, language learning, music, as well as <span className="font-bold underline decoration-2 decoration-red-500">cosplaying</span>. 
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-4">
                    <div>
                        <h2 className="text-3xl font-bold my-2">Cosplaying</h2> 
                        <div className='flex flex-col gap-4'>
                            <p className="text-base">I started cosplaying in 2021, specifically <span className="font-bold underline decoration-2 decoration-red-500">Marvel</span> and <span className="font-bold underline decoration-2 decoration-blue-500">DC</span> characters. 
                            I have been really <span className="font-bold underline decoration-2 decoration-indigo-500">fascinated</span> by the world of <span className="font-bold underline decoration-2 decoration-sky-500">superheroes</span> since I was a little kid and getting to be these characters in real life is like a <span className="font-bold underline decoration-2 decoration-pink-500">childhood full-filling dream</span>!</p>
                            <p className="text-base">I have also participated in many cosplay events, such as: CosNatsu, CosSuki, Thailand Comic Con & Thailand Game Show.</p>
                        </div>
                        
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="grid col-span-3 gap-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/cosplay/tasm-2-main.jpg" href="https://www.instagram.com/p/CqvbNxnyCXl" alt="The Amazing Spider-Man 2" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-2 content-center max-md:hidden">
                                    <div>
                                        <Photo src="/images/photos/cosplay/win&art.jpg" href="https://www.instagram.com/p/CzkonahrURS/?img_index=3" alt="Spider-Men" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/cosplay/win-and-art-thinking.jpg" href="https://www.instagram.com/p/CzkonahrURS/?img_index=2" alt="Thinking" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/cosplay/win-and-art-4.jpg" href="https://www.instagram.com/p/CzkonahrURS/?img_index=1" alt="Spider-Bros" dim="false"></Photo>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">   
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/cosplay/tasm-2-spider-man-2-2.jpg" href="https://www.instagram.com/p/CyiVaBoLBVR/?img_index=1" alt="TASM2 Pose" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/cosplay/hulk-asiatique.jpg" href="https://www.instagram.com/p/CrTS2T9ScLs/?img_index=1" alt="TASM2 Pose" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/cosplay/tasm-2-spider-man-2.jpg" href="https://www.instagram.com/p/CyiVaBoLBVR/?img_index=4" alt="Symbiote" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid col-span-2 gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/cosplay/spiderverse.jpg" href="https://www.facebook.com/WinsDominoes/posts/pfbid02aE4Hocw54B8M3g5DcyPKEfRDRZ6Do4xKnbyCsHycrbgt7n5Te7SXvceWwkFbmnNMl" alt="Spider-Verse" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/cosplay/spiderverse-photo.jpg" href="https://www.facebook.com/WinsDominoes/posts/pfbid0ahuYTHefP9Mf8eXLeYkpi9iFKGxKpDqxKkUu7yKh78CjyfQSuofG4wsGG5QxuZ8ol" alt="Spider-Man: Into the Spider-Verse" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center max-md:hidden">
                                    <div>
                                        <Photo src="/images/photos/cosplay/gtoqw.jpg" href="https://www.instagram.com/p/Cs7ZYrdSEaT/?img_index=1" alt="Across the Spider-Verse Fan Meet" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/cosplay/peter-b-main.jpg" href="https://www.facebook.com/photo.php?fbid=1485878428813697&set=pb.100021746621221.-2207520000&type=3" alt="Peter B. Parker" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/cosplay/gtoqw2.jpg" href="https://www.facebook.com/photo.php?fbid=1433342307462095&set=t.100021746621221&type=3" alt="Guardians Of The Quantum World" dim="false"></Photo>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='my-2'>
                        <h2 className="text-3xl font-bold my-2">Graphic Design</h2>       
                        <p className="text-base">I make various types of work, ranging from <span className="font-bold underline decoration-2 decoration-indigo-500">infographics</span> to <span className="font-bold underline decoration-2 decoration-pink-500">fashion show</span> logos. </p> 
                    </div>
                         
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                                <div className="grid grid-cols-6 max-lg:flex max-lg:flex-col gap-4">
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="Adobe Illustrator" progress="60" />
                                    </div>
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="Krita" progress="90" />
                                    </div>
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="paint.net" progress="90" />
                                    </div>
                                </div>    
                            <div/>
                        </div>

                        <div className="col-span-6">
                            <div className="my-2">
                                <h2 className="text-2xl font-bold my-2">ATTASTE - 5th Generation</h2> 
                                <div className='flex flex-col gap-4'>
                                    <p className="text-base">I designed the logo for <Link href="https://www.facebook.com/attaste.rmutt"><span className="font-bold underline decoration-2 decoration-sky-500">Attaste&apos;s 5th fashion show</span></Link>, organized by the students of <span className="font-bold underline decoration-2 decoration-indigo-500">RMUTT (Rajamangala University of Technology Thanyaburi)</span>. 
                                    The event was held on the 5th of November on the 7th floor of <span className="font-bold underline decoration-2 decoration-red-700">Chatuchak&apos;s ตึกแดงวินเทจ</span></p>
                                </div>
                            </div> 
                            <div className="grid grid-cols-6 gap-4">
                                <div className="col-span-6">
                                    <div className="grid grid-cols-3 gap-6">   
                                        <div className="grid gap-4 content-center">
                                            <div>
                                                <Photo src="/images/photos/graphic-design/attaste/attaste-background-2.jpg" href="https://www.facebook.com/attaste.rmutt/posts/pfbid0Ba9jKJybSD8VV88kQd85SB3RWhRY5GTVh7bbes3begdK4FADxbaHvaYqqqEYsV8Yl" alt="" dim="false"></Photo>
                                            </div>
                                            <div>
                                                <Photo src="/images/photos/graphic-design/attaste/attaste-background.jpg" href="https://www.facebook.com/attaste.rmutt/posts/pfbid0Ba9jKJybSD8VV88kQd85SB3RWhRY5GTVh7bbes3begdK4FADxbaHvaYqqqEYsV8Yl" alt="" dim="false"></Photo>
                                            </div>
                                        </div>
                                        <div className="grid gap-4 content-center">
                                            <div>
                                                <Photo src="/images/photos/graphic-design/attaste/attaste-logo.jpg" href="https://www.facebook.com/attaste.rmutt/" alt="Attaste Logo" dim="false"></Photo>
                                            </div>
                                        </div>
                                        <div className="grid gap-4 content-center">
                                            <div>
                                                <Photo src="/images/photos/graphic-design/attaste/attaste-full-page.jpg" href="https://www.facebook.com/Fashionrmutt/posts/pfbid0GYU1Mb7iAqdJGEW38uLmf3y9LuHvXdWWk82TPw2TzaN5i4gZMmLjH1mzFK2XmFedl" alt="" dim="false"></Photo>
                                            </div>
                                            <div>
                                                <Photo src="/images/photos/graphic-design/attaste/attaste-full.jpg" href="https://www.facebook.com/Fashionrmutt/posts/pfbid0GYU1Mb7iAqdJGEW38uLmf3y9LuHvXdWWk82TPw2TzaN5i4gZMmLjH1mzFK2XmFedl" alt="" dim="false"></Photo>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex col-span-6 justify-center">
                                <p className='text-sm text-slate-600 dark:text-slate-400'>Photos by <Link href="https://www.facebook.com/attaste.rmutt"><span className="underline">ATTASTE</span></Link> & <Link href="https://www.facebook.com/Fashionrmutt"><span className="underline">FDCI</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='my-2'>
                        <h2 className="text-3xl font-bold my-2">Language Learning</h2>       
                        <p className="text-base">Languages are very important in my life, as they enable me to <span className="font-bold underline decoration-2 decoration-sky-500">communicate</span> with my friends, family, co-workers, in a <span className="font-bold underline decoration-2 decoration-pink-500">clear and effective</span> manner as well as learning them have also made me appreciate the ways that language can be used, whether it is through literature, formal documents or day-to-day media </p> 
                    </div>

                    <div className="grid grid-cols-6">
                        <div className="col-span-6">
                            <div className="mb-2">
                                <h2 className="text-2xl font-bold my-2">Infographics</h2> 
                                <div className='flex flex-col gap-4'>
                                    <p className="text-base">In learning these languages, I have made a couple of <span className="font-bold underline decoration-2 decoration-pink-500">infographics</span>, regarding the etymology of words, the meaning of various sentences and more.</p>
                                </div>
                            </div> 
                        </div>

                        <div className="col-span-6">
                            <div className='col-span-6 mb-2'>
                                <h3 className="text-xl font-bold my-2">Thai - Sanskrit - Pali</h3>
                                <p className="text-base">Here are the collection of the <span className='italic'>Sawasdee</span> posters containing the etymology for each name of the days of the week. </p>
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-5 gap-6">   
                                <div className="grid col-span-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/graphic-design/supta/monday.jpg" href="https://www.facebook.com/photo?fbid=617881087113710&set=pcb.617882217113597" alt="" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid content-center">
                                    <div>
                                        <Photo src="/images/photos/graphic-design/supta/tuesday.jpg" href="https://www.facebook.com/photo?fbid=617881563780329&set=pcb.617882217113597" alt="" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/graphic-design/supta/wednesday.jpg" href="https://www.facebook.com/photo?fbid=617881700446982&set=pcb.617882217113597" alt="" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid content-center">
                                    <div>
                                        <Photo src="/images/photos/graphic-design/supta/thursday.jpg" href="https://www.facebook.com/photo?fbid=617881093780376&set=pcb.617882217113597" alt="" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/graphic-design/supta/friday.jpg" href="https://www.facebook.com/photo/?fbid=617881620446990&set=pcb.617882217113597" alt="" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid content-center">
                                    <div>
                                        <Photo src="/images/photos/graphic-design/supta/saturday.jpg" href="https://www.facebook.com/photo/?fbid=617881097113709&set=pcb.617882217113597" alt="" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/graphic-design/supta/sunday.jpg" href="https://www.facebook.com/photo?fbid=617881310447021&set=pcb.617882217113597" alt="" dim="false"></Photo>
                                    </div>
                                </div>
                            </div>
                            <div className="flex col-span-6 justify-center">
                                <p className='text-xl'>View the <Link href="https://www.facebook.com/WinsDominoesOfficial/posts/pfbid02XrTDUFy3JvgBys7bFKAm1ZuCXDFqXLPkQLHKoB6en21hNFwYjx8xEaK3ssbfS4E8l"><span className="font-bold underline decoration-2 decoration-sky-500">Full Collection</span></Link></p>
                            </div>

                            <div className='col-span-6 my-2'>
                                <p className="text-base">I have also made informational posts about etymologies as well as many pieces of humorous Thai poetry on both Facebook and Instagram.</p>
                            </div>
                            <div className="grid grid-cols-4 max-md:flex max-md:flex-col max-md:justify-center gap-6">   
                                <div className="grid col-span-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/language/etymology/december.png" href="https://www.facebook.com/WinsDominoes/posts/pfbid0F5B2pYJpxFn4zTz4gRnRJiyrJk39cyBU12h3UF2CMCZZHuDX3Ucf7w5bkHCuXCLWl" alt="" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid col-span-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/language/poetry/rain.png" href="https://www.facebook.com/WinsDominoes/posts/pfbid0xhGCHH5ripFCLY98k9R2gLvwBVUEQC7cHj2XNAeMjdWWFzg6ytqdbs3pUmVo7sQ4l" alt="" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid col-span-4 content-center max-md:hidden">
                                    <div className="grid grid-cols-4 gap-x-4">
                                        <div>
                                            <Photo src="/images/photos/language/poetry/megabangna.png" href="https://www.facebook.com/WinsDominoes/posts/pfbid02bBs5rRF1HvusMHszwTFoQvX6dRoyMRfvDeJW44UAVG1V2cnTGW1heezpUnn8rXX7l" alt="" dim="false"></Photo>
                                        </div>
                                        <div>
                                            <Photo src="/images/photos/language/poetry/cosplay.png" href="https://www.facebook.com/WinsDominoes/posts/pfbid02Rb7QKDbxU2FAttBJZ7UEitWtZ3nd9JXBMyB73eckRwqsnYbxTBvXwWFwU2SVF8BFl" alt="" dim="false"></Photo>
                                        </div>
                                        <div>
                                            <Photo src="/images/photos/language/etymology/sukhee.png" href="https://www.facebook.com/WinsDominoes/posts/pfbid0Gx4DUbn8Y3xYiv2SctfqZpaXyNbSmosUDmVhHSt45Fk71jjDfNth9n1mpder2Howl" alt="" dim="false"></Photo>
                                        </div>
                                        <div>
                                            <Photo src="/images/photos/language/etymology/jaturmitr.png" href="https://www.facebook.com/WinsDominoes/posts/pfbid02DQjru8LZvyStPFcvWXWXkTtVRWjAkqSYeST9p5Kw5ZLYb9zMeQyF4mBQrsGMVsTHl" alt="" dim="false"></Photo>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid col-span-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/language/poetry/bus.png" href="https://www.facebook.com/WinsDominoes/posts/pfbid02sBVdxeKb2Q7hWnR2hPbbCohPrj4g5CMC2gbXkE9bzKuiZDXS1PewXZpaWz4DKpL2l" alt="" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid col-span-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/language/etymology/manusya.png" href="https://www.facebook.com/WinsDominoes/posts/pfbid02fw5D5uXxwoKQjuSQe16Pf4eCaaH9fyM6jt3yZDgeeZZdhnSPXg7AiM1tqhtYyYyrl" alt="" dim="false"></Photo>
                                    </div>
                                </div>

                                <div className='col-span-4 grid grid-col-2 gap-4 justify-center'>
                                    <h2 className='text-base'>Want to see more? Check them out in my personal profile or my page!</h2>

                                    <div className='flex flex-row gap-4 justify-center'>
                                        <Link href="https://facebook.com/WinsDominoes" className="">
                                            <button className="bg-[#0866FF] font-bold rounded-lg px-4 py-2.5 shadow-lg flex flex-row gap-2 transition ease-in-out delay-150 hover:scale-110 duration-300">
                                                <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-7 h-7'>
                                                    <title>Facebook</title>
                                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                                                </svg>
                                                <p className='flex flex-col justify-center'>Win Pattanaphol</p>
                                            </button>
                                        </Link>
                                    
                                        <Link href="https://github.com/WinsDominoesOfficial" className="">
                                            <button className="bg-[#0866FF] font-bold rounded-lg px-4 py-2.5 shadow-lg flex flex-row gap-2 transition ease-in-out delay-150 hover:scale-110 duration-300">
                                                <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-7 h-7'>
                                                    <title>Facebook</title>
                                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                                                </svg>
                                                <p className='flex flex-col justify-center'>อะไรก็ได้กับวิน</p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </main>
    );
}