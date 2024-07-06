document.addEventListener("DOMContentLoaded", function() {
    const formInput = document.querySelector('.form-input');
    const createButton = document.querySelector('#create-button');
    const responseDisplay = document.createElement('p');
    const wrapper = document.querySelector('.wrapper');

    responseDisplay.id = 'response-display';
    wrapper.appendChild(responseDisplay);

    createButton.addEventListener('click', function() {
        const title = formInput.value.trim();

        if (title !== '') {
            // Show loading message
            responseDisplay.textContent = 'Generating video...';

            // Replace 'your_api_endpoint' with your actual API endpoint
            const apiUrl = 'https://videoapidjango.onrender.com/videoapi/createvideo/';
            const requestData = { "title" : title };

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })
            .then(response => response.json())
            .then(data => {
                if (data && data.link) {
                    responseDisplay.textContent = `Generated video link: ${data.link}`;
                } else {
                    responseDisplay.textContent = 'Error: Unable to generate video link.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                responseDisplay.textContent = 'Error: Failed to connect to the server.';
            });
        } else {
            responseDisplay.textContent = 'Please enter a valid title.';
        }
    });
});
