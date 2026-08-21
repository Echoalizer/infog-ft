import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from lookupservice import LookupService

""" in this file the FastAPI server is implemented, following the guide at 
    https://fastapi.tiangolo.com/#example
    
    This server will be launched alongside the Vite development server that Electron renders;
    and bundled with the final app, so that the Electron package has access to it in runtime.
"""


class Resource(BaseModel):
    name: str
    addr: str
    content: str  # ???


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

serv = LookupService()


@app.get("/")
def root():
    return {
        "message": "FastAPI server is up and running!",
        "host": "localhost:5173"
    }


@app.get("/search/")
def search(q: str):
    """ get response for a plain text query

    :param q:
    :return: json with response message
    """
    response = serv.search(q)
    return {
        "message": response
    }


@app.get("/download/{resource_id}")
def download(resource_id: str):
    return None


@app.get("/resource/{resource_id}")
def get_resource(resource_id: str):
    # rtype Resource
    return None


@app.post("/messages/")
def write_message(message: str) -> str:
    return serv.send({"message": message})


# get response for an url
@app.get("/extract/")
def extract(url: str):
    response = serv.lookup(url)
    # rtype could be resource
    return None


# upload a file (resource)
@app.post("/resources/")
def upload_resource(resource: Resource):
    # add file to list of resources; ollama context
    return None


# get all resources


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
