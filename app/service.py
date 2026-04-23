import requests

from generator import Generator


class Service:
    _generator = Generator()  # this is a Class attribute

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

            response = requests.get(query)
            print(response.status_code)
            resources = response.json()

            processed = self._generator.send(resources)
            ret = (processed, resources)  # resources and summary
        return ret

    def lookup(self, url):
        url = verify(url)
        response = requests.get(url)
        resource = response.text
        self._generator.send(resource)  # needs prompt. how do messages interface work?
        # add to list
        self._resources["links"].append(response.headers["Server"])
        return resource

    def summarise(self, files):
        response = self._generator.send(files)  # currently takes one, and also it doesn't work.
        self._resources["files"].append(files)  # what happens when this is a list?
        return response

    def get_resources(self) -> dict:
        return self._resources


def verify(url: str):
    if not url.startswith('https://'):
        url = 'https://' + url
    return url


# transform an HTML response to structured text
def parse(site: str):
    pass
