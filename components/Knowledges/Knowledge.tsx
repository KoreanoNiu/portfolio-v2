import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'

type KnowledgeData = {
    image: string,
    title: string,
    progress?: string,
    preferido: boolean
}

const Knowledge: React.FC<KnowledgeData> = ({image, title, progress, preferido}) =>
    <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-box-shadow-small">
            <div className="uk-card-body">
                {
                    preferido ? <div className="uk-card-badge uk-text-uppercase uk-border-rounded uk-box-shadow-small" style={{backgroundColor: '#FF4742'}}>Preferido</div> : null
                }
                <h3 className={preferido ? "uk-card-title uk-margin-small-top" : "uk-card-title"}>{title}</h3>
                <div className="uk-card-media">
                    <LazyLoadImage src={image}
                        alt=""
                        width="115"
                        style={{height: "115px"}}
                    ></LazyLoadImage>
                </div>
                {
                    progress ? <progress className="uk-progress uk-margin-top" value={progress} max="100"></progress> : ''
                }
            </div>
        </div>
    </div>

export default Knowledge;