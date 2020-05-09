import sys, subprocess
from  flask import Flask, request, render_template, jsonify
from os import listdir


app = Flask(__name__)

subprocess.Popen([sys.executable, '../standalone app/csv2html.py', 'some shit'])

def create_tag(tag, inner=None, css_class=None, **attributes):
    attribute_list = ' '.join([f'{name}="{value}"' for name, value in attributes.items()])
    return f'<{tag} class="{css_class}" {attribute_list}>\n{inner}\n</{tag}>\n'

@app.route('/')
def get_index():
    path = '../standalone app/html'
    template_path = 'template.html'
    with open(template_path, 'r') as file:
        data = file.read()
    return data.replace('replace_title', 'Index Page')\
                .replace('replace_body',''.join([create_tag(tag='a',
                inner=file.replace('.html', ''),
                css_class='btn btn-dark col-2 m-2',
                href=f"#{file.replace('.html', '')}") for file in listdir(path)]))

app.run(debug=True)