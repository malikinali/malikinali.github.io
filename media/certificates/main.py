import os

cwd = os.getcwd()
files = os.listdir(cwd)

exclusions = ['main.py', 'old']

files = filter(lambda filename: filename not in exclusions, files)

for index, filename in enumerate(files):
	filepath = os.path.join(cwd, filename)
	if os.path.isfile(filepath):
		os.rename(filepath, f'certificate{index}.png')

