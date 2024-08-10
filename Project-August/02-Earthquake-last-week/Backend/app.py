from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/get-earthquakes', methods=['GET'])
def get_earthquakes():
    # Get parameters from the request
    min_latitude = request.args.get('min_latitude')
    max_latitude = request.args.get('max_latitude')
    min_longitude = request.args.get('min_longitude')
    max_longitude = request.args.get('max_longitude')
    min_magnitude = request.args.get('min_magnitude')

    # Define the API endpoint and parameters
    url = "https://earthquake.usgs.gov/fdsnws/event/1/query"
    
    params = {
        "format": "geojson",  # The format of the data
        "starttime": "2024-01-01",  # Start date (can be adjusted)
        "endtime": "2024-08-01",  # End date (can be adjusted)
        "minmagnitude": min_magnitude,  # Minimum magnitude of earthquakes
        "minlatitude": min_latitude,  # South latitude (bottom of the box)
        "maxlatitude": max_latitude,  # North latitude (top of the box)
        "minlongitude": min_longitude,  # West longitude (left of the box)
        "maxlongitude": max_longitude  # East longitude (right of the box)
    }

    # Make the GET request to the USGS API
    response = requests.get(url, params=params)

    # Check if the request was successful
    if response.status_code == 200:
        data = response.json()  # Parse the JSON data
        # Extract relevant information
        earthquake_list = []
        for earthquake in data["features"]:
            properties = earthquake["properties"]
            geometry = earthquake["geometry"]
            earthquake_info = {
                "magnitude": properties["mag"],
                "location": properties["place"],
                "time": properties["time"],
                "latitude": geometry["coordinates"][1],
                "longitude": geometry["coordinates"][0]
            }
            earthquake_list.append(earthquake_info)
        
        return jsonify(earthquake_list)
    else:
        return jsonify({"error": "Failed to retrieve data"}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
