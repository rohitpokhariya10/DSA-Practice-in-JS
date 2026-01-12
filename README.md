## 📥 How to Install `prompt-sync` (For User Input)

This project uses **prompt-sync** to take user input from the terminal while practicing DSA using JavaScript.

---

### ✅ Step 1: Ensure Node.js is Installed

Check your Node.js version:
```bash
node -v
If Node.js is not installed, download the LTS version from:
👉 https://nodejs.org

✅ Step 2: Initialize npm (Only Once)
Run this command in the project root directory:

bash
Copy code
npm init -y
This will create a package.json file.

✅ Step 3: Install prompt-sync
bash
Copy code
npm install prompt-sync
✅ Step 4: Use prompt-sync in Your JavaScript File
js
Copy code
let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));
console.log(n);
✅ Step 5: Run the File
bash
Copy code
node filename.js
📌 Notes
node_modules is intentionally ignored from GitHub.

After cloning this repository, make sure to run:

bash
Copy code
npm install
to install required dependencies.

This repository focuses on DSA logic, not project setup.
