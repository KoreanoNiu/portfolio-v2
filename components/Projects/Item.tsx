import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import LazyLoadBackground from './LazyLoadBackground';

type itemProps = {
    backgroundImage: string,
    images?: Array<any>,
    urlSite?: string,
    title?: string,
    date?: string,
    description?: string,
    icons?: Array<any>,
    dark?: boolean
    certificate?: string
}

const Item: React.FC<itemProps> = ({backgroundImage, images, urlSite, title, date, description, icons, dark, certificate}) =>
    <div className="section">
        <div className='uk-section uk-section-secondary' data-uk-grid style={{backgroundColor: '#121212'}}>
            <LazyLoadBackground
              urlImage={backgroundImage}
              images={images}
              dark={dark}
              urlSite={urlSite}
            >
            </LazyLoadBackground>
            <div className='uk-width-1-2@s uk-flex uk-flex-middle uk-margin-small-top@s'>
                <article className='uk-article uk-margin-medium-left uk-margin-medium-right'>
                  <h2 className="uk-article-title uk-heading-bullet"><a className="uk-link-reset hover" href={urlSite}>{title}</a></h2>
                  <p className="uk-article-meta">{date}</p>
                  <p className="uk-hidden@m uk-text-small">{description}</p>
                  <p className='uk-visible@m uk-text-lead '>{description}</p>
                  <div className='uk-grid-small' data-uk-grid>
                    {
                      icons.map((icon, id) => {
                        return(
                          <LazyLoadImage src={icon.icon} className='icon' key={id}/>
                        )
                      })
                    }
                  </div>
                  <div className='uk-grid-small uk-child-width-auto' data-uk-grid>
                    {
                      urlSite ? <div><a className="uk-button uk-button-text" href={urlSite}> <span data-uk-icon='icon:link'></span>Ir al proyecto</a></div> : ''
                    }
                    {
                      certificate ? <div><a className="uk-button uk-button-text" href={certificate}> <span data-uk-icon='icon:file-pdf'></span>Ver certificado</a></div> : ''
                    }
                  </div>
                </article>
            </div>
        </div>
    </div>

export default Item