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
                <p className="text-xl px-4 cursor-pointer capitalize font-medium text-gray-300">Win Pattanaphol 2023</p>
            </div>

            <div>
                <code className="text-sm px-4 cursor-pointer font-medium text-gray-300">wins.dominoes2007@gmail.com</code>
            </div>
        </div>
    );
}

export default Footer;