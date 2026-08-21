/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * By default, Node.js integration in this file is disabled.
 */

import {StrictMode} from 'react'
import {createRoot, type Root} from "react-dom/client";

// import './index.css';  // this line caused an inline-style warning
import App from "./App";

const root: Root = createRoot(document.getElementById('root')!);
// the renderer process does not run over node, but it nonetheless has access to node_modules
// when we import React, vite loads it into the compiled files
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);

console.log(
    '👋 This message is being logged by "renderer.ts", included via Vite',
);


