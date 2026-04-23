from ollama import chat


class Generator:
    def __init__(self):
        self._model = 'gemma3:270m'
        # might need to keep a chat history

    def send(self, message, role='user') -> str:
        message = "can you please generate an extensive report about" + message
        response = chat(
            model=self._model,
            messages=[
                {'role': role, 'content': message}
            ],
        )
        print(response.message.content)
        return response.message.content

    # gemma3:270m is not able to analyse files
    def send_file(self, file, role='user') -> str:
        response = chat(
            model=self._model,
            messages=[
                {'role': role, 'content': file}
            ],
        )
        print(response.message.content)
        return response.message.content
