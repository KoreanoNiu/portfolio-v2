import React from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component'

type CardProps = {
    url: string,
    urlSite?: string,
    dark?: boolean
}

const Project: React.FC<CardProps> = ({url, urlSite, dark}) =>
    {
        const router = useRouter()
        return (
        <div>
            <a href={urlSite} onClick={() => router.push(urlSite)} className='uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-small uk-cover-container uk-height-medium uk-inline uk-inline-clip uk-transition-toggle uk-box-shadow-hover-medium uk-dark' data-tabindex="0">
                <LazyLoadImage src={url} alt="" data-uk-cover/>
                <div className="uk-position-center">
                    {urlSite ? <span onClick={() => router.push(urlSite)} className={dark ? 'uk-transition-scale-up uk-dark custom-color' : 'uk-transition-scale-up uk-light custom-color'} data-uk-icon='icon: forward; ratio:2.5'></span> : ''}
                </div>
            </a>
        </div>
        )
    }

export default Project;