import sys, subprocess, json
from  flask import Flask, request, render_template, jsonify
from os import listdir


app = Flask(__name__)

with  open('../standalone app/css/base.css', 'r') as sa_css , open('static/css/base.css', 'w') as web_css:
    data = sa_css.read()
    web_css.write(data)

subprocess.Popen([sys.executable, '../standalone app/csv2html.py', 'value'])

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
                href=f"/files/{file.replace('.html', '')}") for file in listdir(path)]))

@app.route('/files/<file_name>')
def get_file(file_name):
   return render_template(f'{file_name}.html')

@app.route('/save_page', methods=['POST'])
def post_page():
    data = json.loads(request.data)
    with open(f"templates/{data['title']}.html", 'w') as file:
        file.write(data['document'])
    return '200'

app.run(debug=True)