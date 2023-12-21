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
                    <div className="col-span-3">
                    <h2 className="text-5xl font-bold mt-2">Projects & Work</h2> 
                        <p className="text-base mt-4">
                            Here are the projects that I have made over the years. I mostly focus on the <a className="font-bold underline decoration-2 decoration-indigo-500">web development</a> and <a className="font-bold underline decoration-2 decoration-sky-500">computer system</a> side of things, however, I have picked up some <a className="font-bold underline decoration-2 decoration-pink-500">embedded programming</a> and <a className="font-bold underline decoration-2 decoration-indigo-500">electronics</a> over the past couple of months as well. 
                        </p>
                        <p className='text-base mt-4'>
                            I have also been involved with a couple of <a className="font-bold underline decoration-2 decoration-sky-500">STEM events</a>, such as <a className="font-bold underline decoration-2 decoration-indigo-500">competitive coding competitions</a> and <a className="font-bold underline decoration-2 decoration-pink-500">science events</a>. 
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
                            I work as a <span className='font-bold underline decoration-2 decoration-sky-500'>part-time job</span> at my family business company, <span className='font-bold underline decoration-2 decoration-blue-500'>EMPower Engineering Co.,Ltd</span>. 
                            I work with designing, operating and maintaining the company&apos;s <span className='font-bold underline decoration-2 decoration-indigo-500'>computer infrastructure</span> along with the company&apos;s I.T. department. 
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
                                        <Photo src="/images/photos/company/main-server-rack/20231221_133050.jpg" alt="MikroTik Cloud Router Switch"></Photo>
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
                                Along with hardware, there must be... Software! These software are used for many purposes, such as <span className='font-bold underline decoration-2 decoration-yellow-500'>server monitoring</span>, 
                                <span className='font-bold underline decoration-2 decoration-lime-500'>file storage and transfer</span>, a DNS server and so on. 
                            </p>
                        </div>

                        <div className='col-span-6'>
                            <div className="grid grid-cols-2 max-lg:flex max-lg:flex-col max-lg:justify-center gap-6">
                                <div className="content-center">
                                    <div className='flex flex-col'>
                                        <Photo src="/images/photos/company/raspberry-pi-file/20231221_151414.jpg" href="https://cloud.winsdominoes.net"></Photo>
                                        <h5 className='text-xl font-bold'>File Transfer</h5>
                                        <p className='text-base'>
                                            This is a touchscreen Raspberry Pi that handles all <span className='font-bold underline decoration-2 decoration-rose-500'>CNC-related file transfers</span>, designed and installed by me and the I.T. department.
                                        </p>

                                        <h5 className='text-lg font-bold mt-2'>Usage</h5>
                                        <ul className="list-disc ml-4">
                                            <li>
                                                Engineers, sitting in the office, connects to the Pi using the <span className='font-bold underline decoration-2 decoration-rose-500'>SMB (Samba) protocol</span>.                                          
                                            </li>
                                            <li>
                                                Engineers copy the files over to the Raspberry Pi over the network. 
                                            </li>
                                            <li>
                                                The <span className='font-bold underline decoration-2 decoration-sky-500'>CNC machine operators</span> copies the files straight to the CNC machine. 
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
                        This is where I run most of my <span className="font-bold underline decoration-2 decoration-sky-500">self-hosting</span> instances of various <span className="font-bold underline decoration-2 decoration-indigo-500">open-source software</span> such as file storage servers, music streaming services, network monitors, and so on. </p>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                            <h2 className="text-lg font-semibold mb-2">Operating Systems</h2>
                                <div className="grid grid-cols-6 max-lg:flex max-lg:flex-col gap-4">
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="Windows" progress="100" />
                                    </div>
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="Linux Distros" progress="100" />
                                    </div>
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="BSD" progress="90" />
                                    </div>
                                </div> 
                        </div>

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

                        <div className="col-span-2">
                            <h2 className="text-lg font-semibold mb-2">Firewalls</h2>
                            <div className="grid grid-cols-6 max-lg:flex max-lg:flex-col gap-4">
                                <div className="col-span-6 flex flex-col">
                                    <Progress text="pfSense / OPNsense" progress="90" />
                                    <Progress text="RouterOS - MikroTik" progress="85" />
                                    <Progress text="UniFiOS" progress="40" />
                                </div>
                            </div> 
                        </div>
                        <div className="col-span-2">
                            <h2 className="text-lg font-semibold mb-2">Virtualization</h2>
                            <div className="grid grid-cols-6 max-lg:flex max-lg:flex-col gap-4">
                                <div className="col-span-6 flex flex-col">
                                    <Progress text="Proxmox" progress="85" />
                                    <Progress text="Docker" progress="70" />
                                    <Progress text="VMWare" progress="60" />
                                </div>
                            </div> 
                        </div>
                        <div className="col-span-2">
                            <h2 className="text-lg font-semibold mb-2">Other</h2>
                            <div className="grid grid-cols-6 max-lg:flex max-lg:flex-col gap-4">
                                <div className="col-span-6 flex flex-col">
                                    <Progress text="CloudFlare Zero Trust" progress="90" />
                                    <Progress text="SMB Samba" progress="85" />
                                    <Progress text="Git Version Control" progress="75" />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold my-2">Coding</h2>               
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                            <h2 className="text-lg font-semibold mb-2">Web Development</h2>
                                <div className="grid grid-cols-6 max-lg:flex max-lg:flex-col gap-4">
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="HTML" progress="100" />
                                        <Progress text="CSS" progress="90" />
                                        <Progress text="JavaScript" progress="85" />
                                    </div>
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="PHP" progress="90" />
                                        <Progress text="Node.js" progress="60" />
                                        <Progress text="Next.js" progress="30" />
                                    </div>
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="MySQL" progress="50" />
                                        <Progress text="MariaDB" progress="40" />
                                        <Progress text="MongoDB" progress="10" />
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
                                        <Photo src="/images/photos/software/comic-downloader.jpg" href="https://github.com/WinsDominoes/comic-downloader" alt="Comic Downloader"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/software/photosphere.jpg" href="https://maps.moomoo.me" alt="PhotoSphereStudio"></Photo>
                                    </div>
                                </div>
                                <div className="grid gap-4 content-center">
                                    <div>
                                        <Photo src="/images/photos/software/thai-oil-prices.png" href="https://github.com/WinsDominoes/thai-oil-prices" alt="Thailand's Oil Price Tracker"></Photo>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-3">
                            <h2 className="text-lg font-semibold mb-2">Multi-Purpose Programming</h2>
                            <div className="grid grid-cols-6 max-lg:flex max-lg:flex-col gap-4">
                                <div className="col-span-6 flex flex-col">
                                    <Progress text="C" progress="20" />
                                    <Progress text="C++" progress="5" />
                                    <Progress text="Python" progress="30" />
                                </div>
                            </div> 
                        </div>
                        <div className="col-span-3">
                            <h2 className="text-lg font-semibold mb-2">Scripting / Configuration</h2>
                            <div className="grid grid-cols-6 max-lg:flex max-lg:flex-col gap-4">
                                <div className="col-span-6 flex flex-col">
                                    <Progress text="YAML" progress="60" />
                                    <Progress text="Markdown" progress="80" />
                                    <Progress text="Bash" progress="60" />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold my-2">Robotics</h2>   
                    <p className="text-base my-2">
                        I have also been involved with a couple of coding competitions and preparations at my current high school, Rugby School Thailand. 
                    </p>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                                <div className="grid grid-cols-6 max-lg:flex max-lg:flex-col gap-4">
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="LEGO Mindstorms NXT" progress="90" />
                                    </div>
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="LEGO Mindstorms EV3" progress="90" />
                                    </div>
                                    <div className="col-span-2 flex flex-col">
                                        <Progress text="VEX IQ" progress="50" />
                                    </div>
                                </div>    
                            <div/>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                            <h2 className="text-xl font-bold">First LEGO League</h2>
                            <p className="text-base my-2">
                                Currently a part of the First LEGO League Team 
                            </p>
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
                                            src="/images/photos/school-work/robotics/lego-league/robot-movement-final.webm">
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

                <div className='flex flex-col gap-4'>
                    <h2 className="text-3xl font-bold">Science</h2>   
                    <p className="text-base">
                        I participated in Rugby School Thailand&apos;s <a className="font-bold underline decoration-2 decoration-indigo-500">Senior Open Day</a>, where all academic departments get to present their syllabus and curriculum to visitors that are looking into joining the school. 
                        I volunteered to come and help the <a className="font-bold underline decoration-2 decoration-sky-500">Physics department</a> in presenting and explaining <a className="font-bold underline decoration-2 decoration-pink-500">IGCSE and A-Level Physics concepts</a>. 
                    </p>

                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-6">
                            <div className="grid grid-cols-3 gap-6 max-lg:gap-2 max-lg:flex max-lg:flex-col">   
                                <div className="col-span-2 grid max-lg:gap-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/school-work/science/2.JPG" href="#" alt="Smile!" dim="false"></Photo>
                                    </div>
                                </div>
                                <div className="grid max-lg:gap-2 content-center">
                                    <div>
                                        <Photo src="/images/photos/school-work/science/1.JPG" href="#" alt="Concentrating..." dim="false"></Photo>
                                    </div>
                                    <div>
                                        <Photo src="/images/photos/school-work/science/3.JPG" href="#" alt="Electrostatic!" dim="false"></Photo>
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
