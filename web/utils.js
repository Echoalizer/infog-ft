const send = (message) => {

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