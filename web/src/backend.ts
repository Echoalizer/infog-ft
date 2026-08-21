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
export async function send(message: string): Promise<void> {

    console.log("received: ", message)
    let url: string = server + '/messages/'
    console.log("req address: ", url)
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({message: message}),
        headers: headers
    })
        // should we set headers here or back
        // Handling the response by converting it to JSON
        .then(response => response.json())
        // Handling the data obtained from the response
        .then(data => {
            // Update UI with product details from the response
            console.log(data?.message)
        }).catch(error => console.error('Error:', error));
    console.log("sent")
}

// search for information: get info only from AI model
export async function search(query: string): Promise<void> {
    const url: string = server + '/search?q=' + query
    return fetch(url, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .catch(error => console.error('Error:', error))
}


// extract info from an url: summarize it and then save it as a context message
export async function extract(url: string): Promise<void> {
    // perform validations: starts with https:// or http://
    if (!(url.startsWith('https://') || url.startsWith('http://')))
        url = 'https://' + url
    // contains only valid characters

    const requestUrl: string = server + '/extract?url=' + url
    return fetch(requestUrl, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .catch(error => console.error('Error:', error))
}

// upload a resource: plain text file that will be saved as a context message
