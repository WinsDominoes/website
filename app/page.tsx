"use client"
import Image from 'next/image';
import React from "react";
import Photo from './components/Photo'
import ContactIcons from './components/ContactIcons';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <div className="min-w-0 mt-6 flex flex-col gap-8 max-lg:mx-4">
                <div className="grid grid-cols-3 gap-8 max-lg:flex max-lg:flex-col max-lg:items-center max-sm:items-start">
                    <div className="col-span-1">
                        <Image 
                            src="/images/picture.png"
                            width={200}
                            height={200}
                            alt="Win's Logo"
                            className="rounded-full"
                        />
                    </div>

                    <div className="col-span-2 grid max-lg:gap-4 max-lg:place-items-center max-sm:place-items-start">
                        <div>
                            <p className="text-5xl font-bold">Thanawin Pattanaphol</p>
                            <p className="text-sm mt-2">ธนาวินทร์ พัฒนผล</p>
                        </div>
                        <p className="text-base">A <a className="font-bold underline decoration-2 decoration-indigo-500">hobbyist full-stack developer</a>, high schooler, enjoyer of 60s-80s music, language nerd, and a hobbyist electrician.</p>
                        <ContactIcons />
                    </div>

                    <div className='col-span-3 flex flex-col place-items-center max-sm:place-items-start'>
                        <code className='text-lg max-sm:text-base font-bold'>&quot;I don&apos;t want to make a PDF, I&apos;ll code one instead.&quot;</code>
                    </div>

                    <div className="col-span-3 mt-[-15px]">
                        <h2 className="text-4xl font-bold">About Me</h2> 
                        <div className='mt-4 text-lg grid grid-cols-4 max-sm:flex max-sm:flex-col'>
                            <div>
                                <span className='font-bold'>Nickname</span>: Win
                            </div>
                            <div>
                                <span className='font-bold'>Age</span>: 16
                            </div>
                            <div>
                                <span className='font-bold'>Nationality</span>: Thai 🇹🇭
                            </div>
                            <div>
                                <span className='font-bold'>Religion</span>: Buddhism
                            </div>
                        </div>
                        <p className="text-base mt-4">
                            My main field of work is creating <a className="font-bold">web applications</a>. I specialize in <a className="font-bold underline decoration-2 decoration-indigo-500">backend development</a> with <a className="font-bold">Node.js</a> and <a className="font-bold">PHP</a>, as well as working with <a className="font-bold underline decoration-2 decoration-indigo-500">relational databases</a>, 
                            such as <a className="font-bold">MySQL / MariaDB</a>.
                        </p>
                        <p className="text-base mt-4">
                            My other field of work is with <a className="font-bold underline decoration-2 decoration-sky-500">server infrastructure</a>. I am currently administering the IT infrastructure (servers, networking, firewalls) 
                            at my father&apos;s company as well as running my own server setup, also known as a homelab.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-4 max-sm:hidden gap-6">
                        <div className="grid gap-4 content-center">
                            <div>
                                <Photo src="/images/photos/iot/raspberrypi.jpg" href="/projects" alt="Raspberry Pi"></Photo>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Photo src="/images/photos/company/main-server-rack/20231221_151039.jpg" href="/projects" alt="EMPower Enginering Co.,Ltd"></Photo>
                            </div>
                            <div>
                                <Photo src="/images/photos/hardware/homelab.jpg" href="/projects" alt="Homelab"></Photo>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="mt-12">
                                <Photo src="/images/photos/robotics/robot.jpg" href="/projects" alt="LEGO League"></Photo>
                            </div>
                            <div>
                                <Photo src="/images/photos/cosplay/tasm-2-spider-man-2.jpg" href="/hobbies" alt="Spider-Man 2 PS5 Event"></Photo>
                            </div>
                        </div>
                        <div className="grid gap-4 content-center">
                            <div>
                                <Photo src="/images/photos/hardware/hdd.jpg" href="/projects" alt="Storage Server"></Photo>
                            </div>
                        </div>
                    </div>

                    <div className="hidden max-sm:grid max-sm:grid-cols-2 max-sm:gap-6">
                        <div className="grid gap-4 content-center">
                            <div>
                                <Photo src="/images/photos/iot/raspberrypi.jpg" href="/projects" alt="Raspberry Pi"></Photo>
                            </div>
                            <div>
                                <Photo src="/images/photos/company/main-server-rack/20231221_132903.jpg" href="/projects" alt="Enterprise Router"></Photo>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Photo src="/images/photos/company/main-server-rack/20231221_151039.jpg" href="/projects" alt="EMPower Enginering Co.,Ltd"></Photo>
                            </div>
                            <div>
                                <Photo src="/images/photos/hardware/ram.jpg" href="/projects" alt="Homelab"></Photo>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <Photo src="/images/photos/hardware/hdd.jpg" href="/projects" alt="Storage Server"></Photo>
                            </div>
                            <div>
                                <Photo src="/images/photos/cosplay/tasm-2-spider-man-2.jpg" href="/hobbies" alt="Spider-Man 2 PS5 Event"></Photo>
                            </div>
                        </div>
                        <div className="grid gap-4 content-center">
                            <div>
                                <Photo src="/images/photos/robotics/robot.jpg" href="/projects" alt="LEGO League"></Photo>
                            </div>
                            
                            <div>
                                <Photo src="/images/photos/software/tts.jpg" href="/projects" alt="Storage Server"></Photo>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center my-4">
                        <p className="text-lg font-bold">View my <a className="font-bold underline decoration-2 decoration-sky-500">projects</a> and <a className="font-bold underline decoration-2 decoration-pink-500">hobbies</a> by clicking on the images!</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 max-md:flex max-md:flex-col justify-items-center">
                    <div className="col-span-3 justify-self-start">
                        <p className="text-4xl font-bold">
                            Contact
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 lg:place-items-center">
                        <div className='flex flex-col'>
                            <p className="text-xl font-bold">
                                Like my work?
                            </p>
                            <p className="text-base text-slate-600 dark:text-slate-300">
                                Check them out on my GitHub!
                            </p>
                        </div>

                        <div className='grid grid-col-3'>
                            <Link href="https://github.com/WinsDominoes" className="">
                                <button className="bg-[#24292E] text-white font-bold rounded-lg px-4 py-2.5 shadow-lg flex flex-row gap-2 transition ease-in-out delay-150 hover:scale-110 duration-300">
                                    <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-7 h-7'>
                                        <title>GitHub</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                    </svg>
                                    <p className='flex flex-col justify-center text-white'>@WinsDominoes</p>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col'>
                            <p className="text-xl font-bold">
                                See more posts?
                            </p>
                            <p className="text-base text-slate-600 dark:text-slate-300">
                                Check updates on my Mastodon!
                            </p>
                        </div>

                        <div className='grid grid-col-3'>
                            <Link href="https://social.winscloud.net/@winsdominoes" className="">
                                <button className="bg-[#563ACC] text-white font-bold rounded-lg px-4 py-2.5 shadow-lg flex flex-row gap-2 transition ease-in-out delay-150 hover:scale-110 duration-300">   
                                    <svg fill="currentColor" className="w-7 h-7" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>Mastodon</title>
                                        <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/>
                                    </svg>
                                    <p className='flex flex-col justify-center text-white'>@winsdominoes</p>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col'>
                            <p className="text-xl font-bold">
                                Get in touch?
                            </p>
                            <p className="text-base text-slate-600 dark:text-slate-300">
                                Send me a message on Discord!
                            </p>
                        </div>

                        <div className='grid grid-col-3'>
                            <Link href="#">
                                <button className="bg-[#5865F2] text-white font-bold rounded-lg px-4 py-2.5 shadow-lg flex flex-row gap-2 transition ease-in-out delay-150 hover:scale-110 duration-300">
                                    <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-7 h-7'>
                                        <title>Discord</title>
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                                    </svg>
                                    <p className='flex flex-col justify-center text-white'>winsdominoes</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}