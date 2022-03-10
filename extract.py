import csv

file = open('list1.csv', 'r', encoding='utf8')
reader = csv.reader(file)

js_arr = '[\n'

for row in reader:
    family_name, name, class_name, _, what_finishes, _, _ = row
    if len(class_name) != 0:
        js_arr += f"\t['{name} {family_name}, {class_name}', '{what_finishes}'],\n"
    else:
        js_arr += f"\t['הרב {name} {family_name}', '{what_finishes}'],\n"

js_arr = js_arr[:-2] # Remove last ',\n'
js_arr += '\n]'
print((js_arr))

file.close()