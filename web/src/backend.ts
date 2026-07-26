/**
 * This file could contain functions calling directly fetch() over HTTP to the Python server
 * or else, delegating this behaviour onto the electron main process using ipc.
 *
 *     "Electron’s main process will expose a small API to the renderer, and internally it will
 *     call the FastAPI server over HTTP. That gives you the best of both worlds: the renderer never
 *     talks to localhost, but the backend remains a clean, testable HTTP service."
 */

// python server root url
const server: string = "http://localhost:8000"
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': server,
    'Access-Control-Allow-Credentials': 'true',
}


// send a message (from the chat) to the backend
export const send = (message: string) => {

    console.log("received: ", message)
    let url: string = server + '/search/' + message
    console.log("sending: ", url)
    fetch(url, {
        method: 'GET',
        headers: headers
    })
        // should we set headers here or back
        // Handling the response by converting it to JSON
        .then(response => response.json())
        // Handling the data obtained from the response
        .then(data => {
            // Update UI with product details from the response
            console.log(data?.message) // no data because we don't have a server yet
        });
}

// search for information: get info only from AI model
export const search = (query: string): void => {
    const url: string = server + '/search/' + query
    fetch(url, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .catch(error => console.error('Error:', error))
}


// extract info from an url: summarize it and then save it as a context message
export function extract(site: string): Promise<void> {
    const url: string = server + '/extract/' + site
    return fetch(url, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .catch(error => console.error('Error:', error))
}

// upload a resource: plain text file that will be saved as a context messge
