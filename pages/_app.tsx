import type { AppProps } from 'next/app'

import '../styles/fonts.scss';
import UIKit from '../components/Uikit';
import '../styles/index.global.scss';
import '../styles/particles.scss';

function App({ Component, pageProps }: AppProps) {
    return (
        <UIKit>
            <Component {...pageProps} />
        </UIKit>
    )
}

export default App