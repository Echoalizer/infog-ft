# Architecture

### Electron + Vite + React

This application is built using Electron and Electron Forge, the latter taking care of building and packaging
as well as plugin integration. The tool used for compiling and integrating the React UI is Vite, which also compiles
the electron main process that then loads either the entry point for the renderer process (??) or the development
server.

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

The main processing of the application is done in Python, which communicates with the front-end through a dedicated API.

- FastAPI

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

#### What is each process responsible for?