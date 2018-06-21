Steps to get this running:

1. Start a simple file server. I prefer Python.
For example, for Python 3:
python -m http.server 1234

2. You'll need Node.js installed (along with npm). Run:
npm install

2a. If you're tinkering, run:
npm run watch
And you can start changing files as you please.

2b. If you just want to see it in action, run:
npm run bundle

3. Open a browser, go to:
localhost:1234/public/index.html