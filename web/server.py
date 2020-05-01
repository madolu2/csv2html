import html_wrapper
import os
from flask import Flask, render_template, jsonify, request


app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    files = os.listdir('templates')
    hw = html_wrapper.HTMLWrapper()
    return hw.generate_content_page(files)

@app.route('/<file_name>', methods=['GET'])
def get_page_by_file_name(file_name):
    return render_template(f'{file_name}.html')


app.run(debug=True)

