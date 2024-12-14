// components/SmallImageGrid.tsx

import React from 'react';
import Photo from './Photo'; 
import { ImageItem } from '../types';

type PhotoGridProps = {
  images: ImageItem[][];
};

const PhotoGrid: React.FC<PhotoGridProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-6">
            {images.map((item: ImageItem[], index: number) => (
                <div className="grid gap-4 content-center" key={index}>
                {item.map((image: ImageItem, idx: number) => (
                    <div key={idx}>
                        <Photo src={image.src} href={image.href} alt={image.alt} />
                    </div>
                ))}
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
