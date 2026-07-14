/**
 * This file could contain functions calling directly fetch() over HTTP to the Python server
 * or else, delegating this behaviour onto the electron main process using ipc.
 *
 *     "Electron’s main process will expose a small API to the renderer, and internally it will
 *     call the FastAPI server over HTTP. That gives you the best of both worlds: the renderer never
 *     talks to localhost, but the backend remains a clean, testable HTTP service."
 */


const send = (message: string) => {

    fetch('/response', {
        method: 'GET',
    })
        // Handling the response by converting it to JSON
        .then(response => response.json())
        // Handling the data obtained from the response
        .then(data => {
            // Update UI with product details from the response
        });

}

export default send