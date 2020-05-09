import csv
import os
import html_wrapper



def create_tag(tag, value):
    if isinstance(value, list):
        return f'<{tag}>\n{"".join(value)}\n</{tag}>\n'
    else:
        return f'<{tag}>\n{value}\n</{tag}>\n'

html_dir = 'web/templates'
csv_dir = 'csv'

csv_files = os.listdir(csv_dir)

for csv_file in csv_files:
    with open(f"{csv_dir}/{csv_file}", 'r') as file:
        csv_file = csv_file.replace('.csv', '')
        csv_dicts = csv.DictReader(file, delimiter=',')

        headers = csv_dicts.fieldnames
        content = [x[y] for x in csv_dicts for y in headers]

        tags = [create_tag('tr', [create_tag('th', header) for header in headers])]

        steps = [i for i in range(0, int(len(content)/len(headers)), len(headers))]

        tags.append(create_tag('tr', [create_tag('td', value) for s in steps for value in content[s:s+len(headers)] ]))
            
        table = create_tag('table', [x for x in tags])

    with open('newhtml.html', 'w') as file:
        file.write(table)