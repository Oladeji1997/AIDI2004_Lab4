document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    let formData = new FormData(this);
    let data = {
        features: [
            parseFloat(formData.get('feature1')),
            parseFloat(formData.get('feature2')),
            parseFloat(formData.get('feature3')),
            parseFloat(formData.get('feature4'))
        ]
    };

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('prediction').innerText = `Predicted Price: ${result.prediction}`;
    })
    .catch(error => {
        document.getElementById('prediction').innerText = 'Error occurred. Please try again.';
    });
});
