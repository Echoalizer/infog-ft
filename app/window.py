from tkinter import *
from tkinter import ttk
from tkinter.filedialog import askopenfilenames

# from tkinter.ttk import *  # available widgets get replaced by newer ones

import service


class Window:
    # class variables can be defined here

    def __init__(self, serv):
        self._current = None
        self.__serv = serv
        self.__create_window()

    def search(self, query: str):
        self._current = {"name": "Name"}

        response = self.__serv.search(query)

        self.vari.config(state="normal")
        self.report_name.set(self._current["name"])
        self.text_screen.set(response)

    def extract(self, url: str):
        self.__serv.lookup(url)

    def open_file(self):
        files = askopenfilenames()
        self.__serv.summarise(files)

    # def terminate(self):
    #     self.root.destroy()

    def __create_window(self):
        self.root = Tk()

        # self variable if it needs to be accessed from another proc.
        self.root.title("Generador de informes etc.")
        self.root.geometry("1160x650")

        self.root.minsize(600, 300)

        self.report_name = StringVar()
        # self.report_name.set("Consultar informes previos")
        self.text_screen = StringVar()
        # self.text_screen.trace("w", ())

        # s = Style()
        # s.theme_use('default')
        # s.configure("frame.Colored", background="green")

        left = Frame(self.root)
        left.pack(side="left", fill="y", expand=0, padx=20, pady=20)
        # fill both? do we want this one to not resize?

        right = Frame(self.root)
        right.pack(side="left", fill="both", expand=1, padx=20, pady=20)

        self.left_frame(left)
        self.right_frame(right)

        self.root.mainloop()

    def left_frame(self, left):
        search_url = StringVar()
        # search_url.trace("r", )
        extract_url = StringVar()
        # can be traced with .trace("r"/"w"/"u")

        # generator
        title = Label(
            left,
            text="Generación de informes",
            font=("Helvetica", 14)
        )
        title.pack(anchor="w", padx=30, pady=15)

        # search
        Label(left, text="Buscar datos").pack(padx=5, pady=5, anchor="w")

        search = Frame(
            left,
        )
        search.pack(fill="x")

        search_box = Entry(search, textvariable=search_url)  # create a placeholder for these
        # clear after search?
        search_box.pack(side="left", expand=True, fill="x", anchor="w", padx=5)
        Button(
            search,
            text="Buscar",
            command=lambda: self.search(search_url.get())  # we can drop the parameter by defining search_url as
            # class attribute
        ).pack(side="left", anchor="e", padx=5)

        Label(left, text="Extraer de un sitio web").pack(padx=5, pady=5, anchor="w")
        # posibilidad de cargar fichero para descarga en batch

        extract = Frame(
            left,
        )
        extract.pack(fill="x")

        extract_link = Entry(extract, textvariable=extract_url)
        extract_link.pack(side="left", expand=True, fill="x", anchor="w", padx=5)
        Button(
            extract,
            text="Extraer",
            command=lambda: self.extract(extract_link.get())  # does this work without text_variable?
        ).pack(side="left", anchor="e", padx=5)
        # subir archivo

        Label(left, text="Subir archivo").pack(padx=5, pady=5, anchor="w")
        upload = Frame(
            left,
        )
        upload.pack(fill="x")

        file = Entry(upload)
        file.pack(side="left", expand=True, fill="x", anchor="w", padx=5)
        Button(
            upload,
            text="Abrir",
            command=self.open_file
        ).pack(side="left", anchor="e", padx=5)

        jlist = ttk.Treeview(
            left,
        )
        # for key, value in self.__serv.get_resources().items:
        #     jlist.insert("", "end", text=key)
        #     for item in value:
        #         jlist.insert(key, "end", text=item)

        Button(
            left,
            text="Generar",
        ).pack(fill="x", side="bottom")

    def right_frame(self, right):
        # archive
        # readonly entry, activated on change
        self.vari = Entry(
            right,
            textvariable=self.report_name,
            state="readonly",
            relief="flat",
            # text="Consultar informes previos",
            font=("Helvetica", 14)
        )
        self.vari.pack(anchor="w", padx=30, pady=15)

        screen = Frame(
            right,
            background="white",
        )
        screen.pack(fill="both", expand=True, padx=20, pady=20)

        text = Entry(screen, state="readonly", textvariable=self.text_screen, justify="left")
        # wraplength=screen.winfo_screenwidth())
        text.pack(fill="both", expand=True, padx=20, pady=20)
