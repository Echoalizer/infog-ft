from ollama import chat


class Generative:
    def __init__(self):
        self._model = 'gemma3:270m'
        # might need to keep a chat history

    def send(self, prompt: str, message: str, role: str = 'user') -> str:
        response = chat(
            model=self._model,
            messages=[
                {'role': role, 'content': prompt + message}
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
