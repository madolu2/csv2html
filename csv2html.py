import csv
import os
import html_wrapper


html_dir = 'web/templates'
csv_dir = 'csv'

csv_files = os.listdir(csv_dir)

wrapper = html_wrapper.HTMLWrapper()
with open(f"{html_dir}/contentPage.html", 'w') as cp:
    cp.write(wrapper.generate_content_page(csv_files))

for csv_file in csv_files:
    with open(f"{csv_dir}/{csv_file}", 'r') as file:
        csv_file = csv_file.replace('.csv', '')
        th_array = []
        td_arrays = []
        csv_dicts = csv.DictReader(file, delimiter=',')

        for csv_dict in csv_dicts:
            for key in csv_dict:
                if not key in th_array:
                    th_array.append(key)
            td_array = []
            for key in csv_dict:
                td_array.append(csv_dict[key])
            td_arrays.append(td_array)

        document = wrapper.generate_html_document(th_array, td_arrays, csv_file)
        with open(f"{html_dir}/{csv_file}.html", 'w', encoding='utf-8') as file:
            file.write(document)