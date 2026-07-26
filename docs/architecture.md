# Architecture

### Technologies used

- Python 3.13


- Electron 43.1
    - over Node.js v22
    - [Awesome Electron - resources](https://github.com/sindresorhus/awesome-electron#components)
- React 19.2*
- Typescript 6

### Electron + Vite + React

This application is built using Electron and Electron Forge, the latter taking care of building and packaging
as well as plugin integration. The tool used for compiling and integrating the React UI is Vite, which also compiles
the electron main process that then loads either the entry point for the renderer process (??) or the development
server.

Electron main process loads a HTML file or web address (dev server). Vite builds (compiles) our React UI and transforms
it into HTML + js, so that it can be provided to Electron main.

#### IPC: Inter-Process Communication

Electron renderer process (me clicking) needs to communicate with its main process (Native OS API) to open a file.
The communication with the python server is intended to be managed by the main process as well, serving as a bridge
between the UI and the backend.

#### Electron Forge
- Electron
- Vite
- React
- Typescript

Aside from the build lifecycle, the tools CI tools added are:

- ESLint (for typescript code)
- Prettier
- editorconfig (? ideally shared among devs of the project, but-?)

### Python

The main processing of the application is done in Python, which communicates with the front-end through a dedicated
HTTP API.

- FastAPI
- Ruff (python linter, to be installed)

### Application Bundle

Yes please!! Electron Forge only knows packaging Electron. That's why we need electron main process to spawn the
python server and then connect to it. Perhaps. Or perhaps it will be done in another way.

During development, I have no clue how to do it (jk only have to run the python server)


---

### Decision-Making

#### Why Electron instead of Tauri?

Electron is a widely used framework/thing with lots of available [] and resources

#### Why Python instead of Node?

Because of the libraries used. Python still is the big boi

#### Why FastAPI?

Haven't decided

#### Why HTTP (through IPC)?

It made sense! Keeps the different parts nicely independent,

#### Should we use electron-builder?

The default packager/maker in Electron Forge seemed good. We kept it for now.

#### React Router

Maybe, but we only use one page now!

#### What is each process responsible for?