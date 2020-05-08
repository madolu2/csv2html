import os, json
from flask import Flask, render_template, jsonify, request


app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('contentPage.html')

@app.route('/<file_name>', methods=['GET'])
def get_page_by_file_name(file_name):
    return render_template(f'{file_name}.html')

@app.route('/save', methods=['POST'])
def save():
    r = json.loads((request.get_data()).decode())
    with open(f'templates/{r["title"]}.html', 'w') as file:
        file.write(r['document'])
        print('File was changed')
    return '200'


app.run(debug=True)

