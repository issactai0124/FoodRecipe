const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "dist");
const expoPath = path.join(distPath, "_expo");
const newExpoPath = path.join(distPath, "expo");

if (fs.existsSync(expoPath)) {
  fs.renameSync(expoPath, newExpoPath);
}

const indexPath = path.join(distPath, "index.html");
let html = fs.readFileSync(indexPath, "utf8");

// Replace relative paths with absolute paths including /FoodRecipe/
html = html.replace(/\/_expo/g, '/FoodRecipe/expo');
html = html.replace(/href="\/favicon\.ico"/g, 'href="/FoodRecipe/favicon.ico"');

fs.writeFileSync(indexPath, html);
console.log(
  "Paths fixed to absolute with /FoodRecipe/ and _expo renamed to expo"
);
