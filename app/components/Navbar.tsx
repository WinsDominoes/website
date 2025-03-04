"use client"
import Link from "next/link"
import React, {useState} from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            text: "Home",
            link: "/"
        },
        {
            id: 2,
            text: "Projects",
            link: "projects"
        },
        {
            id: 3,
            text: "Hobbies",
            link: "hobbies"
        },
        {
            id: 4,
            text: "Donate",
            link: "donate"
        }
    ];

    return (
        <div className="flex justify-center items-center h-20 nav">
            <ul className="flex">
                {links.map(({ id, text, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-lg max-sm:text-base text-gray-500 hover:scale-105 hover:text-black dark:hover:text-white duration-200 link-underline"
                    >
                        <Link href={link}>{text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;