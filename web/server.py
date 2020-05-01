from flask import Flask, render_template, jsonify, request


app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    pass


app.run(debug=True)