# Repo for learning Typescript / Javascript 

## JS 
* https://javascript.info/
* https://eloquentjavascript.net/

To run 
* `node {filename.js}`
* `nodemon {filename.js}` (loads file on save)
* open file in the browser e.g.

```html
<!-- script.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
    <h1 id="scriptOutput"></h1>
    <script src="script.js"></script>
</body>
</html>

```

```javascript
// script.js
document.addEventListener("DOMContentLoaded", function() {
    var output = document.getElementById("scriptOutput");
    output.textContent = "foo" // set this to the output value of the program
});

```

## TS
* https://www.typescriptlang.org/

To run
* `tsc {filename.ts}` (outputs filename.js) (see JS section)
* `npm install --save-dev ts-node nodemon` allowing you to use `nodemon {filename.js}`
