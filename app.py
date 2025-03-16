from flask import Flask, request, jsonify, render_template
import pickle

# Load the model
with open('fish_market_model.pkl', 'rb') as f:
    model = pickle.load(f)

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")  # Serve index.html from the templates folder

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from the POST request
    data = request.get_json()
    
    # Extract features from the received data
    features = data['features']
    
    # Predict using the model
    prediction = model.predict([features])  # Predict using the model
    
    # Return the prediction as a JSON response
    return jsonify({"prediction": prediction[0]})

if __name__ == "__main__":
    app.run(debug=True)

