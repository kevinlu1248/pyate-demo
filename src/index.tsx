import * as React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement != null) {
    // dumb typescript error TS2531
    if (rootElement.hasChildNodes()) {
        hydrate(<App />, rootElement);
    } else {
        render(<App />, rootElement);
    }
}
