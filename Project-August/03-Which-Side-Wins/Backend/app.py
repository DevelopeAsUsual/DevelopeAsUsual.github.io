from flask import Flask, jsonify, request
import os
import pandas as pd
from mega import Mega

app = Flask(__name__)


MEGA_KEY = os.getenv('MEGA_KEY')
mega = Mega()
m = mega.login(MEGA_KEY)
FILE_PATH = 'Project-August/WhichSide/data.csv'

def download_file():
    file = m.find(FILE_PATH)
    m.download(file)

def upload_file(local_path):
    m.upload(local_path)

@app.route('/data', methods=['GET', 'POST'])
def handle_data():
    if request.method == 'GET':
        return jsonify({"example": "This is an example value"})
    
    elif request.method == 'POST':
        new_data = request.json
        download_file()
        df = pd.read_csv(FILE_PATH)
        df = df.append(new_data, ignore_index=True)
        df.to_csv(FILE_PATH, index=False)
        upload_file(FILE_PATH)
        return jsonify({"message": "Data saved successfully"}), 201

if __name__ == '__main__':
    app.run(debug=True)
