"use client"
import Link from "next/link"
import React, {useState} from "react"

const Footer = () => {
    const links = [
        {
            id: 1,
            text: "GitHub",
            link: "https://github.com/WinsDominoes"
        },
        {
            id: 2,
            text: "Mastodon",
            link: "https://social.winscloud.net/WinsDominoes"
        },
        {
            id: 3,
            text: "Matrix",
            link: ""
        }
    ];

    return (
        <div className="flex flex-col gap-2 place-items-center mt-8 border-t w-full border-gray-700">
            <div className="mt-4">
                <p className="text-xl px-4 cursor-pointer capitalize font-medium text-black dark:text-gray-300">Win Pattanaphol</p>
            </div>

            <div>
                <p className="text-sm px-4 cursor-pointer font-medium text-black dark:text-gray-300">Made with ❤️ and <Link href="https://github.com/WinsDominoes/website" className="font-bold underline decoration-2 decoration-sky-500">open-source</Link></p>
            </div>
        </div>
    );
}

export default Footer;