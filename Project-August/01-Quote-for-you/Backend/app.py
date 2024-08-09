# app.py
from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Sample list of quotes
quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Do not watch the clock. Do what it does. Keep going. – Sam Levenson",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman"
]

@app.route('/random-quote', methods=['GET'])
def random_quote():
    return jsonify({'quote': random.choice(quotes)})

if __name__ == '__main__':
    app.run(debug=True)
