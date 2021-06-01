import React, { useState, useEffect } from 'react';

type divProps = {
    urlImage: string,
    images?: Array<any>,
    dark?: boolean,
    urlSite?: string
}

const backgroundImage: React.FC<divProps> = ({urlImage, images, dark, urlSite}) =>
    {
        const [sourceLoaded, setSourceLoaded] = useState(''); 

        useEffect(() => {
            const img = new Image()
            img.src = urlImage
            img.onload = () => setSourceLoaded(urlImage)
        }, [urlImage]);
          
        return(
            <div className="uk-width-1-2@s full-heigth uk-background-cover uk-inline uk-inline-clip uk-transition-toggle uk-box-shadow-hover-medium" style={{backgroundImage: `url(${sourceLoaded})`}}>
              <div className="uk-position-center">
                <div data-uk-lightbox className="uk-inline">
                  {
                    images.map((image, id) =>{
                      return(
                        image.id == 1 ? 
                        <a 
                          className={ dark ? 'uk-margin-left uk-transition-scale-up uk-dark' : 'uk-margin-left uk-transition-scale-up uk-light'} 
                          href={image.image} 
                          data-uk-icon='icon:plus-circle; ratio: 4' 
                          key={id}></a>
                        : 
                        <a href={image.image} key={id}></a>
                      )
                    })
                  }
                </div>
                  <a className={ dark ? 'uk-transition-scale-up uk-dark uk-margin-left' : 'uk-transition-scale-up uk-light uk-margin-left'} href={urlSite} data-uk-icon='icon:link; ratio: 4'></a>
              </div>
            </div>     
        )
    }

export default backgroundImage;