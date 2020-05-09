import csv
import os


def create_tag(tag, value):
    if isinstance(value, list):
        return f'<{tag}>\n{"".join(value)}\n</{tag}>\n'
    else:
        return f'<{tag}>\n{value}\n</{tag}>\n'

html_dir = 'html'
csv_dir = 'csv'

csv_files = os.listdir(csv_dir)

for csv_file in csv_files:
    with open(f"{csv_dir}/{csv_file}", 'r') as file:
        csv_file = csv_file.replace('.csv', '')
        csv_dicts = csv.DictReader(file, delimiter=',')

        headers = csv_dicts.fieldnames
        cells = [create_tag('td', x[y]) for x in csv_dicts for y in headers]

        tags = [create_tag('tr', [create_tag('th', header) for header in headers])]

        steps = [i for i in range(0, int(len(cells)/len(headers)), len(headers))]

        cells = [cells[step:step+len(headers)] for step in steps]

        [tags.append(tag) for tag in [create_tag('tr', cell) for cell in cells]]

        table = create_tag('table', tags)
        
    with open(f'{html_dir}/template.html', 'r') as file:
        data = file.read()
    
    with open(f'{html_dir}/{csv_file}.html', 'w') as file:
        file.write(data.replace('replace_title', csv_file).replace('replace_body', table))

