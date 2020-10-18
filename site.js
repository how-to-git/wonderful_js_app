const fs = require("fs");
const fse = require("fs-extra");

let files = fs.readdirSync("./src");

let data = "";

files.forEach((file) => {
  data = data + `<a href="src/${file}" style="font-size: 2rem">${file}</a><br>`;
});

let date = new Date().toISOString();

let html = `<!DOCTYPE html><html><head><title>Wonderful JS App</title><body><h3>Functions</h3>${data}<h4>${date}</h4></body></html>`;

fs.writeFileSync("docs/index.html", html);
fse.copySync("./src", "./docs/src");
