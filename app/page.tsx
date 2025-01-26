"use client"
import Image from 'next/image';
import React from "react";
import ContactIcons from './components/ContactIcons';
import PhotoGrid from './components/PhotoGrid';
import ContactButton from './components/ContactButton';

const frontImages = [
    [
        { src: '/images/photos/hardware/homelab.jpg', href: '/projects', alt: 'Homelab' },
        { src: '/images/photos/software/dateapp.jpg', href: '/projects', alt: 'Date Calculator' },
        { src: '/images/photos/hardware/freebsd.jpg', href: '/projects', alt: 'PC running FreeBSD' },
        { src: '/images/photos/cosplay/tasm-2-asiatique.jpg', href: '/hobbies', alt: 'TASM2 Asiatique Event' },
    ],
    [   
        { src: '/images/photos/events/ai-engineering.jpg', href: '/projects', alt: 'CMKL A.I. Engineering Event' },
        { src: '/images/photos/company/main-server-rack/20231221_151039.jpg', href: '/projects', alt: 'Office Main Rack' },
        { src: '/images/photos/cosplay/spiderverse.jpg', href: '/hobbies', alt: 'The Spider-Verse Cosplay' },
        { src: '/images/photos/hardware/raspberry_pi.jpg', href: '/projects', alt: 'Pi the Speedtest Server' },
    ],
    [
        { src: '/images/photos/software/srt_app.png', href: '/projects', alt: 'SRT App' },
        { src: '/images/photos/robotics/robot.jpg', href: '/projects', alt: 'LEGO League'},
        { src: '/images/photos/software/opnsense.jpg', href: '/projects', alt: 'Home Router'},
        { src: '/images/photos/cosplay/tasm-2-spider-man-2.jpg', href: '/hobbies', alt: 'Spider-Man 2 PS5 Event'},
        { src: '/images/photos/electrical/solar-panel.jpg', href: '/projects', alt: 'Off-Grid Electrical Work' },
    ],
    [
        { src: '/images/photos/software/misskey_raindar.png', href: '/projects', alt: 'Bangkok Rain Radar'},
        { src: '/images/photos/software/winnie-http.png', href: '/projects', alt: 'Homemade webserver'},
        { src: '/images/photos/hardware/server_rack.jpg', href: '/projects', alt: 'WinsCloud'},
        { src: '/images/photos/software/livyatan.png', href: '/projects', alt: 'Livyatan'},
        { src: '/images/photos/cosplay/spiderverse-photo.jpg', href: '/hobbies', alt: 'Spider-Verse Cosplay #2' },
    ]
    
];

export default function Home() {
    return (
        <main>
            <div className="min-w-0 mt-6 flex flex-col gap-8 mx-4">
                <div className="flex flex-col items-center">
                    <div className="col-span-1 flex justify-center">
                        <Image 
                            src="/images/picture.png"
                            width={250}
                            height={250}
                            alt="Win's Logo"
                            className="rounded-full"
                        />
                    </div>

                    <div className="col-span-2 grid text-center gap-4 my-6">
                        <p className="text-5xl font-bold">Win Pattanaphol</p>
                        <p className="text-base">A <a className="font-bold underline decoration-2 decoration-indigo-500">hobbyist developer</a>, undergraduate student, enjoyer of 60s-80s music, language nerd, and a hobbyist electrician.</p>
                        <ContactIcons />
                    </div>

                    <div className="col-span-3 flex flex-col gap-4">
                        <h2 className="text-4xl font-bold">About Me</h2> 
                        <div className="text-lg grid grid-cols-3 max-sm:flex max-sm:flex-col align-center">
                            <div className="text-start max-sm:text-left">
                                <span className='font-bold'>Nickname</span>: Win
                            </div>
                            <div className='text-center max-sm:text-left'>
                                <span className='font-bold'>Age</span>: 17
                            </div>
                            <div className='text-end max-sm:text-left'>
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

                <div className="grid grid-cols-4 gap-2 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col">
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
                        href="https://matrix.to/#/@winsdominoes:chat.winscloud.net"
                        username="@winsdominoes"
                    />
                </div>
            </div>
        </main>
    );
}
