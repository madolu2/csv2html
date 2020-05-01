class HTMLWrapper():
    def wrap_tags(self, tag_array, tag_name):
        wrapped_tag_array = []
        for tag in tag_array:
            wrapped_tag_array.append(f"\t\t<{tag_name}>{tag}</{tag_name}>\n")
        return wrapped_tag_array

    def wrap_tr(self, tag_array, tag_name):
        tr = '\t<tr>'
        tags = self.wrap_tags(tag_array, tag_name)
        for tag in tags:
            tr += tag
        tr += '\t</tr>'
        return tr

    def wrap_h1(self, h1):
        return f'<h1  class="sign">{h1}</h1>'

    def generate_table(self, th_array, td_arrays):
        table = "<table>\n"

        table += self.wrap_tr(th_array, 'th')
        for td_array in td_arrays:
            table += self.wrap_tr(td_array, 'td')

        table += "</table>"
        return table
    
    def generate_content_page(self, files):
        document = f'<!doctype html >\n' \
        '<html lang = "en" >\n' \
        '<head >\n' \
        f'<title > Content </title>\n' \
        '<meta charset = "utf-8" >\n' \
        '<meta name = "viewport" content = "width=device-width, initial-scale=1, shrink-to-fit=no" >\n' \
        '<link rel = "stylesheet" href = "static/css/base.css" >\n' \
        '<link rel="icon" href="data:;base64,=">\n' \
        '<link rel = "stylesheet" href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"' \
        'integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin = "anonymous" >\n' \
        '</head >\n' \
        '<body>\n'

        document += '\t<div class="grid-container" style="max-width: 30%; margin-left: auto; margin-right: auto;">'
        document += '\t<div class="row">'
        for file in files:
            file = file.replace('.html', '').lower()
            document += f'\t\t\n<a href="{file}"class="col text-center btn btn-dark m-2">{file}</a><br>\n'

        document += '\t</div>\n\t</div>'

        document += '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"' \
        'integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">' \
        '</script>' \
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"' \
        '    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">' \
        '</script>' \
        '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"' \
        '    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">' \
        '</script>' \
        '<script src="static/js/base.js"></script>\n' \
        '</body>' \
        '</html>' 

        return document
    
    def generate_html_document(self, th_array, td_arrays, file_name):
        document = f'<!doctype html >\n' \
        '<html lang = "en" >\n' \
        '<head >\n' \
        f'<title > {file_name} </title>\n' \
        '<meta charset = "utf-8" >\n' \
        '<meta name = "viewport" content = "width=device-width, initial-scale=1, shrink-to-fit=no" >\n' \
        '<link rel = "stylesheet" href = "static/css/base.css" >\n' \
        '<link rel="icon" href="data:;base64,=">\n' \
        '<link rel = "stylesheet" href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"' \
        'integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin = "anonymous" >\n' \
        '</head >\n' \
        '<body>\n'

        document += self.generate_table(th_array, td_arrays)

        document += '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"' \
        'integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">' \
        '</script>' \
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"' \
        '    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">' \
        '</script>' \
        '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"' \
        '    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">' \
        '</script>' \
        '<script src="static/js/base.js"></script>\n' \
        '</body>' \
        '</html>' 
        
        return document
