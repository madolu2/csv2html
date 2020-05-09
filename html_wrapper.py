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
    
    
    def generate_content(self):
        pass
   