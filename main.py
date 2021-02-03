from flask import Flask
import sys
app = Flask(__name__)

@app.route( "/" )
def hello():
    return "hello World"

@app.route("/home")
def home():
    return "i'm at home"


if __name__ == "__main__":
    app.run(host="localhost", port=5000)