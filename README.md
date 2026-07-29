Final Project
-------------

David Perez

---

### Installation

Node packages can be installed with:
```
# ./web

% npm i
```

To use the python server in development mode, we need to create a virtual environment and install the required packages.
```
% python -m venv venv
% source venv/bin/activate
% pip install -r requirements.txt
```

The virtual env. can be exited with:

```
% deactivate
```

Anytime we need to use the virtual environment, run:

```
% source venv/bin/activate
```

### Startup: dev server

Start the python server with:

```
% fastapi dev
```

The following command runs over node and starts the Electron Forge engine.

```
# ./web
% npm run start
```

Electron Forge starts Vite's development server, and creates the Electron app pointing to its address.


---
Context isolation and iPC (Electron)
https://www.electronjs.org/docs/latest/tutorial/ipc

libraries
https://www.npmjs.com/package/classnames#usage-with-reactjs

##### Code guidelines:
- [PEP8](https://peps.python.org/pep-0008/)
- ESLint Typescript recommended
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

