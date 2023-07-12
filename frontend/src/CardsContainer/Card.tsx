import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { nanoid } from 'nanoid';

interface Props {
    image:Image;
}

interface Image {
    key:string;
    id:number;
    tags:string;
    largeImageURL:string;
    imageWidth:number;
    imageHeight:number;
    views:number;
    downloads:number;
    likes:number;
    comments:number;
    user_id:number;
    user:string;
    userImageURL:string;
}

export const Card: React.FC<Props> = ({image}) => {
  return (
        <div className="card">
            <img src={image.largeImageURL} key={image.largeImageURL} alt="" />
            <div className="imageTags" key={nanoid()}>
                <i className="bi bi-tag"></i>&nbsp; {image.tags.split(', ').map(tag => {return <span className="tag">{tag.replace(' ', '')}</span>})}
            </div>

            <div className="description">   

                <div className="imageViews">
                    <i className="bi bi-eye"></i>&nbsp; {image.views}
                </div>

                <div className="imageDownloads">
                    <i className="bi bi-download"></i>&nbsp; {image.downloads}
                </div>

            </div>
            <div className="description">

                <div className="imageLikes">
                    <i className="bi bi-heart"></i>&nbsp; {image.likes}
                </div>

                <div className="imageComments">
                    <i className="bi bi-chat"></i>&nbsp; {image.comments}
                </div>
            </div>
        </div>
  )
}

