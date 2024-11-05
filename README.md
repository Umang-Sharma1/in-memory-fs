# In-Memory File System
## Overview 
This project implements an in-memory file system that supports various file operations such as creating directories, navigating through directories, and performing file operations like create, move, copy, and delete. The system includes a user-friendly command-line interface (CLI) for executing these operations.
## Features  
-**mkdir**: Create a new directory. 
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
  1. Clone the repository: ```sh git clone https://github.com/Umang-Sharma1/in-memory-fs.git cd in-memory-fs ```
  2. Install dependencies: ```sh npm install ```
  3. Compile TypeScript files: ```sh npm run build ```
  4. Start the in-memory file system: ```sh npm start ```
   ## Usage
  Once the file system is started, you can use the following commands:
  - **mkdir**: Create a new directory. ```sh mkdir [directory_name] ``` Example: ```sh mkdir mydir ```
  - **cd**: Change the current directory. ```sh cd [directory_path] ``` Example: ```sh cd mydir cd .. cd / ```
  - **ls**: List the contents of the current or specified directory. ```sh ls [optional_directory_path] ``` Example: ```sh ls ls mydir ``` 
  - **touch**: Create a new empty file. ```sh touch [file_name] ``` Example: ```sh touch myfile.txt ```
  - **echo**: Write text to a file. ```sh echo [text...] [file_name] ``` Example: ```sh echo "Hello World" myfile.txt ```
  - **cat**: Display the contents of a file. ```sh cat [file_name] ``` Example: ```sh cat myfile.txt ```
  - **mv**: Move a file or directory to another location. ```sh mv [source_path] [destination_path] ``` Example: ```sh mv myfile.txt newdir/myfile.txt ```
  - **cp**: Copy a file or directory to another location. ```sh cp [source_path] [destination_path] ``` Example: ```sh cp myfile.txt newdir/myfile.txt ```
  - **rm**: Remove a file or directory. ```sh rm [target_path] ``` Example: ```sh rm myfile.txt ```
  - **help**: Display a list of available commands and their usage. ```sh help ```
  - **exit**: Exit the file system. ```sh exit ```
    ## Testing
    Run the the tests using Jest:```sh npm test```
