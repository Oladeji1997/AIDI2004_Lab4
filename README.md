# Machine Learning Model Deployment using Flask

## Overview
This project demonstrates deploying a machine learning model using Flask. The model is saved as `fish_market_model.pkl` and served via a REST API. The web interface is built using HTML, CSS, and JavaScript to allow users to interact with the model.

## Technologies Used
### Backend:
- **Python** (for building and serving the model)
- **Flask** (web framework for API deployment)
- **Scikit-learn** (for machine learning model training)
- **Joblib** (for saving and loading the model)
- **NumPy & Pandas** (for data processing)

### Frontend:
- **HTML** (for structuring the web pages)
- **CSS** (for styling the web interface)
- **JavaScript** (for handling user interactions and API requests)
- **Bootstrap** (for responsive design and UI components)

## Project Structure
```
AIDI2004_Lab4/
│-- app.py                 # Main Flask application
│-- fish_market_model.pkl  # Pre-trained machine learning model
│-- requirements.txt       # Dependencies
│-- static/
│   │-- css/
│   │   ├─ styles.css     # Stylesheet for UI
│   │-- js/
│   │   ├─ script.js      # JavaScript file for frontend interactions
│-- templates/
│   │-- index.html        # Main UI page
│-- README.md             # Project documentation
```

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd AIDI2004_Lab4
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Flask application:
   ```bash
   python app.py
   ```
4. Open your browser and go to `http://127.0.0.1:5000/`.

## Features
- Load and serve a machine learning model.
- Provide a simple web UI for input and predictions.
- Display predictions dynamically using JavaScript.
- Responsive and user-friendly design with Bootstrap.

## API Endpoints
- **GET `/`** - Loads the web interface.
- **POST `/predict`** - Accepts JSON input and returns model predictions.


