"use client"
import Image from 'next/image';
import React from "react";
import ContactIcons from './components/ContactIcons';
import PhotoGrid from './components/PhotoGrid';
import ContactButton from './components/ContactButton';

const frontImages = [
    [
        { src: '/images/photos/cosplay/tasm-2-asiatique.jpg', href: '/hobbies', alt: 'TASM2 Asiatique Event' },
        { src: '/images/photos/software/dateapp.jpg', href: '/projects', alt: 'Date Calculator' },
        { src: '/images/photos/iot/raspberrypi.jpg', href: '/projects', alt: 'Raspberry Pi' },
        { src: '/images/photos/hardware/freebsd.jpg', href: '/projects', alt: 'PC running FreeBSD' },
    ],
    [   
        { src: '/images/photos/events/ai-engineering.jpg', href: '/projects', alt: 'CMKL A.I. Engineering Event' },
        { src: '/images/photos/company/main-server-rack/20231221_151039.jpg', href: '/projects', alt: 'Office Main Rack' },
        { src: '/images/photos/cosplay/spiderverse.jpg', href: '/hobbies', alt: 'The Spider-Verse Cosplay' },
        { src: '/images/photos/hardware/homelab.jpg', href: '/projects', alt: 'Homelab' },
    ],
    [
        { src: '/images/photos/hardware/dell-optiplex.jpg', href: '/projects', alt: 'Dell Optiplex Modified' },
        { src: '/images/photos/robotics/robot.jpg', href: '/projects', alt: 'LEGO League'},
        { src: '/images/photos/software/blackboard.jpg', href: '/projects', alt: 'Blackboard of Memory'},
        { src: '/images/photos/cosplay/tasm-2-spider-man-2.jpg', href: '/hobbies', alt: 'Spider-Man 2 PS5 Event'},
        { src: '/images/photos/electrical/solar-panel.jpg', href: '/projects', alt: 'Off-Grid Electrical Work' },
    ],
    [
        { src: '/images/photos/cosplay/spiderverse-photo.jpg', href: '/hobbies', alt: 'Spider-Verse Cosplay #2' },
        { src: '/images/photos/software/winnie-http.png', href: '/projects', alt: 'Homemade webserver'},
        { src: '/images/photos/hardware/hdd.jpg', href: '/projects', alt: 'Storage Server'},
        { src: '/images/photos/software/bkk-raindar.png', href: '/projects', alt: 'Bangkok Rain Radar'},
        { src: '/images/photos/events/the-command-center.jpg', href: '/projects', alt: 'True Digital Park' },
    ]
    
];

export default function Home() {
    return (
        <main>
            <div className="min-w-0 mt-6 flex flex-col gap-8 max-lg:mx-4">
                <div className="grid grid-cols-3 gap-8 max-lg:flex max-lg:flex-col max-lg:items-center max-sm:items-start">
                    <div className="col-span-1 flex justify-center">
                        <Image 
                            src="/images/picture.png"
                            width={250}
                            height={250}
                            alt="Win's Logo"
                            className="rounded-full"
                        />
                    </div>

                    <div className="col-span-2 grid items-center max-lg:place-items-center max-sm:place-items-start max-lg:gap-4 my-6">
                        <p className="text-5xl font-bold">Win Pattanaphol</p>
                        <p className="text-base">A <a className="font-bold underline decoration-2 decoration-indigo-500">hobbyist full-stack developer</a>, undergraduate student, enjoyer of 60s-80s music, language nerd, and a hobbyist electrician.</p>
                        <ContactIcons />
                    </div>

                    <div className='col-span-3 flex flex-col place-items-center max-sm:place-items-start'>
                        <code className='text-lg max-sm:text-base font-bold'>&quot;I don&apos;t want to make a PDF, I&apos;ll code one instead.&quot;</code>
                    </div>

                    <div className="col-span-3 mt-[-15px] flex flex-col gap-4">
                        <h2 className="text-4xl font-bold">About Me</h2> 
                        <div className="text-lg grid grid-cols-3 max-sm:flex max-sm:flex-col">
                            <div>
                                <span className='font-bold'>Nickname</span>: Win
                            </div>
                            <div>
                                <span className='font-bold'>Age</span>: 16
                            </div>
                            <div>
                                <span className='font-bold'>Nationality</span>: Thai 🇹🇭
                            </div>
                        </div>
                        <p>
                            My main field of work is <a className="font-bold underline decoration-2 decoration-sky-500">server administration</a>. I am running, <a className="font-bold underline decoration-2 decoration-green-500">WinsCloud</a>, my own self-hosted ecosystem as well as currently administering the IT infrastructure (servers, networking, firewalls) 
                            at my father&apos;s company.
                        </p>
                        <p>
                            My other field of work is creating <a className="font-bold">web applications</a>. I specialize in <a className="font-bold underline decoration-2 decoration-indigo-500">backend development</a> with <a className="font-bold">Node.js</a> and <a className="font-bold">PHP</a>, as well as working with <a className="font-bold underline decoration-2 decoration-indigo-500">relational databases</a>, 
                            such as <a className="font-bold">MySQL / MariaDB</a>.
                        </p>
                        <p>I am currently learning <a className="font-bold underline decoration-2 decoration-pink-500">low-level programming</a> using C, along with 
                            <a className="font-bold underline decoration-2 decoration-pink-500"> x86 and RISC-V Assembly</a> for lower level interactions with hardware.
                        </p>
                    </div>
                </div>

                <div>
                    <PhotoGrid images={frontImages} />

                    <div className="flex justify-center my-4">
                        <p className="text-lg font-bold">View my <a className="font-bold underline decoration-2 decoration-sky-500">projects</a> and <a className="font-bold underline decoration-2 decoration-pink-500">hobbies</a> by clicking on the images!</p>
                    </div>
                </div>

                <div className="col-span-4 justify-self-start">
                        <p className="text-4xl font-bold">
                            Contact
                        </p>
                    </div>

                <div className="grid grid-cols-4 gap-2 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col justify-items-center">

                    <ContactButton 
                        platform="git"
                        title="Like my work?"
                        description="Check them out on my Forgejo!"
                        href="https://git.winscloud.net/winsdominoes"
                        username="@winsdominoes"
                    />

                    <ContactButton 
                        platform="activitypub"
                        title="See more posts?"
                        description="Check posts on my Fediverse!"
                        href="https://fedi.winscloud.net/@winsdominoes"
                        username="@winsdominoes"
                    />

                    <ContactButton 
                        platform="peertube"
                        title="Watch some videos?"
                        description="Check my PeerTube page!"
                        href="https://peertube.winscloud.net/@winsdominoes"
                        username="@winsdominoes"
                    />  

                    <ContactButton 
                        platform="matrix"
                        title="Get in touch?"
                        description="Send me a message on Matrix!"
                        href="https://matrix.to/#/@winsdominoes:matrix.winscloud.net"
                        username="@winsdominoes"
                    />
                </div>
            </div>
        </main>
    );
}
