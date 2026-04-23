from service import Service
from window import Window


def main():
    serv = Service()
    window = Window(serv)
    return 0  # what for


# should this be kept? only used if the module is used imported into another one
if __name__ == "__main__":
    main()
