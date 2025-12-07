const QUESTIONS = [
  {
    "question": "When you type a URL in your browser, which of these totally bizarre things does not happen during the page load process?",
    "answers": [
      "Your browser checks if the domain is cached locally.",
      "Your browser performs a secret handshake with the internet elves.",
      "A DNS lookup finds the server's IP address.",
      "The browser parses HTML to build the DOM tree."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "HTTP is a request to a server for retrieving a web page, but what does HTTP mean?",
    "answers": [
      "How To Transfer Page",
      "High Traffic Transfer Plan",
      "Hybrid Transmission Technical Path",
      "HyperText Transfer Protocol"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Which protocol is used to establish a secure connection between browser and server?",
    "answers": [
      "FTP",
      "TLS/SSL",
      "SSH",
      "SMTP"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which one of these Linux distros isn't based on Debian?",
    "answers": [
      "Ubuntu",
      "Red Hat",
      "Pop OS",
      "Kali"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which one of these item features an incorrect MarkDown syntax ?",
    "answers": [
      "# Heading 1",
      "*Italic*",
      "[Text](Url)",
      "`code`"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "What was one key reason for the dominance of the LAMP stack in the early 2000s?",
    "answers": [
      "It was fully proprietary and commercial",
      "It required no configuration or setup",
      "It was open source, free, and easy to deploy",
      "It supported only static HTML content"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which of the following situations can never occur when you load a web page in your browser?",
    "answers": [
      "After entering the URL, the browser does not always perform a DNS lookup.",
      "The server sends the HTML file while the browser is performing the TLS/SSL handshake.",
      "The browser builds the DOM (Document Object Model) from the received HTML.",
      "The browser might discover additional resources (images, scripts, stylesheets) while parsing the HTML and will also execute the corresponding JavaScript."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What project do we have to do?",
    "answers": [
      "Create a game",
      "Create a website",
      "Refound boostcamp",
      "Attack a small company"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What language is recommended?",
    "answers": [
      "Query",
      "JavaScript",
      "C++",
      "Python"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is an IP address?",
    "answers": [
      "A password",
      "A Wifi key",
      "An ID for each device",
      "A link to a site"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which command shows the commit history?",
    "answers": [
      "`git status`",
      "`git fetch`",
      "`git log`",
      "`git merge`"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What is the function of the DNS Lookup?",
    "answers": [
      "Create a secure connection",
      "Send an HTTP request to the server",
      "Translate the domain name into an IP address",
      "Verify the site's SSL certificate"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "When a user enters a URL in their browser, what is the first step in the process of loading a web page?",
    "answers": [
      "The server directly generates the HTML page",
      "The browser checks its DNS or OS cache",
      "The browser sends an HTTP request to the server",
      "The browser directly renders the DOM"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "When a user enters a web address in their browser, which steps are part of fetching and displaying the page?",
    "answers": [
      "The browser may use a saved IP address to skip the DNS lookup.",
      "The browser shows the page right after the TCP connection is made.",
      "The browser establishes a secure connection with the server before sending HTTPS requests.",
      "The web server always sends static HTML and never generating pages dynamically."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "When you enter a URL in the browser, which of the following steps typically occur before the browser sends an HTTP request to the server?",
    "answers": [
      "DNS lookup",
      "Browser caching check",
      "TLS/SSL handshake",
      "Server Processing"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ]
  },
  {
    "question": "Which technologies were part of the foundations of the Web as envisioned by Tim Berners-Lee in 1989?",
    "answers": [
      "HTTP (HyperText Transfer Protocol)",
      "HTML (HyperText Markup Language)",
      "JavaScript",
      "URL / URI (Uniform Resource Identifier)"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ]
  },
  {
    "question": "During the HTTP request-response cycle, which of the following scenarios are possible?",
    "answers": [
      "The browser can send multiple HTTP requests simultaneously for different resources (images, CSS, JavaScript) after parsing the initial HTML.",
      "An HTTP response with status code 404 means the TCP connection failed to establish with the server.",
      "The server can return dynamic content by running scripts or querying databases before sending the HTTP response.",
      "HTTPS requires a TLS/SSL handshake to be completed before any HTTP requests can be sent securely."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "During the rendering of a web page, which steps can trigger additional HTTP requests?",
    "answers": [
      "Parsing the initial HTML",
      "Executing JavaScript scripts",
      "Establishing the TLS connection",
      "DNS resolution"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "From the late 1990s to the mid-2000s, the web entered the LAMP stack era. Which software belong to this acronym LAMP?",
    "answers": [
      "Powershell",
      "Apache",
      "Linux",
      "Microsoft Windows"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Which of the following is NOT part of the basic flow when loading a web page?",
    "answers": [
      "DNS Lookup",
      "HTTP Request",
      "Browser Rendering",
      "Blockchain Mining"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "What applies for both SSH and SSL/TLS?",
    "answers": [
      "Used only for file transfer",
      "Establish secure communication between client and server",
      "They use symmetrical keys to secure the exchange",
      "They require HTTP methods to function"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "When loading a web page over HTTPS, which of the following statements about the TLS/SSL handshake is true?",
    "answers": [
      "The handshake only exchanges encryption keys and does not verify the server’s identity.  ",
      "The handshake negotiates encryption algorithms, exchanges keys, and can authenticate the server.  ",
      "The TLS/SSL handshake happens after the browser has fully rendered the page.",
      "The handshake is optional for HTTPS connections and can be skipped to speed up loading."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Parmi les étapes suivantes, lesquelles font partie du processus de chargement d’une page web après avoir saisi une URL dans le navigateur ?",
    "answers": [
      "DNS Lookup (traduction du nom de domaine en adresse IP)",
      "Compilation du code source en langage machine par le navigateur",
      "TCP/TLS Handshake (établissement d’une connexion sécurisée)",
      "HTTP Request (envoi d’une requête au serveur pour obtenir la ressource)"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "CGI was a revolution for the web, but it quickly showed some limitations. Which of the following statements best explains why the LAMP stack took over?",
    "answers": [
      "CGI could not display images",
      "CGI had performance and scalability issues",
      "CGI only worked on Windows",
      "CGI was not compatible with JavaScript"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which is the correct best practice to avoid a dirty package.json?",
    "answers": [
      "Never fill in the package.json file because it configures itself automatically.",
      "Add only the necessary dependencies and use npm init or yarn init to generate a clean file.",
      "Write all scripts directly inside the source code instead of package.json.",
      "Keep every installed dependency, even unused ones to avoid compilation errors."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What were the main advantages of CGI?",
    "answers": [
      "First real dynamic content on the web",
      "Language flexibility",
      "Built-in security and no vulnerabilities",
      "Easy scalability"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "Metaphorized MCQ Question: Milo the AI 🤖 and the DNS, a sober friend who always knows the right address.\n\nImagine you’re at a freshman party at ECE.  \nYou’re way too drunk to drive, but luckily your best friend is an AI (Milo) who just started school with you.  \nHe doesn’t drink alcohol (otherwise his circuits would fry ⚡), but he can still take you home safely.\n\nIn the web world, who plays the role of Milo, the AI friend who finds the exact address and drives you there?",
    "answers": [
      "DNS – translates the name into an address (IP)",
      "TCP – traces the route and keeps the connection alive",
      "HTTP – carries your info along the way",
      "HTML – the house once you’ve arrived, with everything inside"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "What is the advantage of Single Page Applications",
    "answers": [
      "They don't use CSS",
      "They do not need to go through a DNS protocol because their URL are already linked to an IP address.",
      "they can work without an internet connection",
      "They allow you to load a single HTML page and dynamically update the content with JavaScript"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Which of the following correctly describes the first step when loading a web page after you type a URL and press Enter?",
    "answers": [
      "HTTP Request",
      "TCP/SSL Handshake",
      "Browser Pre-Checks",
      "Server Processing"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which of the following are good practices for a web project?",
    "answers": [
      "Use consistent naming conventions like camelCase, snake_case, kebab-case",
      "Use .gitignore to exclude node_modules",
      "Use spaces or accents in file names",
      "Keep all unused dependencies in package.json"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "Quel protocole est utilisé pour la communication entre un navigateur et un serveur web ?",
    "answers": [
      "HTTP",
      "FTP",
      "DNS",
      "SMTP"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which of the following features are **not** implemented in the markdown language?",
    "answers": [
      "Bold text",
      "Links on text",
      "Strikethrough text",
      "Underline text"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Which of the following technologies were created by Linus Torvalds?",
    "answers": [
      "Python",
      "Linux",
      "Unix",
      "Git"
    ],
    "correctAnswers": [
      1,
      3
    ]
  },
  {
    "question": "What is the main role of a web browser's rendering engine?",
    "answers": [
      "To compile the browser's source code",
      "To translate HTML, CSS, and JavaScript into a visual web page",
      "To handle only JavaScript script execution",
      "To optimize HTTP requests between the client and server"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelle innovation majeure des années 1990 a permis d’ajouter des images et de l’interactivité aux pages web ?",
    "answers": [
      "Le protocole HTTP/2.",
      "Le navigateur Mosaic et l’introduction du format GIF.",
      "Le framework React.",
      "Le langage Python côté serveur."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Qu'est ce qu'une requête DNS:",
    "answers": [
      "Si l'adresse IP n'est pas mise en cache, le navigateur envoie une requête à un résolveur DNS pour trouver l'adresse IP de example.com",
      "Si l'adresse MAC n'est pas mise en cache, le navigateur envoie une requête à un résolveur DNS pour trouver l'adresse MAC de example.com",
      "Si l'adresse IP est mise en cache, le navigateur envoie une requête à un résolveur DNS pour trouver l'adresse IP de example.com",
      "Si l'adresse MAC est mise en cache, le navigateur envoie une requête à un résolveur DNS pour trouver l'adresse MAC de example.com"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "What language can be used to build a website",
    "answers": [
      "Python",
      "HTML",
      "JS",
      "Any of them"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "What is the main purpose of the DNS technology in loading a web page ?",
    "answers": [
      "Resolve the IP address of a domain",
      "Store HTML files",
      "Serve JavaScript scripts",
      "Manage databases"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which Git command creates a “snapshot” of changes in the repository?",
    "answers": [
      "git branch",
      "git push",
      "git commit",
      "git clone"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What does a package typically contain at its root in JavaScript projects?",
    "answers": [
      "index.html",
      "main.js",
      "package.json",
      "config.xml"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel est le rôle de Node.js ?",
    "answers": [
      "Est un langage de programmation différent de JavaScript",
      "Sert uniquement à créer des applications mobiles Android",
      "Permet d’exécuter JavaScript côté serveur",
      "Est intégré nativement dans tous les navigateurs web modernes"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "In the format X.Y.Z for the version packages, what does the Y mean?",
    "answers": [
      "Patch - primarily for bug fixes",
      "Major - introduces breaking changes",
      "Minor - adds new features while maintaining backward compatibility",
      "All the answers above"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which of the following is (or are) a JavaScript package manager?",
    "answers": [
      "npm",
      "Yarn",
      "Node",
      "Json"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "In CommonJS, which syntax is correct to import a module?",
    "answers": [
      "`require('./math')`",
      "`import { add } from './math.js'`",
      "`module.exports = { add }`",
      "`export function add(a, b) { return a + b; }`"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "In semantic versioning, which change would be most likely to trigger an increase in the `X` in version `X.Y.Z`?",
    "answers": [
      "adding a backward-compatible feature",
      "improving performance without changing behavior",
      "fixing a type in documentation",
      "introducing a breaking change in the API"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "What is the command line that creates a new Node.js project?",
    "answers": [
      "`npm install node`",
      "`node create project`",
      "`npm init -y`",
      "`nodejs start project`"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What is the primary purpose of the `npm install` command?",
    "answers": [
      "To start a web server",
      "To install Node.js",
      "To install project dependencies",
      "To update the operating system"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which of the following is a web framework?",
    "answers": [
      "React",
      "Vue.js",
      "Android",
      "Django"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ]
  },
  {
    "question": "In what case would you update the Y, in X.Y.Z version format?",
    "answers": [
      "When making major changes to the software",
      "When fixing bugs",
      "When you perform general maintenance updates",
      "When making enhancements to existing software"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "You have a package with version 1.2.3. You add a new feature, but the old code still works. What is the new version number?",
    "answers": [
      "2.0.0",
      "1.3.0",
      "1.2.4",
      "0.3.0"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which company owns the JavaScript trademark?",
    "answers": [
      "Google",
      "Oracle",
      "Microsoft",
      "Nvidia"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "JavaScript is:",
    "answers": [
      "Originally a markup language for styling web pages",
      "Originally a programming language for operating system development",
      "Originally a client-side scripting language for web browsers",
      "Originally a server-side scripting language for web browsers"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What is the main difference between synchronous and asynchronous code in programming?",
    "answers": [
      "Synchronous code runs all instructions at the same time, while asynchronous code runs only one.",
      "Synchronous code blocks execution until a task is finished, while asynchronous code allows other tasks to continue while waiting for the result.",
      "Synchronous code is always faster than asynchronous code.",
      "Asynchronous code only works in JavaScript."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "If semantic versioning (X.Y.Z.) were applied to cars, what modification would be noted in \"X\"?",
    "answers": [
      "Fix a broken light bulb",
      "Add a new GPS",
      "Completely change the car, with a new engine and a new architecture",
      "Replace a wheel"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What information can be found in a package.json file?",
    "answers": [
      "The project's name, description, and version",
      "The full server configuration",
      "Dependencies and scripts",
      "The application's source code"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "What does the  x character mean in a version (e.g., 1.2.x)?",
    "answers": [
      "Only the exact version 1.2.0",
      "All versions 1.2.0, 1.2.1, 1.2.2, etc.",
      "All versions above 1.2",
      "The latest published version of the 1.2 series (e.g., 1.2.9)"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "According to semantic versioning (SemVer), which part of the version `2.4.7` changes when a new feature is added without breaking compatibility?",
    "answers": [
      "2",
      "4",
      "7",
      "All three numbers"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following statements about a JavaScript runtime are correct?",
    "answers": [
      "It combines a JavaScript engine with additional APIs and libraries.",
      "It is limited to executing code only inside web browsers.",
      "Node.js is an example of a JavaScript runtime.",
      "A JavaScript runtime can only execute synchronous code and cannot handle asynchronous operations."
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Spider-Man is swinging through New York.  \nWhen he shoots a web at a building, he doesn’t wait stuck in mid-air — he keeps moving until the web holds and pulls him forward.  \n\nIn Node.js, what works like Spider-Man’s web, letting code “continue swinging” without being blocked while waiting for the result?  ",
    "answers": [
      "**Callbacks / Promises / Async-Await** – the web line that connects and continues later",
      "**The Call Stack** – Peter himself, doing everything step by step",
      "**Git** – the Daily Bugle keeping track of his past adventures",
      "**`package.json`** – Aunt May’s recipe book with all ingredients listed"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which of the following statements about JavaScript packages and NPM are true?",
    "answers": [
      "The `package.json` file stores a project's name, version, dependencies, and scripts.",
      "`devDependencies` are required for the application to run in production.",
      "`npm install package1 package2` installs the specified packages into the `node_modules` folder.",
      "Lock files like `package-lock.json` ensure consistent dependency versions across installations."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "Which statement is true about **CommonJS** modules?",
    "answers": [
      "They use `import` and `export`.",
      "They load modules asynchronously.",
      "They use `require()` and `module.exports`.",
      "They are only used in browsers."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What is the difference between dependencies and devDependencies?",
    "answers": [
      "devDependencies are required to run the application",
      "devDependencies are used only during development",
      "dependencies are used only for testing",
      "There is no difference"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is the main difference between CommonJS and ES Modules?",
    "answers": [
      "CommonJS uses synchronous loading, while ES Modules supports asynchronous loading.",
      "CommonJS is supported only in browsers, while ES Modules is not.",
      "CommonJS is faster than ES Modules in all cases.",
      "CommonJS cannot export functions, but ES Modules can."
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which of these propositions is NOT a package manager for JavaScript:",
    "answers": [
      "NPM",
      "NVM",
      "Yarn",
      "PNPM"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What’s the difference between dependencies and devDependencies in package.json ?",
    "answers": [
      "dependencies are for the development and devDependencies for the production.",
      "devDependencies are used only during the development and dependencies for execution of the application",
      "It is the same one, just the name is different",
      "devDependencies are used all the time"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "In semantic versioning (X.Y.Z), what does Y represent ?",
    "answers": [
      "Patch version",
      "Minor version : new features, compatible",
      "Major version : breaking changes",
      "Experimental version"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which global object in Node.js can be used to print messages directly to the console?",
    "answers": [
      "console",
      "logger",
      "print",
      "output"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which one of these acronyms isn't a package manager:",
    "answers": [
      "pnpm",
      "Apkg",
      "NPM",
      "Yarn"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following commands initializes a Node.js project with NPM ?",
    "answers": [
      "npm begin",
      "npm init -y",
      "npm start",
      "npm init"
    ],
    "correctAnswers": [
      1,
      3
    ]
  },
  {
    "question": "package.json file allows you to...",
    "answers": [
      "Execute only the HTML files in the project",
      "Describe the dependencies, scripts, version, and project information",
      "Compile JavaScript code into binary which makes the machine run it faster",
      "Execute asynchronous code directly"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Among the following, which one is not a devDependency ?",
    "answers": [
      "ts-node",
      "webpack",
      "mocha",
      "axios"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "In the `package.json` file, what is the syntax to only specify the major **and** minor version of a package ?",
    "answers": [
      "`1.2.3`",
      "`~1.2.3`",
      "`^1.2.3`",
      "`>1.2.3`"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following statements about JavaScript modules and asynchronous programming are correct?",
    "answers": [
      "CommonJS modules in Node.js are loaded synchronously using require().",
      "ES Modules are always executed before CommonJS modules in Node.js, regardless of import order.",
      "Async/Await is built on top of Promises and makes asynchronous code easier to read.",
      "Semantic Versioning indicates breaking changes by incrementing the major version number."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "Quel est l’intérêt principal des fichiers package-lock.json ou yarn.lock ?",
    "answers": [
      "Améliorer la vitesse du code",
      "Assurer que toutes les installations utilisent les mêmes versions de dépendances",
      "Supprimer les dépendances inutiles",
      "Rendre le projet compatible avec tous les OS"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following statements about Node.js is **TRUE**?",
    "answers": [
      "Node.js is a JavaScript framework that runs only in web browsers.",
      "Node.js is a JavaScript runtime built on the V8 engine that allows running JavaScript on the server side.",
      "Node.js is a package manager for installing JavaScript libraries.",
      "Node.js is a database management system used to store API data."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is correct about JavaScript modules ?",
    "answers": [
      "ES Modules use import and export.",
      "ES Modules use module.exports to export.",
      "CommonJS uses require() to import modules.",
      "CommonJS loads modules asynchronously."
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Which of the following statements is **correct** about asynchronous programming in JavaScript?",
    "answers": [
      "Synchronous functions allow code to run in parallel without blocking execution.",
      "Promises (`Promise`) allow chaining asynchronous operations using `.then()` and `.catch()`.",
      "Callbacks always prevent the problem of \"callback hell.\"",
      "`async/await` is an alternative independent of promises and does not rely on them."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "In the CommonJS system, we use:",
    "answers": [
      "import and export",
      "require and module.exports",
      "include and define",
      "use and provide"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "In an Express.js application, when handling a GET request, which of the following statements about query parameters in the URL is correct?",
    "answers": [
      "Query parameters must always be included in the body of a POST request.",
      "Query parameters are separated by the # character in the URL.",
      "Query parameters are optional, appear after the ? in the URL, and are separated by the & character.",
      "Query parameters can only be specified once per key."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which HTTP command is not part of a REST API?",
    "answers": [
      "GET",
      "POST",
      "FETCH",
      "DELETE"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which version is compatible with ^3.2.4 ?",
    "answers": [
      "1.1.1",
      "2.2.2",
      "3.3.3",
      "4.4.4"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which one is not a package managers for JavaScript?",
    "answers": [
      "Node.js",
      "Yarn",
      "pnpm",
      "NPM"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "How many \"package.json\" file are created after this code :\n\n```sh\nnpm init -y\nnpm install package1 package2 package3\n```",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Where can we expect description in a package.json file?",
    "answers": [
      "In the general part",
      "In the dependencies part",
      "In the devDependencies part",
      "It should never be declared"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which command is used to create a new Node.js project and automatically generate a `package.json` file?",
    "answers": [
      "npm create project",
      "node init",
      "npm init",
      "yarn start"
    ],
    "correctAnswers": [
      2,
      3
    ]
  },
  {
    "question": "Express.js is..",
    "answers": [
      "A Python framework",
      "A framework for Node.js",
      "A database management system",
      "A front-end design tool"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which HTTP method should be used when updating part of a resource in REST?",
    "answers": [
      "PUT",
      "PATCH",
      "POST",
      "GET"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following statements about REST APIs are correct ?",
    "answers": [
      "REST APIs expose a set of HTTP routes that clients can access.",
      "PUT and PATCH requests are both used to update resources, but PATCH is for partial updates.",
      "REST APIs always require GraphQL to function correctly.",
      "REST APIs usually communicate using JSON format."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ]
  },
  {
    "question": "What is the purpose of the POST method in HTTP ?",
    "answers": [
      "create a new resource",
      "retrieve a specific resource",
      "update a specific resource",
      "remove  a resource"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which question has five standard HTTP methods?",
    "answers": [
      "GET POST PUT PATCH DELETE",
      "GET POST ADD PATCH DELETE",
      "GET CREATE PUT PATCH DELETE",
      "GET POST PUT PATCH DROP"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which of the following affirmations are correct about the query parameters?",
    "answers": [
      "passed in the URL after the `&` character",
      "passed in the URL after the `?` character",
      "separated by `&` character",
      "separated by `?` character"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Which of the following statements correctly describe the use of HTTP methods?",
    "answers": [
      "DELETE: removes a resource identified by its id",
      "GET: retrieves a resource or a collection of resources",
      "PUT: only adds a new resource and cannot update",
      "PATCH: partially updates a resource"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ]
  },
  {
    "question": "What is the main purpose of a REST API?",
    "answers": [
      "To build graphical interfaces for applications",
      "To expose a set of HTTP routes for communicating with resources",
      "To compile JavaScript code into machine code",
      "To replace relational databases"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "If I want to add an entire ressource but it might already exists, and i need to entirely modify it if it is the case. Which REST API method do I need to use according to conventions ?",
    "answers": [
      "GET",
      "PUT",
      "POST",
      "PATCH"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is the main difference between REST API and GraphQL?",
    "answers": [
      "REST APIs allow clients to request specific data, while GraphQL returns fixed data structures.",
      "REST APIs use multiple endpoints and fixed data structures, while GraphQL offers a single endpoint for tailored queries.",
      "REST APIs can only return JSON, while GraphQL can return data in XML format.",
      "REST APIs can only be used for web applications, whereas GraphQL is specifically designed for mobile applications."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following statements about REST APIs is true?",
    "answers": [
      "REST APIs must always return data in XML format",
      "REST requires using cookies to maintain client sessions",
      "REST is stateless: each request contains all the information needed",
      "REST only works with relational databases"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What conditions are being checked by this test?\n\n```js\nawait request(app)\n  .get('/user')\n  .expect('Content-Type', /json/)\n  .expect(200)\n```",
    "answers": [
      "Response must be JSON",
      "Response must return HTTP 200",
      "Response must contain a user object",
      "Response must not contain headers"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "Which of the following is a feature of the Express.js framework?",
    "answers": [
      "Provides a minimalist framework for building web applications with Node.js",
      "Includes built-in support for unit testing libraries like Mocha and Chai",
      "Simplifies the creation of routes with methods like `app.get()` and `app.post()`",
      "Can be used to build robust APIs and expose a front end"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "What are the advantages and disadvantages of REST?",
    "answers": [
      "REST is simple and based on HTTP, but it can become limited for complex exchanges.",
      "REST only allows real-time calls and prohibits any form of caching.",
      "REST only works with JavaScript and cannot be used with other languages.",
      "REST completely replaces databases."
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which tools can be used to test a REST API?",
    "answers": [
      "Postman",
      "Wireshark",
      "Swagger Inspector",
      "Nmap"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Which HTTP method is used to partially update an existing resource in a REST API?",
    "answers": [
      "GET",
      "POST",
      "PUT",
      "PATCH"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Which statements about REST API methods are correct?",
    "answers": [
      "GET is used to retrieve data from a resource.",
      "POST is used to restrieved deleted resources",
      "PUT update an existing resource with new data",
      "PATCH applies a partial update to a resource"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "Which libraries are typically used for HTTP assertions in unit tests?",
    "answers": [
      "Supertest",
      "Nodemon",
      "Chai",
      "Babel"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "What is the main role of Express.js in developing a REST API?",
    "answers": [
      "It allows you to create graphical interfaces for mobile applications.",
      "It provides a minimalist framework to create servers and manage HTTP routes.",
      "It replaces standard HTTP methods like GET and POST with custom methods."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What does a front-end application do with a REST API ?",
    "answers": [
      "It directly manipulates the database",
      "It sends requests and consumes data provided by the API",
      "It exposes endpoints for other applications to consume (back-end role)",
      "It runs the server code and the database"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which package provides assertion functionality for testing in JavaScript ?",
    "answers": [
      "Node.js",
      "Mocha",
      "Supertest",
      "Chai"
    ],
    "correctAnswers": [
      2,
      3
    ]
  },
  {
    "question": "Which of the following statements about a REST API are correct?",
    "answers": [
      "A REST API uses HTTP verbs such as GET, POST, PUT, DELETE.",
      "A REST API communicates only in XML.",
      "A REST API exposes a set of HTTP routes.",
      "A REST API is always limited to a single front-end application."
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Which is a best practice when writing unit tests?",
    "answers": [
      "Tests should depend on the result of the previous test",
      "Tests should be fast and independent",
      "Tests should check as many things as possible, even unnecessary ones",
      "Tests should intentionally be slow to be realistic"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What will be the response when requesting `/hello?name=Paul` in this Express app?\n\n```js\napp.get('/hello/:name?', (req, res) => {\n  res.send(\"Hello \" + (req.params.name || req.query.name))\n})\n```",
    "answers": [
      "Hello :name",
      "Hello undefined",
      "Hello Paul",
      "{ \"name\": \"Paul\" }"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which NodeJS packages can be used to create APIs ?",
    "answers": [
      "Mocha",
      "Express",
      "GraphQL",
      "Nodemon"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is the correct way to access a route parameter in Express?",
    "answers": [
      "req.query.name",
      "req.param.name",
      "req.body.name",
      "req.params.name"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Which HTTP method should you use to partially update a resource?",
    "answers": [
      "GET",
      "PUT",
      "PATCH",
      "DELETE"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quelle affirmation décrit correctement le rôle de **Express.js** dans le développement d’une application web ?",
    "answers": [
      "C’est une base de données relationnelle utilisée pour stocker les données exposées par l’API",
      "C’est un framework minimaliste pour Node.js permettant de créer des serveurs web et des APIs REST de manière simplifiée",
      "C’est une librairie front-end destinée à consommer des APIs REST via des pages web et applications mobiles",
      "C’est un protocole de communication standard défini par le W3C pour échanger des données en JSON"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following statements about REST API is true?",
    "answers": [
      "REST API uses HTTP Verbs (GET, POST, PUT, DELETE, ...).",
      "REST API stands for Representational State Transport Application Programming Interface.",
      "REST API exposes a set of HTTP routes.",
      "REST API usually communicates in JSON."
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "Which method allows one to search for a specific array in a database instance?",
    "answers": [
      "search()",
      "find()",
      "scan()",
      "dbscan()"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following statements about testing web APIs are correct?",
    "answers": [
      "Postman and Swagger Inspector can simulate HTTP requests to test APIs.",
      "The curl command can be used in a terminal to send GET and POST requests.",
      "Unit tests verify the integration between multiple external services.",
      "Mocha, Supertest, and Chai are tools commonly used for unit testing in Node.js."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ]
  },
  {
    "question": "Which HTTP method is used to partially update a specific resource?",
    "answers": [
      "GET – retrieve a specific resource or collection",
      "POST – create a new resource",
      "PUT – update an entire resource",
      "PATCH – partially update a resource"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "In Express.js, how do you define a route parameter called \"id\" in the URL \"/user/123\" ?",
    "answers": [
      "app.get('/user?id', ...)",
      "app.get('/user/:id', ...)",
      "app.get('/user/{id}', ...)",
      "app.get('/user/<id>', ...)"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "In a unit test for a REST API built with Express, which tools or libraries can be used?",
    "answers": [
      "Mocha or Node’s built-in `test` module for structuring tests",
      "Supertest for HTTP assertions",
      "Chai for assertion styles like `expect`, `should`, or `assert`",
      "Swagger for running automated unit tests"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "In Express, how do you define a simple GET route?",
    "answers": [
      "app.fetch('/', … )",
      "app.get('/', … )",
      "app.route('/', … )",
      "app.query('/', … )"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What does DOM mean?",
    "answers": [
      "Data Object Management",
      "Document Object Model",
      "Document Object Manager",
      "Distributed Object Model"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following statements best describes the difference between a library and a framework?",
    "answers": [
      "A library dictates the overall structure of your project, while a framework is a set of reusable functions you can call.",
      "A library provides building blocks you can use anywhere, while a framework dictates how your project is structured.",
      "Both libraries and frameworks are interchangeable terms in software development.",
      "Frameworks are always smaller and simpler than libraries."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of these disadvantages of using a framework are true?",
    "answers": [
      "Frameworks are building blocks that can't be used anywhere",
      "Frameworks are hard to customize and extend",
      "Frameworks start simple, then grow into complex systems",
      "Frameworks make your application more insecure"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Which of these is a feature of Next.js?",
    "answers": [
      "File-system based routing with dynamic routes",
      "Pre-rendering (SSG and SSR) per page",
      "Virtual DOM implementation replacing React",
      "Database ORM built into the Framework"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "Which of the following is **NOT** something React provides out of the box, but a framework like Next.js does?",
    "answers": [
      "JSX for writing components",
      "State management with hooks",
      "Server-side rendering (SSR)",
      "Virtual DOM for efficient UI updates"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which of the following statements are true?",
    "answers": [
      "React is a library, whereas Angular is a framework",
      "React is a framework, whereas Angular is a library",
      "Angular is mainly used to build web applications",
      "React is mainly used to build user interfaces"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "What is the main purpose of React?",
    "answers": [
      "To manage databases",
      "To build user interfaces (UI)",
      "To handle server-side authentication",
      "To deploy applications"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "In React, which concepts are essential to manage the state of an application?",
    "answers": [
      "Props",
      "CSS classes",
      "State",
      "Hooks"
    ],
    "correctAnswers": [
      2,
      3
    ]
  },
  {
    "question": "What is the main difference between a library like React and a framework like Angular or Next.js?",
    "answers": [
      "A framework always runs faster than a library.",
      "A library imposes your app’s structure, while a framework lets you organize it freely.",
      "A library provides reusable building blocks you can integrate anywhere, while a framework defines the overall structure and dictates how those blocks are used.",
      "Frameworks are only used for the backend, while libraries are for the frontend."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What is the primary difference between a library and a framework in software development?",
    "answers": [
      "A library is a set of tools that you can use when you need it, but a framework decides the structure of your project.",
      "A framework gives more flexibility than a library in coding style.",
      "A library is always larger in size than a framework.",
      "A framework allows developers to operate independently of the structure, whereas a library enforces certain coding practices and patterns."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "In Next.js, what is the purpose of creating a folder with square brackets, for example /articles/[articleId]/page.js?",
    "answers": [
      "It automatically generates an API endpoint",
      "It creates a dynamic route that can render different content based on the URL",
      "It defines a reusable React component",
      "It imports a global CSS file into all pages"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following propositions are *NOT* frameworks ?",
    "answers": [
      "React",
      "Next.js",
      "jQuery",
      "Vue.js"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Which of the following statements about React is true?",
    "answers": [
      "React is a JavaScript framework created by Google",
      "React is a library used to build user interfaces",
      "React works only with the backend",
      "React is open source and maintained by Facebook"
    ],
    "correctAnswers": [
      1,
      3
    ]
  },
  {
    "question": "React is best described as:",
    "answers": [
      "A full-featured JavaScript framework for building SPAs",
      "A JavaScript library focused on building user interfaces",
      "A backend library for managing databases",
      "A CSS preprocessor"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is the primary difference between a library and a framework?",
    "answers": [
      "Libraries dictate how projects are structured, while frameworks provide reusable UI components.",
      "Libraries are used to build UI components, while frameworks are used to manage state.",
      "Libraries are building blocks that can be used anywhere, while frameworks dictate how your project will be structured.",
      "Libraries are for backend development, while frameworks are for frontend development."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What will be displayed after clicking the button twice in the following React component?\n\n```js\nimport { useState } from 'react'\n\nfunction Counter() {\n  const [count, setCount] = useState(0)\n\n  const handleClick = () => {\n    setCount(count + 1)\n    setCount(count + 1)\n  }\n\n  return (\n    <button onClick={handleClick}>\n      {count}\n    </button>\n  )\n}\n```",
    "answers": [
      "The button will display 2 because setCount is called twice.",
      "The button will display 1 because both updates use the same stale count value.",
      "The code will throw an error because React forbids multiple setState calls in one function.",
      "The button will display undefined since setCount doesn’t return a value."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quelle est **la principale différence** entre une *library* et un *framework* dans le développement web ?  ",
    "answers": [
      "Une *library* impose une structure complète du projet, tandis qu’un *framework* se contente d’apporter des fonctions réutilisables",
      "Une *library* fournit des briques réutilisables librement, tandis qu’un *framework* impose une architecture et des conventions de développement",
      "Une *library* ne peut pas être utilisée avec JavaScript, contrairement à un *framework*",
      "Un *framework* est toujours plus rapide qu’une *library*"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of these options is NOT a framework:",
    "answers": [
      "jQuery",
      "Angular",
      "React",
      "Vite"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "In the context of an MVC (Model-View-Controller) architecture, which part does React primarily handle?",
    "answers": [
      "The Model (data and business logic).",
      "The View (the user interface).",
      "The Controller (handling user input and interaction).",
      "The entire MVC stack."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is the main difference between a library and a framework?",
    "answers": [
      "A library dictates the structure of the project, while a framework does not.",
      "A library provides reusable building blocks, while a framework imposes a structure.",
      "A library cannot be used to build user interfaces.",
      "A framework cannot be used with React."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What's a framework in web development ?",
    "answers": [
      "A programming language used to create web applications",
      "A collection of tools, libraries, and conventions that facilitate application development",
      "Software that automatically executes code without human intervention",
      "A simple library that is imported to use some functions"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Why can frameworks sometimes become problematic over time?",
    "answers": [
      "They may become complex and hard to extend",
      "They always guarantee long-term backward compatibility",
      "New frameworks appear, leading to maintenance burden and technical debt",
      "They completely eliminate the need for infrastructure choices"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "How does React work?",
    "answers": [
      "It isolates pieces of code into components",
      "It directly modifies the real DOM without abstraction",
      "It uses a Virtual DOM to optimize updates",
      "It keeps the DOM in sync with the current state"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "What is React mainly used for?",
    "answers": [
      "Building complete backend systems.",
      "Creating user interfaces using components.",
      "Managing databases.",
      "Styling web pages with CSS."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What kind of structure does the DOM use to represent an HTML document?",
    "answers": [
      "A list of commands",
      "A tree of objects",
      "A set of independent files",
      "A linear sequence of tags"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "React est principalement :",
    "answers": [
      "Un framework complet pour créer des applications",
      "Une bibliothèque JavaScript pour construire des interfaces utilisateur",
      "Un outil pour gérer des bases de données",
      "Une extension de Node.js"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following statements about React are true?",
    "answers": [
      "React is a JavaScript library focused on building UI components",
      "React directly manipulates the HTML DOM for every update",
      "React uses a virtual DOM to improve rendering performance",
      "React was created by Google and is part of Angular"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Which statements about Frameworks and React's are true?",
    "answers": [
      "A primary benefit of using a Framework is that it allows developers to reuse essential building blocks, thereby enabling a focus on business logic.",
      "The process of building a modern web application with React from scratch requires the code to be bundled using tools like webpack and transformed using a compiler like Babel.",
      "JSX, or JavaScript XML, is the component rendering format that React ultimately uses to directly update the Document Object Model.",
      "A drawback of adopting a framework is the implication of technical debt and maintenance burden due to the constant emergence and disappearance of new frameworks."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ]
  },
  {
    "question": "ReactDOM.render() :",
    "answers": [
      "Crée un nouvel élément DOM à chaque rendu",
      "Lie un composant React à un élément DOM existant",
      "Détruit automatiquement les anciens composants",
      "Fonctionne uniquement avec les composants de classe"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following statements about React and Next.js is false?",
    "answers": [
      "React is a JavaScript library focused on building user interfaces.",
      "Next.js is a React-based framework that adds features like routing and server-side rendering.",
      "React directly manipulates the real DOM instead of using a virtual DOM.",
      "Next.js supports Static Site Generation (SSG) and Server-Side Rendering (SSR)."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quel hook React est utilisé pour gérer l'état local d'un composant ?",
    "answers": [
      "useEffect",
      "useContext",
      "useState",
      "useReducer"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What is the main difference between a library and a framework?",
    "answers": [
      "A library can be used freely, while a framework imposes a framework",
      "A library imposes a strict structure on the project",
      "A framework is faster than a library",
      "A framework is always smaller than a library"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel est le rôle principal du Virtual DOM dans React ?",
    "answers": [
      "Remplacer complètement le navigateur pour afficher les pages web",
      "Fournir un espace de stockage temporaire pour les données du composant",
      "Optimiser les performances en comparant les changements avant de mettre à jour le vrai DOM",
      "Permettre d’exécuter du code serveur dans le navigateur"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Quels fichiers doivent être modifiés pour que Tailwind prenne effet dans le projet ?",
    "answers": [
      "`styles/globals.css`",
      "`next.config.js`",
      "`tailwind.config.js`",
      "`postcss.config.js`"
    ],
    "correctAnswers": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "question": "What were the primary methods of styling websites in the early 1990s?",
    "answers": [
      "with CSS",
      "with HTML tags",
      "with Tailwind",
      "with Javascript styling"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "You want to apply a red background only on medium screens and above when hovering over a button. Which of the following Tailwind class combinations correctly achieves this behavior?",
    "answers": [
      "bg-red-500 md:hover:bg-red-500",
      "hover:md:bg-red-500",
      "md:bg-red-500 hover:bg-red-500",
      "md:hover:bg-red-500"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "In modern front-end frameworks, what is CSS-in-JS?",
    "answers": [
      "A way to write CSS styles directly inside JavaScript files",
      "A method to compile CSS into HTML tags",
      "A React hook for changing styles dynamically",
      "A JSON syntax for defining CSS variables"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "What is Tailwind CSS in the context of React development?",
    "answers": [
      "A JavaScript library for managing application state",
      "A utility-first CSS framework for quickly building custom user interfaces",
      "A pre-made component library like Material UI",
      "A CSS preprocessor similar to Sass or Less"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Where should Tailwind styles be imported in Next.js?",
    "answers": [
      "In pages/_app.tsx",
      "In styles/globals.css",
      "In next.config.js",
      "In tailwind.config.js"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What are the differences between Tailwind CSS and regular CSS?",
    "answers": [
      "Tailwind CSS completely replaces HTML",
      "Tailwind CSS uses ready-to-use utility classes to style elements",
      "In regular CSS, you write your own style rules in separate files",
      "Tailwind CSS doesn’t allow customization of the design"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "Which of these options is NOT a styling tool ?",
    "answers": [
      "Vite",
      "Tailwind",
      "Shadcn",
      "Bootstrap"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "What is an advantage of the CSS-in-JS approach?",
    "answers": [
      "Styles are encapsulated within the component",
      "The generated class names are unique",
      "It requires Tailwind CSS to work",
      "It doesn’t support pseudo-selectors"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "What is the main purpose of Prettier?",
    "answers": [
      "Check for syntax errors in code",
      "Automatically format code based on defined rules",
      "Optimize code performance",
      "Make code more readable and consistent"
    ],
    "correctAnswers": [
      1,
      3
    ]
  },
  {
    "question": "What is the primary purpose of the ESLint tool in a web development project?",
    "answers": [
      "To minify and compress JavaScript files to optimize page load time.",
      "To statically analyze JavaScript code to detect potential errors and style inconsistencies, and to enforce coding conventions.",
      "To manage project dependencies and install necessary libraries from the NPM registry.",
      "To compile modern JavaScript code (ES6+) into a version compatible with older browsers."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What advantage does Next.js offer regarding CSS?",
    "answers": [
      "Built-in support for CSS and Sass modules",
      "Compatibility with any CSS-in-JS library",
      "Requires adding a third-party plugin to enable Sass support",
      "Supports global styles but not modular CSS"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "Which of the following statements about Bootstrap and Tailwind CSS are correct?",
    "answers": [
      "Bootstrap is a front-end framework that provides predesigned components like buttons, modals, and navigation bars.",
      "Tailwind CSS uses a utility-first approach, allowing developers to style elements directly in HTML with small reusable classes.",
      "Bootstrap requires writing custom CSS for every layout since it doesn’t include predefined styles.",
      "Tailwind CSS offers more flexibility in design customization compared to Bootstrap’s predefined components."
    ],
    "correctAnswers": [
      0,
      1,
      3
    ]
  },
  {
    "question": "In React, what is the correct way to apply Tailwind classes to a component?",
    "answers": [
      "Using `class` instead of `className`",
      "Using `className=\"bg-blue-500 text-white p-4\"`",
      "Creating a separate Tailwind stylesheet for each component",
      "Wrapping elements in a `<Tailwind>` tag"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Most of the tailwind's classes use pre-made values but if i want a specified value for my background (\"#316ff6\" for example) which syntax do i need to use ?",
    "answers": [
      "<div class=\"bg-#316ff6 ...\">",
      "<div class=\"bg-(#316ff6) ...\">",
      "<div class=\"bg-blue ...\">",
      "<div class=\"bg-[#316ff6] ...\">"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "What is the main role of a linter ?",
    "answers": [
      "To execute the program step by step",
      "To check code for syntax errors and enforce coding style rules",
      "To optimize the performance of the application",
      "To compile the code into machine language"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel est le rôle principal d’un formateur de code comme Prettier ?",
    "answers": [
      "Identifier les erreurs de logique dans le code",
      "Corriger automatiquement le style et la mise en forme du code",
      "Compiler le code pour générer un exécutable",
      "Optimiser les performances de l'application"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What does Prettier do in a development project?",
    "answers": [
      "It checks your code for errors.",
      "It automatically formats your code to keep it clean and consistent.",
      "It runs unit tests.",
      "It compiles your code for the browser."
    ],
    "correctAnswers": [
      1,
      3
    ]
  },
  {
    "question": "What does SSG stand for in web rendering ?",
    "answers": [
      "Static Site Generation",
      "Server-Side Gateway",
      "Static Server Group",
      "Single Site Graph"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "What is the main role of Static Site Generation (SSG) ?",
    "answers": [
      "To generate pages dynamically at each user request",
      "To convert static HTML into React components at runtime",
      "To stream data in real-time to the frontend",
      "To pre-render pages into static HTML at build time for fast delivery"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Dans Next.js , à quoi sert la directive \"use client\" placée en haut d’un fichier React ?",
    "answers": [
      "À indiquer que le composant doit être exécuté côté serveur uniquement.",
      "À rendre le composant interactif en l’exécutant côté client (navigateur).",
      "À activer la mise en cache automatique du composant.",
      "À permettre d’importer des fichiers CSS externes"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "How do you connect to a Supabase database from a JavaScript application?",
    "answers": [
      "By using the Supabase JavaScript client with the project URL and API key",
      "By using only direct SQL queries",
      "Via FTP with username and password",
      "By manually downloading the data in CSV format"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which database does Supabase use by default?",
    "answers": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which file allows you to customise Tailwind's configuration?",
    "answers": [
      "config.css",
      "tailwind.config.js",
      "settings.json",
      "tailwind.json"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is the difference between authentication and authorisation?",
    "answers": [
      "There is no difference; they are synonyms.",
      "Authentication verifies identity, authorisation verifies permissions.",
      "Authentication is for APIs, authorisation is for websites.",
      "Authorisation verifies identity, authentication verifies permissions."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "According to the steps involved in loading a web page (including HTTPS), what is the main role of the DNS Lookup and what step in the sequence does it precede?",
    "answers": [
      "It initiates the TLS/SSL Handshake and precedes the HTTP request.",
      "It searches for the page in the browser's local cache and precedes the Browser Pre-Checks.",
      "It translates the domain name (URL) into an IP address and precedes the TCP/HTTPS Handshake connection.",
      "It sends the HTTP GET request to the web server and precedes the reception of the HTTP Response."
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "In JavaScript/Node.js, what is the main purpose of Semantic Versioning (Semver) and how do lock files contribute to it?",
    "answers": [
      "Semver is a standard for the structure of commit messages. The lock file ensures that these messages are consistent.",
      "Semver uses the X.Y.Z syntax to indicate changes. The lock file guarantees that every installation of the project uses the exact same versions of dependencies, ensuring consistency.",
      "Semver defines how modules are imported. The lock file determines whether loading is synchronous or asynchronous.",
      "Semver is a dependency management tool. The lock file is where dependencies are declared."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "In the context of REST APIs, what is the main purpose of a request using the GET method compared to a request using the POST method?",
    "answers": [
      "GET is used to send large amounts of data to the server, while POST is used for sensitive data.",
      "GET is used to retrieve a resource (or a collection) and should not have side effects on the server, while POST is used to create a new resource.",
      "GET is used to partially update a resource, and POST is used to delete it. ",
      "GET transmits data via the request body, while POST transmits data via URL parameters."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What are the three essential concepts in React that, combined, make it possible to create a dynamic component like a counter that updates after each click?",
    "answers": [
      "DOM, Virtual DOM, and Babel.",
      "Routes, Data Fetching, and API Routes.",
      "Class Components, Function Components, and ReactDOM.render().",
      "State, Props, and Hooks."
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "What is AWS Lambda used for?",
    "answers": [
      "Hosting only static websites",
      "Storing files in the cloud",
      "Running code without managing servers",
      "Creating relational databases"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What are the advantages of SSR?",
    "answers": [
      "Content is always up to date",
      "Better search engine optimization (SEO)",
      "Instant rendering without any server computation",
      "Zero load on the server"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which alternative best describes Supabase?",
    "answers": [
      "A backend framework built on MongoDB that requires manual server hosting",
      "A frontend library for building user interfaces with React",
      "An open-source backend-as-a-service platform built on PostgreSQL",
      "An open-source frontend-service for deploying static web applications"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Le Client-Side Rendering (CSR) signifie :",
    "answers": [
      "Le serveur génère les pages avant l’envoi",
      "Le navigateur exécute le JavaScript pour construire la page ",
      "Les pages sont préconstruites pendant le build",
      "Les pages sont stockées dans un cache CDN"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "When you insert data into a Supabase table using the JavaScript client, what must be true for the operation to succeed if Row Level Security (RLS) is enabled?",
    "answers": [
      "The user must be an admin in the Supabase dashboard.",
      "A policy must explicitly allow the insert action for that user’s role.",
      "The table must have a primary key defined.",
      "The table must be set to “public” in the database schema."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What does the concept of **Rehydration** mean in Next.js?",
    "answers": [
      "It’s the phase where client-side JavaScript takes over after a server-side render",
      "It allows the page to become interactive after loading",
      "It’s the complete static regeneration of the website",
      "It disables client-side logic"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "What is the main difference between a library and a framework?",
    "answers": [
      "A library defines the complete structure of your application, while a framework is called by your code.",
      "A library is called by your code, while a framework calls your code.",
      "They both work the same way; the difference only depends on the programming language used.",
      "A framework cannot contain libraries."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is the main purpose of the Virtual DOM in React ?",
    "answers": [
      "To store API data in the local network",
      "To gibe a lightweight copy of the DOM that React can update",
      "To make CSS animations much more smoother",
      "To catch HTML files on the server"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which statement best describes Supabase ?",
    "answers": [
      "A serverless platform for deploying React applications with built-in routing",
      "A hosted relational database platform providing storage, and real-time API",
      "A NoSQL database that uses JSON documents and triggers",
      "A front-end library that helps manage UI state across Next.js components"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What are the advantages of using Supabase over a local data folder ?",
    "answers": [
      "Data is stored online and safe",
      "Can handle many users at the same time",
      "Requires no setup at all",
      "Supports user authentication and file storage"
    ],
    "correctAnswers": [
      0,
      1,
      3
    ]
  },
  {
    "question": "In Next.js, which rendering method provides the fastest performance for content that rarely changes?",
    "answers": [
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Client-Side Rendering (CSR)",
      "Incremental Static Regeneration (ISR)"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of these data base is (or are) a noSQL and document oriented database ? ",
    "answers": [
      "cassandra",
      "postreSQL",
      "neo4j",
      "mongodb"
    ],
    "correctAnswers": [
      0,
      3
    ]
  },
  {
    "question": "Which base is document oriented ?",
    "answers": [
      "MySQL",
      "MongoDB",
      "LevelDB",
      "Cassandra"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which of the following systems are relational SQL databases?",
    "answers": [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Oracle"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "CSR is a technique where the appearance of a web page is not transferred with the data, but built on the receiving side. But what does CSR stand for:",
    "answers": [
      "Creation Site Rendering",
      "Compiled Styling Reading",
      "Client Side Rendering",
      "Cross-Servers Request"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which components are provided by Supabase ?",
    "answers": [
      "PostgreSQL database",
      "Object storage",
      "Authentication service",
      "Only a front-end UI"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ]
  },
  {
    "question": "What’s the main difference between CSR and SSR?",
    "answers": [
      "CSR renders pages on the client, SSR on the server",
      "CSR is better for SEO than SSR",
      "SSR can display content before JavaScript finishes loading",
      "CSR loads faster initially than SSR"
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Which of the following best describes SSR (Server-Side Rendering)?",
    "answers": [
      "The server computes the page and responds back with HTML/CSS.",
      "The client fetches React code and rebuilds the website locally.",
      "The website is entirely built on the client-side without server interaction.",
      "The client only fetches the necessary data to update parts of the page."
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which of the following is the correct way to apply a Tailwind CSS class in a React component?",
    "answers": [
      "`<div style=\"bg-blue-500 text-white p-4\">Hello</div>`",
      "`<div class=\"bg-blue-500 text-white p-4\">Hello</div>`",
      "`<div className=\"bg-blue-500 text-white p-4\">Hello</div>`",
      "`<div css=\"bg-blue-500 text-white p-4\">Hello</div>`"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which Next.js function is used for **server-side rendering** data at request time?",
    "answers": [
      "`getStaticProps()`",
      "`getInitialProps()`",
      "`useEffect()`",
      "`getServerSideProps()`"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Which hook is commonly used in React to manage local component state?",
    "answers": [
      "`useEffect()`",
      "`useMemo()`",
      "`useState()`",
      "`useReducer()`"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which of the following best describes Supabase?",
    "answers": [
      "A JavaScript framework for UI development ",
      "A real-time backend as a service built on PostgreSQL",
      "A CSS framework used for responsive design",
      "A static site generator "
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is the main purpose of OAuth 2.0?",
    "answers": [
      "To design user interfaces",
      "To provide secure authorization without sharing user credentials",
      "To store user data in a database",
      "To manage server-side rendering"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which statements are true about Supabase?",
    "answers": [
      "Supabase is a NoSQL database derived from MongoDB",
      "Supabase is built on PostgreSQL and supports Row Level Security (RLS) policies",
      "Supabase includes built-in authentication and file storage features",
      "Supabase works only with Next.js"
    ],
    "correctAnswers": [
      1,
      2
    ]
  },
  {
    "question": "In a typical OAuth flow, which of the following actors are involved?",
    "answers": [
      "Resource Owner",
      "Authorization Server",
      "Resource Server",
      "Browser Cache"
    ],
    "correctAnswers": [
      0,
      1,
      2
    ]
  },
  {
    "question": "Who are the actors in an authentication system?",
    "answers": [
      "RO (ressource owner)",
      "AS (autorisation server)",
      "QS (question server)",
      "user"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "What are the types of NoSQL?",
    "answers": [
      "document",
      "folder",
      "graph",
      "key value"
    ],
    "correctAnswers": [
      0,
      2,
      3
    ]
  },
  {
    "question": "What is the difference between SSG (Static Side Generator) and CSR (Client Side Rendering)",
    "answers": [
      "CSR generates HTML code in the browser after the initial request, using JavaScript.",
      "CSR generates HTML code during compilation, before any user requests.",
      "SSG generates HTML code during compilation, before any user requests.",
      "SSG generates HTML code in the browser after the initial request, using JavaScript."
    ],
    "correctAnswers": [
      0,
      2
    ]
  },
  {
    "question": "Which feature is provided by Next.js out of the box (compared to plain React)?",
    "answers": [
      "Built-in page routing and pre-rendering (SSG/SSR)",
      "Direct database storage",
      "Automatic UI design system",
      "Native mobile compilation"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which is the correct way to apply Tailwind classes in React?",
    "answers": [
      "class=\"p-4 bg-blue-500\"",
      "className=\"p-4 bg-blue-500\"",
      "style=\"p-4 bg-blue-500\"",
      "classes=\"p-4 bg-blue-500\""
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which API fetches data on every request (SSR)?",
    "answers": [
      "getStaticProps",
      "getServerSideProps",
      "useEffect",
      "generateStaticParams"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "A controlled input is one where:",
    "answers": [
      "The DOM owns the value",
      "Value comes only from defaultValue",
      "Value is bound to state and updated via onChange",
      "It uses only ref"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Select all rows from todos with supabase-js:",
    "answers": [
      "supabase.select('*').from('todos')",
      "supabase.table('todos').get('*')",
      "supabase.from('todos').select('*')",
      "supabase.query('SELECT * FROM todos')"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which adds an identity layer on top of OAuth 2.0?",
    "answers": [
      "SAML",
      "OpenID Connect (OIDC)",
      "OAuth 1.0a",
      "JWT alone"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is the structure of a JWT (JSON Web Token)?",
    "answers": [
      "A JSON array with two fields: token and signature",
      "A base64 string with no separation",
      "Three parts separated by dots: header, payload, signature",
      "A URL-encoded cookie"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What is the main characteristic of Client-Side Rendering (CSR) in web development?",
    "answers": [
      "The server returns a complete HTML file, and the browser directly displays the content.",
      "The server sends minimal HTML, and the client (browser) uses JavaScript to render the page.",
      "CSR optimizes SEO by allowing search engines to index dynamic content.",
      "CSR requires a dedicated server to handle all requests and make the page dynamic.\n\n"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is the main purpose of PKCE in OAuth 2.0?",
    "answers": [
      "To allow the client to obtain a refresh token.",
      "To prevent an attacker from stealing the authorization code.",
      "To encrypt the token using a public key.",
      "To speed up communication between client and server."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What role does the Resource Owner play in OAuth 2.0?",
    "answers": [
      "It’s the server that hosts the data.",
      "It’s the user who authorizes access to their resources.",
      "It’s the client application that requests the data.",
      "It’s the authorization server."
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Why might a developer choose to use a NoSQL document  database instead of SQL ?",
    "answers": [
      "To store large amounts of unstructured or semi-structured data in flexible JSON-like documents",
      "Because document databases enforces strict schemas and complex table relationships ",
      "Because document databases only supports SQL queries and joins",
      "To manage highly structured data with complex relational integrity constraints"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "What is the main purpose of the OAuth?",
    "answers": [
      "To authenticate a user directly using a username and password",
      "To encrypt communications between a client and a server",
      "To allow an application to access a user's resources on another service without sharing the user's credentials",
      "To manage the creation and deletion of user accounts in a database"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What is the main disadvantage of pure Client-Side Rendering ?",
    "answers": [
      "Bad for SEO and longer initial loading times",
      "High server costs and infrastructure complexity",
      "Static content difficult to update",
      "Inability to use JavaScript on the client side"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "What can a developer write to specifically enable client side rendering in a react component part of a NextJs project ?",
    "answers": [
      "''use csr\"",
      "\"enable client\"",
      "\"use client\"",
      "\"enable csr\""
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What DBMS Supabase is using ?",
    "answers": [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "MariaDB"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "How many parts does a JWT contain ?",
    "answers": [
      "3 parts (the header, the payload, the signature)",
      "2 parts (the header, the payload)",
      "4 parts (the header, the payload, the encryption challenge, the signature)",
      "It depends"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which of the following adds authentication on top of OAuth 2.0?",
    "answers": [
      "PKCE",
      "UMA",
      "OpenID Connect (OIDC)",
      "HEART"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "Which rendering method generates pages on the client side after the first load?",
    "answers": [
      "CSR – Client-Side Rendering",
      "SSR – Server-Side Rendering",
      "SSG – Static Site Generation",
      "ISR – Incremental Static Regeneration"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "What does RLS stand for in PostgreSQL and Supabase?",
    "answers": [
      "Remote Logging System",
      "Row-Level Security",
      "Role-Level Synchronization",
      "Relational Logic Schema"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "In the *Authorization Code Flow*, what is the main role of the Authorization Server (AS)?  ",
    "answers": [
      "Host the protected API endpoints",
      "Store user passwords directly in cookies",
      "Execute client code in the browser",
      "Authenticate the user and issue an authorization code"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Which statement is correct ?",
    "answers": [
      "OAuth 2.0 is primarily for authentication.",
      "Access tokens and refresh tokens are identical.",
      "PKCE encrypts stored tokens.",
      "OpenID Connect adds ID Tokens to OAuth 2.0 for authentication."
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Which statements about PKCE are correct?",
    "answers": [
      "PKCE is used to secure the Authorization Code Flow for public clients.",
      "It replaces the need for client secrets.",
      "It is pronounced \"pixie\".",
      "It is used in the Implicit Flow."
    ],
    "correctAnswers": [
      0,
      1,
      2
    ]
  },
  {
    "question": "How do you secure the Authorization Code Flow in applications?",
    "answers": [
      "By using the implicit flow",
      "By adding the PKCE layer",
      "By forcing the code exchange on the server",
      "By sharing the user’s password"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Which data fetching and rendering strategies in Next.js allow content to be personalized or rebuilt on-demand?",
    "answers": [
      "Server-Side Rendering",
      "Incremental Static Regeneration",
      "Static Site Generation",
      "Client-Side Rendering"
    ],
    "correctAnswers": [
      0,
      1
    ]
  },
  {
    "question": "What's the role of a refresh token ?",
    "answers": [
      "Secure API calls by replacing an access token",
      "Obtain a new access token without re-asking the user for authentification",
      "Encrypt the payload of a JWT",
      "Replace the authorization code int the Authorization Code Flow"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Here is my question for  week 8:\nWhat does OpenID Connect (OIDC) add to OAuth 2.0?",
    "answers": [
      "A new token type for resource access only",
      "A replacement for authorization scopes and consent screens",
      "A transport protocol to replace HTTPS during token exchange",
      "An identity layer that standardizes user authentication"
    ],
    "correctAnswers": [
      3
    ]
  },
  {
    "question": "Which of the following methods in Next.js is used to fetch data at build time for static generation?",
    "answers": [
      "getServerSideProps",
      "getStaticProps",
      "useEffect",
      "getInitialProps"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "When using Supabase, you want to automatically update your UI in real-time when a new row is inserted into a table. Which approach should you use?",
    "answers": [
      "Polling the database every few seconds",
      "Using Supabase Realtime subscriptions",
      "Writing a serverless function to fetch data on demand",
      "Storing the data in Supabase Storage"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "You are implementing OAuth 2.0 for your web app. Which flow is recommended for a Single Page Application (SPA) running entirely in the browser?",
    "answers": [
      "Authorization Code Flow with PKCE",
      "Implicit Flow",
      "Client Credentials Flow",
      "Resource Owner Password Flow"
    ],
    "correctAnswers": [
      0
    ]
  },
  {
    "question": "Which rendering method rebuilds the page on every request?",
    "answers": [
      "SSG",
      "CSR",
      "SSR",
      "ISR"
    ],
    "correctAnswers": [
      2
    ]
  },
  {
    "question": "What does Row-Level Security (RLS) do?",
    "answers": [
      "Encrypts SQL queries",
      "Restricts data access per individual row",
      "Deletes hidden columns",
      "Improves image compression"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "What is PKCE used for?",
    "answers": [
      "Compressing CSS files",
      "Securing OAuth flows for public clients",
      "Replacing HTTPS",
      "Storing passwords"
    ],
    "correctAnswers": [
      1
    ]
  },
  {
    "question": "Quel est le rôle principal de l’environnement staging ?",
    "answers": [
      "Héberger la version utilisée par les utilisateurs finaux",
      "Développer de nouvelles fonctionnalités sur la machine du développeur",
      "Tester et valider une version qui doit être la plus proche possible de la production avant son déploiement",
      "Exécuter les tests automatisés et ouvrir des bugs"
    ],
    "correctAnswers": [
      2
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS;
}