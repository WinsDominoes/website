import Link from "next/link";
import Image from "next/image";
import React from "react";
import * as icons from 'simple-icons';

interface ContactButtonProps {
    platform: string;
    title: string;
    description: string;
    href: string;
    username: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({platform, title, description, href, username}) => {

    let buttonColor;
    let iconFile;

    switch (platform.toLowerCase()) {
        case 'mastodon':
            buttonColor = "#6364FF";
            iconFile = icons.siMastodon.svg;
            break;
        case 'github':
            buttonColor = "#181717";
            iconFile = icons.siGithub.svg;
            break;
        case 'discord':
            buttonColor = "#5865F2";
            iconFile = icons.siDiscord.svg;
            break;    
        case 'facebook':
            buttonColor = "#0866FF";
            iconFile = icons.siFacebook.svg;
            break;
        default:
            buttonColor = "";
            iconFile = "";
            break;
    } 

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <p className="text-xl font-bold"> { title } </p>
                <p className="text-base text-slate-600 dark:text-slate-300">
                    { description }
                </p>
            </div>

            <div className="grid grid-col-3">
                <Link
                    href={ href }
                >
                    <button 
                        style={
                            { ['backgroundColor' as any] : buttonColor}
                        } 
                        className="text-white font-bold rounded-lg px-4 py-2.5 shadow-lg flex flex-row gap-2 transition ease-in-out delay-150 hover:scale-110 duration-300">
                        
                        <i 
                            className="text-white" 
                            style={
                                {['width']: '24px', ['height']: '24px', ['fill']: 'white'}
                            }
                            dangerouslySetInnerHTML={{ __html: iconFile }}>
                        </i>

                        <p className="flex flex-col justify-center text-white">
                            { username }
                        </p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactButton;