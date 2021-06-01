import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'

type CardProps = {
    src?: string,
    title: string,
    description: string,
}

const Skill: React.FC<CardProps> = ({src, title, description}) =>
    <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-box-shadow-medium" >
            <div className="uk-card-media-bottom">
                <LazyLoadImage src={src} alt="" width="350"/>
            </div>
            <div className="uk-card-body uk-text-center">
                <h3 className="uk-card-title">{title}</h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    </div>

export default Skill;