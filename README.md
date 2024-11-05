# In-Memory File System
## Overview 
This project implements an in-memory file system that supports various file operations such as creating directories, navigating through directories, and performing file operations like create, move, copy, and delete. The system includes a user-friendly command-line interface (CLI) for executing these operations.
## Features  
- **mkdir**: Create a new directory. 
- **cd**: Change the current directory.
- **ls**: List the contents of the current or specified directory.
- **touch**: Create a new empty file.
- **echo**: Write text to a file.
- **cat**: Display the contents of a file.
- **mv**: Move a file or directory to another location.
- **cp**: Copy a file or directory to another location.
- **rm**: Remove a file or directory.
- **help**: Display a list of available commands and their usage.
- **exit**: Exit the file system.
  ## Requirements
  - Node.js
  - TypeScript
   ## Installation
  1. Clone the repository: ```git clone https://github.com/Umang-Sharma1/in-memory-fs.git cd in-memory-fs```
  2. Install dependencies: ```npm install```
  3. Compile TypeScript files: ```npm run build```
  4. Start the in-memory file system: ```npm start```
  ## Usage 
Once the file system is started, you can use the following commands: 
- **mkdir**: Create a new directory. ``` mkdir [directory_name] ``` Example: ``` mkdir mydir ``` 
- **cd**: Change the current directory. ``` cd [directory_path] ``` Example: ``` cd mydir cd .. cd / ``` 
- **ls**: List the contents of the current or specified directory. ``` ls [optional_directory_path] ``` Example: ``` ls ls mydir ``` 
- **touch**: Create a new empty file. ``` touch [file_name] ``` Example: ``` touch myfile.txt```
- **echo**: Write text to a file. ``` echo [text...] [file_name] ``` Example: ``` echo "Hello World" myfile.txt ``` 
- **cat**: Display the contents of a file. ``` cat [file_name] ``` Example: ``` cat myfile.txt ``` 
- **mv**: Move a file or directory to another location. ``` mv [source_path] [destination_path]``` Example: ``` mv myfile.txt newdir/myfile.txt ```
- **cp**: Copy a file or directory to another location. ``` cp [source_path] [destination_path] ``` Example: ``` cp myfile.txt 
newdir/myfile.txt ``` 
- **rm**: Remove a file or directory. ``` rm [target_path] ``` 
Example: ``` rm myfile.txt ``` 
- **help**: Display a list of available commands and their usage. ```help``` 
- **exit**: Exit the file system. ``` exit ```
 ## Testing Run the tests using Jest: 
 ``` npm test```

