# Python 3 code to rename multiple# files in a directory or folder # importing os module
import os

# Function to rename multiple file
def main():
	names=[]
	path=input("input path")
	name=input("input name")
	folder=path.replace("\\","//")
	for count, filename in enumerate(os.listdir(folder)):
		
		dst = f"{name}{str(count)}.csv"
		names.append(dst)
		src =f"{folder}/{filename}" # foldername/filename, if .py file is outside folder        
		dst =f"{folder}/{dst}"# rename() function will        # rename all the files        
		os.rename(src, dst)# Driver Code
	print(names)
if __name__ == '__main__':
# Calling main() function    
	while True:
		main()
