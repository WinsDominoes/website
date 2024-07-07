"use client"
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Video from 'next-video';
import Progress from '../components/ProgressBar/ProgressBar';
import Photo from '../components/Photo';

export default function Projects() {
    return (
        <main>
            <div className="min-w-0 mt-6 flex flex-col gap-8 max-lg:mx-4">
                <div className="grid grid-cols-3 gap-8 max-lg:flex max-lg:flex-col max-lg:justify-center">
                    <div className="col-span-3 flex flex-col max-lg:items-center max-sm:items-start">
                        <h2 className="text-5xl font-bold mt-2">Projects & Work</h2> 
                        <p className="text-base mt-4">
                            Here are the projects that I have made over the years. I mostly focus on the <a className="font-bold  underline decoration-2 decoration-sky-500">web development</a> and <a className="font-bold underline decoration-2 decoration-sky-500">computer system</a> side of things, however, I have also picked up <span className="italic">embedded programming</span> and <span className="italic">electronics</span> over the past couple of months as well. 
                        </p>
                        <p className='text-base mt-4'>
                            I have also been involved with a couple of <a className="font-bold">STEM events</a>, such as <a className="font-bold">competitive coding competitions</a> and <a className="font-bold">science showcase events</a>. 
                        </p>
                    </div>
                </div>

                <div>
                    <div className='mb-4'>
                        <h2 className="text-4xl font-bold my-2">System Administration</h2> 
                    </div>

                    <div className='mb-4'>
                        <h2 className="text-3xl font-bold my-2">Enterprise Systems</h2> 
                        <p className="text-base">
                            I work as a part-time helper at my family business company, <span className='font-bold underline decoration-2 decoration-blue-500'>EMPower Engineering Co.,Ltd</span>. 
                            I work with designing, operating and maintaining the company&apos;s <span className='font-bold'>computer infrastructure</span> along with the company&apos;s I.T. department. 
                        </p>
                    </div>

                    <div className='grid grid-cols-6 gap-4'>
                        <div className='col-span-6'>
                            <h3 className='text-2xl font-bold my-2'>Hardware</h3>
                            <p className="text-base">
                                The server rack below consists of many components. Ranging from network equipment such as: <span className='font-bold underline decoration-2 decoration-purple-500'>routers and switches</span> to server equipment such as: <span className='font-bold underline decoration-2 decoration-pink-500'>storage servers and security camera servers</span>. 
                            </p>
                        </div>

                        <div className="col-span-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/company/main-server-rack/20231221_151039.jpg" alt="Main Server Rack"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/company/main-server-rack/20231221_132903.jpg" alt="Router Closeup"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">    
                                    <div>
                                        <Photo src="/images/photos/company/main-server-rack/20231221_133050.jpg" alt="MikroTik Router"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/company/main-server-rack/20231221_132830.jpg" href="https://cloud.winsdominoes.net" alt="Server Maintenance"></Photo>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-6'>
                            <h3 className='text-2xl font-bold my-2'>Software</h3>
                            <p className="text-base">
                                Along with hardware, there must be... Software! These software are used for many purposes, such as <span className='font-bold underline decoration-2 decoration-yellow-500'>server monitoring</span>, <span className='font-bold underline decoration-2 decoration-yellow-500'>file storage and transfer</span>, a DNS server and so on. 
                            </p>
                        </div>

                        <div className='col-span-6'>
                            <div className="grid grid-cols-2 max-lg:flex max-lg:flex-col max-lg:justify-center gap-6">
                                <div className="content-center">
                                    <div className='flex flex-col'>
                                        <Photo src="/images/photos/company/raspberry-pi-file/20231221_151414.jpg" href="https://cloud.winsdominoes.net"></Photo>
                                        <h5 className='text-lg font-bold'>File Transfer</h5>
                                        <p className='text-base'>
                                            This is a touchscreen Raspberry Pi that handles all <span className='font-bold underline decoration-2 decoration-rose-500'>CNC-related file transfers</span>, designed and installed by me and the I.T. department.
                                        </p>

                                        <span className='font-bold mt-2'>Usage</span>
                                        <ul className="list-disc ml-4">
                                            <li>
                                                Engineers, sitting in the office, connects to the Pi using the <span className='font-bold'>SMB (Samba) protocol</span>.                                          
                                            </li>
                                            <li>
                                                Engineers copy the files over to the Raspberry Pi over the network. 
                                            </li>
                                            <li>
                                                The <span className='font-bold'>CNC machine operators</span> copies the files straight to the CNC machine. 
                                            </li>
                                        </ul>

                                        <p className='text-base mt-2'>
                                            This project has received <span className='font-bold underline decoration-2 decoration-green-500'>numerous positive feedbacks</span> from machine operators and are still being used in production to this day.
                                        </p>
                                    </div>
                                </div>

                                <div className="content-center">
                                    <div className='flex flex-col'>
                                        <Photo src="/images/photos/company/main-server-rack/20231221_151027.jpg" href="https://cloud.winsdominoes.net"></Photo>
                                        <h4 className='text-xl font-bold'>Networking</h4>
                                        <p className='text-base'>
                                            Raspberry Pis are also used in networking systems such as: internet speed monitoring and as a DNS server. 
                                        </p>
                                        
                                        <h5 className='text-lg font-bold mt-2'>Pi-Hole</h5>
                                        <p className='text-base'>
                                            Seen on the left side of the screen, <Link href="https://pi-hole.net" className='font-bold underline decoration-2 decoration-indigo-500'>Pi-Hole</Link> is used as the main DNS server, in which, the company&apos;s network traffic must go through Pi-Hole before entering the Wide Area Network.
                                            This also provides additional DNS protection & control to the already installed firewall. 
                                        </p>

                                        <h5 className='text-lg font-bold mt-2'>Grafana Monitoring</h5>
                                        <p className='text-base'>
                                            The <Link href="https://github.com/geerlingguy/internet-pi/" className='font-bold underline decoration-2 decoration-indigo-500'>internet-pi</Link> set of software, consisting of Grafana and Ansible, provides the I.T. department with additional networking monitoring such as: 
                                            Connection speeds, latency, HTTP duration and much more. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <h2 className="text-3xl font-bold my-2">Homelab</h2> 
                        <p className="text-base">In addition to business systems, I also have a homelab! My homelab equipment are inter-connected under the <Link href="https://winscloud.net"><span className="font-bold underline decoration-2 decoration-green-500">WinsCloud</span></Link> ecosystem. 
                        This is where I run most of my <span className="font-bold">self-hosting</span> instances of various <span className="font-bold">open-source software</span> such as file storage servers, music streaming services, network monitors, and so on. </p>
                    </div>

                    <div className="col-span-6 my-4">
                        <h2 className='text-2xl font-bold'>Hardware</h2>
                        <p className='text-base'>
                            My homelab consists of a firewall / router, a multi-purpose server and a Raspberry Pi. The multi-purpose server is used for storage, web servers and a minecraft server. 
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 max-lg:flex max-lg:flex-col ">
                        <div className="col-span-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/iot/raspberrypi.jpg" href="https://pi.winscloud.net" alt="Raspberry Pi"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/software/pve.jpg" href="https://winscloud.net" alt="Proxmox"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/hardware/homelab.jpg" href="https://winscloud.net" alt="Homelab"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    <div>
                                        <Photo src="/images/photos/software/portainer.png" href="https://winscloud.net" alt="Portainer"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/software/opnsense.jpg" href="https://winscloud.net" alt="OPNsense"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/hardware/hdd.jpg" href="https://cloud.winsdominoes.net" alt="Storage Server"></Photo>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-6">
                            <h2 className='text-2xl font-bold'>Software</h2>
                        </div>

                        <div className='col-span-6'>
                            <h3 className='text-lg font-bold'>Operating Systems</h3>
                            <p className='text-base'>
                                I am able to work with <span className="font-bold">Windows Server, Linux and BSD operating systems</span>. All of these operating systems are a part of my homelab as well as my enterprise work systems.
                            </p>
                        </div>

                        <div className="col-span-3">
                            <h3 className='text-lg font-bold'>Firewalls</h3>
                            <p className='text-base'>
                                I have experience in configuring and managing network firewalls such as: <span className='font-bold underline decoration-2 decoration-indigo-500'>pfSense / OPNsense & MikroTik&apos;s RouterOS</span>
                            </p>
                        </div>

                        <div className="col-span-3">
                            <h3 className='text-lg font-bold'>Virtualization</h3>
                            <p className='text-base'>
                                I am able to work with virtualization softwares such as: <span className='font-bold underline decoration-2 decoration-sky-500'>Proxmox, Docker and VMWare</span>. 
                            </p>
                        </div>

                        <div className='col-span-6 flex flex-col'>
                            <h2 className='text-lg font-bold'>Minecraft Server</h2>
                            <p className='text-base'>
                                As a fun side project, I also run a Minecraft Server called <span className='font-bold underline decoration-2 decoration-orange-500'>ASEAN SMP</span>, a server available to every Minecraft player in the Southeast Asian Region.
                                It is currently running on my homelab with around 2 - 5 players daily. This server also provides the players with a map of the server which gives players more overview of the Minecraft world itself.
                            </p>
                            
                            <ul className='list-disc ml-4'>
                                <li>
                                    IP: <code>mc.winsdominoes.net</code>
                                </li>
                                <li>
                                    Version: 1.20.1 an above!
                                </li>
                                <li>
                                    Map: <Link href="https://map.winsdominoes.net" className='font-bold hover:underline'>https://map.winsdominoes.net</Link>
                                </li>
                            </ul>

                            <p className='font-bold mt-2'>Here are some screenshots of the Minecraft Server.</p>
                            <div className="my-4 grid grid-cols-2 max-lg:flex max-lg:flex-col gap-6">
                                <div className="grid content-center">
                                    <div>
                                        <Photo src="/images/photos/minecraft/library.png"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/minecraft/snow.png"></Photo>
                                    </div>
                                </div>
                                <div className="grid content-center">
                                    <div>
                                        <Photo src="/images/photos/minecraft/seat.png"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/minecraft/nature.png"></Photo>
                                    </div>
                                </div>
                            </div>

                            <Link href="https://discord.gg/EJBkV2SUT3" className='place-self-center'>
                                <button className="bg-[#5865F2] text-white font-bold rounded-xl px-4 py-2.5 shadow-lg flex flex-row gap-2 transition ease-in-out delay-150 hover:scale-110 duration-300">
                                    <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-7 h-7'>
                                        <title>Discord</title>
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                                    </svg>
                                    <p className='flex flex-col justify-center text-white'>Join the Discord!</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-bold my-2">Coding</h2>               
                    <div className="grid grid-cols-6  max-lg:flex max-lg:flex-col gap-4">
                        <div className="col-span-6 my-2">
                            <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
                                <div className="grid grid-cols-6 max-lg:flex max-lg:flex-col gap-4">
                                    <div className="col-span-3 flex flex-col">
                                        <h3 className='text-lg font-bold'>Frontend Development</h3>
                                        <p className='text-base'>
                                            I am fluent in <span className='font-bold underline decoration-2 decoration-orange-500'>HTML, CSS and JavaScript</span>. I am currently learning <span className='font-bold'>React + Next.js</span> as well as <span className='font-bold'>TypeScript</span>. 
                                        </p>
                                    </div>
                                    <div className="col-span-3 flex flex-col">
                                        <h3 className='text-lg font-bold'>Backend Development</h3>
                                        <p className='text-base'>
                                            I am able to work with backend frameworks such as <span className='font-bold underline decoration-2 decoration-purple-500'>node.js</span>, as well as backend programming languages, such as <span className='font-bold underline decoration-2 decoration-blue-500'>PHP</span>.
                                        </p>
                                    </div>
                                </div>    
                            <div/>
                        </div>

                        <div className="col-span-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/software/tts-sanskrit.jpg" href="https://sanskrit.winsdominoes.net" alt="Sanskrit Text-To-Speech"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/software/photosphere.jpg" href="https://maps.moomoo.me" alt="PhotoSphereStudio"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/software/winsvideo.png" href="https://videos.winscloud.net" alt="WinsVideo - Video Sharing Site"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/software/datecalc.jpeg" href="https://github.com/WinsDominoes/dateapp" alt="Date Calculator w/ AmyIsCoolz"></Photo>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-3">
                            <h3 className='text-lg font-bold'>Embedded Programming</h3>
                            <p className='text-base'>
                                I am in the process of learning programming languages such as <span className='font-bold underline decoration-2 decoration-pink-500'>C</span> along with Assembly languages on multiple architectures like 
                                <span className="font-bold underline decoration-2 decoration-pink-500">x86, RISC-V and 6502</span>. 
                            </p>
                        </div>
                        <div className="col-span-3">
                            <h3 className='text-lg font-bold'>Scripting</h3>
                            <p className='text-base'>
                                I am experienced in scripting languages such as: <span className='font-bold'>bash</span> - this helps with automation in coding environments as well as managing Linux services / daemons. 
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-bold my-2">Robotics</h2>   
                    <p className="text-base my-2">
                        I have also been involved with a couple of coding competitions and preparations at my former school, Rugby School Thailand. 
                    </p>

                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                            <h2 className="text-xl font-bold">First LEGO League</h2>
                        </div>
                        <div className="col-span-6">
                            <div className="grid grid-cols-5 gap-6 max-lg:flex max-lg:flex-col">   
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/school-work/robotics/lego-league/1.jpg" href="#" alt="Coding Process" dim="false"></Photo>
                                    </div>
                                    <div className='max-lg:hidden'>
                                        <Photo src="/images/photos/school-work/robotics/lego-league/2.jpg" href="#" alt="Model" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid col-span-3 gap-4 content-center">
                                    <div className="transition ease-in-out delay-150 hover:scale-105 duration-300">
                                        <video 
                                            autoPlay
                                            controls
                                            muted
                                            loop
                                            className='rounded'
                                            src="/images/photos/school-work/robotics/lego-league/robot-movement.mp4">
                                        </video>
                                        <span className="text-xs m-2 text-zinc-600 dark:text-zinc-400">First LEGO League Robot Test Run</span>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">
                                    <div className='max-lg:hidden'>
                                        <Photo src="/images/photos/school-work/robotics/lego-league/4.png" href="#" alt="Model" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/school-work/robotics/lego-league/3.jpg" href="#" alt="Planning Process" dim="false"></Photo>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 flex justify-center">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                Photos by <Link href="https://www.facebook.com/rugbyschoolthailand" className="underline hover:text-zinc-500">Rugby School Thailand</Link>
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                            <h2 className="text-xl font-bold">VEX Robotics Competition</h2>
                            <p className="text-base my-2">
                                I participated in the VEX Robot Building Competition, organized by the VEX Robotics Team and Rugby School Thailand&apos;s Computer Science department. 
                            </p>
                        </div>
                        <div className="col-span-6">
                            <div className="grid grid-cols-2 gap-6 max-lg:flex max-lg:flex-col">   
                                <div className="grid content-center">
                                    <div>
                                        <Photo src="/images/photos/school-work/robotics/vex-challenge/back.jpg" href="#" alt="I&apos;m at the back!" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid content-center">
                                    <div>
                                        <Photo src="/images/photos/school-work/robotics/vex-challenge/corner.jpg" href="#" alt="I&apos;m in the corner!" dim="false"></Photo>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 flex justify-center">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                Photos by <Link href="https://www.facebook.com/rugbyschoolthailand" className="underline hover:text-zinc-500">Rugby School Thailand</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className="text-4xl font-bold">Science</h2>   
                    <p className="text-base">
                        I participated in Rugby School Thailand&apos;s <a className="font-bold underline decoration-2 decoration-indigo-500">Senior Open Day</a>, where all academic departments get to present their syllabus and curriculum to visitors that are looking into joining the school. 
                        I volunteered to come and help the <a className="font-bold">Physics department</a> in presenting and explaining IGCSE and A-Level Physics concepts. 
                    </p>

                    <div className="grid grid-cols-6 mt-2 gap-4">
                        <div className="col-span-6">
                            <div className="grid grid-cols-3 gap-6 max-lg:gap-2 max-lg:flex max-lg:flex-col">   
                                <div className="col-span-2 grid max-lg:gap-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/school-work/science/2.JPG" href="#" alt="" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid max-lg:gap-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/school-work/science/1.JPG" href="#" alt="Pendulum Demonstration" dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/school-work/science/3.JPG" href="#" alt="Electrostatic Charges" dim="false"></Photo>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-6 flex justify-center">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                Photos by <Link href="https://www.facebook.com/rugbyschoolthailand" className="underline hover:text-zinc-500">Rugby School Thailand</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
