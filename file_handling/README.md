## file-handling in javascript

In JavaScript, file handling is primarily done in the context of web development or server-side programming. For client-side web development, the File API provides a way to interact with files using the File and FileReader objects. On the server side, if you are using Node.js, you can use the built-in fs module to handle file operations.

Let's cover the essential functions and concepts you need to know to start using file handling in JavaScript:

File Handling Example:
Here's a basic example of how to read the content of a file selected by the user:

```html
<input type="file" id="fileInput">
<script>
  document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const contents = event.target.result;
      console.log(contents); // Display the contents of the file
    };
    reader.readAsText(file);
  });
</script>
```

- [js-file-reader](https://www.digitalocean.com/community/tutorials/js-file-reader)
  
## File Handling in Node.js
In Node.js, the built-in fs module is used to handle file operations. To use the fs module, you need to first require it in your file and assign it to a variable:

```js
const fs = require("fs");
```

The fs module provides a number of functions that you can use to perform file operations. Here are some of the most commonly used functions:
### Reading Files
To read the contents of a file, use the fs.readFile() function. This function takes in the path of the file to read and a callback function that will be called with the contents of the file once the file has been read:

```js
fs.readFile("file.txt", function(err, data) {
  if (err) throw err;
  console.log(data);
});
```

The data argument passed to the callback function is a Buffer object. To convert the Buffer object to a string, you can use the toString() method:

```js
fs.readFile("file.txt", function(err, data) {
  if (err) throw err;
  console.log(data.toString());
});
```
#### Read as JSON Object
If you are reading a JSON file, you can use the JSON.parse() method to convert the data to a JavaScript object:

```js
fs.readFile("file.json", function(err, data) {
  if (err) throw err;
  const obj = JSON.parse(data);
  console.log(obj);
});
```
### Writing Files
To write to a file, use the fs.writeFile() function. This function takes in the path of the file to write and the data to write to the file:

```js
fs.writeFile("file.txt", "Hello World!", function(err) {
  if (err) throw err;
  console.log("File created");
});
```
### Appending Files
To append data to a file, use the fs.appendFile() function. This function takes in the path of the file to append to and the data to append to the file:

```js
fs.appendFile("file.txt", "Hello World!", function(err) {
  if (err) throw err;
  console.log("Data appended");
});
```
### Renaming Files
To rename a file, use the fs.rename() function. This function takes in the path of the file to rename and the new name of the file:

```js
fs.rename("file.txt", "new-file.txt", function(err) {
  if (err) throw err;
  console.log("File renamed");
});
```
### Deleting Files
To delete a file, use the fs.unlink() function. This function takes in the path of the file to delete:

```js
fs.unlink("file.txt", function(err) {
  if (err) throw err;
  console.log("File deleted");
});
```
### Checking if a File Exists
To check if a file exists, use the fs.exists() function. This function takes in the path of the file to check and a callback function that will be called with a boolean value indicating whether the file exists:

```js
fs.exists("file.txt", function(exists) {
  if (exists) {
    console.log("File exists");
  } else {
    console.log("File does not exist");
  }
});
```
### Checking if a File is Readable
To check if a file is readable, use the fs.access() function. This function takes in the path of the file to check, the constant fs.constants.R_OK, and a callback function that will be called with an error object if the file is not readable:

```js
fs.access("file.txt", fs.constants.R_OK, function(err) {
  if (err) {
    console.log("File is not readable");
  } else {
    console.log("File is readable");
  }
});
```
### Checking if a File is Writable
To check if a file is writable, use the fs.access() function. This function takes in the path of the file to check, the constant fs.constants.W_OK, and a callback function that will be called with an error object if the file is not writable:

```js
fs.access("file.txt", fs.constants.W_OK, function(err) {
  if (err) {
    console.log("File is not writable");
  } else {
    console.log("File is writable");
  }
});
```
### Checking if a File is Executable
```js
fs.access("file.txt", fs.constants.X_OK, function(err) {
  if (err) {
    console.log("File is not executable");
  } else {
    console.log("File is executable");
  }
});
```
