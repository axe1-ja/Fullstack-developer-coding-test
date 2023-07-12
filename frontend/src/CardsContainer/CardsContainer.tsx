import React from 'react'
import { Card } from './Card'
import './CardsContainer.css'
import { nanoid } from 'nanoid';

interface Props {
    images:Image[];
}

interface Image {
    key:string,
    id:number;
    pageURL:string;
    type:string;
    tags:string;
    previewURL:string;
    previewWidth:number;
    previewHeight:number;
    webformatURL:string;
    webformatWidth:number;
    webformatHeight:number;
    largeImageURL:string;
    imageWidth:number;
    imageHeight:number;
    imageSize:number;
    views:number;
    downloads:number;
    collections:number;
    likes:number;
    comments:number;
    user_id:number;
    user:string;
    userImageURL:string;
}

export const CardsContainer: React.FC<Props> = ({images}) => {
    return (
        <div className='cardsContainer'>
            {images.map(
                image => { 
                    image.key=nanoid()
                    return <Card image={image} key={nanoid()}/>
                }
            )}
        </div>
    )
}
