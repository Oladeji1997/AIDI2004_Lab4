document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission (page reload)

    // Gather input data
    let features = [
        document.getElementById('feature1').value,
        document.getElementById('feature2').value,
        document.getElementById('feature3').value,
        document.getElementById('feature4').value,
        document.getElementById('feature5').value,
        document.getElementById('feature6').value,
        document.getElementById('feature7').value
    ];

    // Create a JSON object to send to the backend
    let data = { features: features };

    // Send data via POST request using fetch
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)  // Convert data to JSON string
    })
    .then(response => response.json())
    .then(data => {
        // Display the prediction result
        document.getElementById('prediction').textContent = 'Prediction: ' + data.prediction;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('prediction').textContent = 'Error in prediction.';
    });
});
