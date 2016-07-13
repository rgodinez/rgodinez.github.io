import sys
import time
import os



def writeFile(postTitle):
	date = time.strftime('%Y-%m-%d')
	path = os.getcwd() + '\\_posts\\'
	
	postFile = open(path + date + '-' + postTitle.replace(' ', '-') + '.md', 'w')
	
	postFile.write('---')
	postFile.write('\nlayout: post')
	postFile.write('\ntitle: \"' + postTitle + '\"')
	postFile.write('\ndate: ' + date)
	postFile.write('\n---')
	postFile.write('\n')
	postFile.write('\n<!-- Post text goes here -->')
	
	postFile.close()

if __name__ == "__main__":
	#	Only argument is post title name
	if len(sys.argv) != 2:
		print "Missing post title: syntax is python create_new_post.py \"title name\""
		sys.exit()
	
	argument = ''.join(sys.argv[1:])
	
	writeFile(argument)