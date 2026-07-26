import requests

from generative import Generative


class Service:
    _generative = Generative()  # this is a Class attribute

    def __init__(self):
        self._resources: dict[str, list[str]] = {
            "files": [],
            "texts": [],
            "links": [],
        }

    def search(self, query):  # returns tuple? of resources
        ret = None
        if query:
            # search in open data portals
            # response = requests.get(query)
            # print(response.status_code)
            # resources = response.json()

            resources = query

            processed = self._generative.send("tell me all you can about ", resources)
            ret = (processed, resources)  # resources and summary
        return ret

    # use requests library to get the url
    def lookup(self, url):
        url = verify(url)
        response = requests.get(url)
        resource = response.text
        self._generative.send("summarise this: ", resource)  # needs prompt. how do messages' interface work?
        # add to list
        self._resources["links"].append(response.headers["Server"])
        return resource

    # def summarise(self, files):
    #     response = self._generative.send(files)  # currently takes one, and also it doesn't work.
    #     self._resources["files"].append(files)  # what happens when this is a list?
    #     return response

    def get_resources(self) -> dict:
        return self._resources


def verify(url: str):
    if not (url.startswith('https://') or url.startswith('http://')):
        url = 'https://' + url
    return url


# transform an HTML response to structured text
def parse(site: str):
    pass
