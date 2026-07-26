/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * By default, Node.js integration in this file is disabled.
 */

import {StrictMode} from 'react'
import {createRoot} from "react-dom/client";

import './index.css';
import App from "./App";

const root = createRoot(document.getElementById('root')!);
// this shouldn't work because the renderer process does not have node integration. where is react?
// where is node being called here?? react is injected by vite
// import react?
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);

console.log(
    '👋 This message is being logged by "renderer.ts", included via Vite',
);


