import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from service import Service

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

serv = Service()


@app.get("/")
def root():
    return {"message": "Hello Root!"}


# get response for a plain text query
@app.get("/search/{query}/")
def search(query: str, q: str | None = None):
    response = serv.search(query)
    return {
        "message": response
    }


# get response for an url
@app.get("/extract/{url}")
def extract(url: str):
    response = serv.lookup(url)
    return {
        "message": "Hello World"
    }


# upload a file (resource)
@app.post("/upload/{file_name}")
def upload():
    # add file to list of resources; ollama context
    return {
        "message": "Hello World"
    }


# get all resources


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
