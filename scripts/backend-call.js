document.addEventListener("DOMContentLoaded", function() {
    const formInput = document.querySelector('.form-input');
    const createButton = document.querySelector('#create-button');
    const statusDisplay = document.querySelector('#generation-status');
    const downloadButton = document.querySelector('#download-button');
    const downloadLink = document.querySelector('#download-link');

    createButton.addEventListener('click', function() {
        const title = formInput.value.trim();

        if (title !== '') {
            // Show loading message
            statusDisplay.textContent = 'Generating video...';
            downloadButton.style.display = 'none'; // Hide download button during generation

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
                    statusDisplay.textContent = 'Video generated successfully!';
                    downloadLink.href = data.link; // Set the download link
                    downloadButton.style.display = 'inline-block'; // Show the download button
                } else {
                    statusDisplay.textContent = 'Error: Unable to generate video link.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                statusDisplay.textContent = 'Error: Failed to connect to the server.';
            });
        } else {
            statusDisplay.textContent = 'Please enter a valid title.';
        }
    });
});
