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
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Everything has beauty, but not everyone can see it. – Confucius",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "Life is short, and it is up to you to make it sweet. – Sarah Louise Delany",
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. – Albert Einstein",
    "Be the change that you wish to see in the world. – Mahatma Gandhi",
    "To handle yourself, use your head; to handle others, use your heart. – Eleanor Roosevelt",
    "Life is really simple, but we insist on making it complicated. – Confucius",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "Change your thoughts and you change your world. – Norman Vincent Peale",
    "Whatever you are, be a good one. – Abraham Lincoln",
    "Success is going from failure to failure without losing your enthusiasm. – Winston Churchill",
    "To be or not to be, that is the question. – William Shakespeare",
    "I think, therefore I am. – René Descartes",
    "Two roads diverged in a wood, and I—I took the one less traveled by. – Robert Frost",
    "Ask not what your country can do for you – ask what you can do for your country. – John F. Kennedy",
    "That's one small step for man, one giant leap for mankind. – Neil Armstrong",
    "I have a dream that one day this nation will rise up and live out the true meaning of its creed. – Martin Luther King Jr.",
    "Give me liberty, or give me death! – Patrick Henry",
    "To err is human; to forgive, divine. – Alexander Pope",
    "I came, I saw, I conquered. – Julius Caesar",
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    "Mr. Gorbachev, tear down this wall! – Ronald Reagan",
    "A house divided against itself cannot stand. – Abraham Lincoln",
    "The truth will set you free. – The Bible (John 8:32)",
    "All the world's a stage, and all the men and women merely players. – William Shakespeare",
    "Life, Liberty and the pursuit of Happiness. – Thomas Jefferson",
    "I have not failed. I've just found 10,000 ways that won't work. – Thomas A. Edison",
    "Elementary, my dear Watson. – Sir Arthur Conan Doyle"

]

@app.route('/random-quote', methods=['GET'])
def random_quote():
    return jsonify({'quote': random.choice(quotes)})

if __name__ == '__main__':
    app.run(debug=True)
