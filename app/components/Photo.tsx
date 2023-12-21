"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from "react";

const Photo = ({src, href, alt, dim}: any) => {
    let classes = "transition ease-in-out delay-150 hover:scale-105 duration-300";
    
    /** if(!dim || dim == "true") {
        classes = "transition ease-in-out delay-150 opacity-75 hover:opacity-100 hover:scale-105 duration-300"
    } else if (dim == "false") {
        classes = "transition ease-in-out delay-150 hover:scale-105 duration-300"
    } **/

    if(!href || href == "#") {
        return (
            <div>
                <div className="grid content-center">
                    <div className={classes}>
                        <Image 
                            className="h-auto max-w-full rounded-lg" 
                            src={src}
                            width={0} 
                            height={0} 
                            sizes="100vw" 
                            style={{ width: '100%', height: 'auto' }} 
                            alt={alt} 
                        />
    
                        <span className="text-xs m-2 text-zinc-600 dark:text-zinc-400">{alt}</span>
                    </div>
                </div>  
            </div>    
        )
    } else {
        return (
            <div>
                <Link
                    href={href}
                >  
                    <div className="grid content-center">
                        <div className={classes}>
                            <Image 
                                className="h-auto max-w-full rounded-lg" 
                                src={src}
                                width={0} 
                                height={0} 
                                sizes="100vw" 
                                style={{ width: '100%', height: 'auto' }} 
                                alt={alt} 
                            />
    
                            <span className="text-xs m-2 text-zinc-600 dark:text-zinc-400">{alt}</span>
                        </div>
                    </div>
                </Link>   
            </div>    
        )
    }

    
}

export default Photo;