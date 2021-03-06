# PyATE Demo: Web app for demonstrating PyATE's algorithms and functionalities

[PyATE](https://github.com/kevinlu1248/pyate) is a Python package that extracts key domain-specific terms from natural language. To demonstrate it's functionalities, I made a simple web app, showcasing how it makes predictions of which phrases in a document are terms.

When typing in a term, the list of predicted terms as well as their "termhoods" will be listed. The termhood is a value correlated with the probability of each phrase being a term, that is, it is a value denoting how much the phrase looks like a term.

## Tools used
- React, using Babel/Webpack for transpilation and Yarn for package management
- Flask as backend running on the platform Heroku; I chose Python so that I easily incorporate it with PyATE
- PyATE, a term extraction Python package, which runs on spaCy for POS tagging
