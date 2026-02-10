from genlayer import *

class NewsOracle:
    def __init__(self):
        self.consensus_data = ""

    @public
    def verify_news(self, article_text: str, question: str):
      
        prompt = f"Analyze this text: {article_text}. Answer this: {question}. Respond with one word: YES or NO."
        
       
        response = self.ai_layer.ask(prompt)
        self.consensus_data = response
        return response

    @view
    @public
    def get_result(self) -> str:
        return self.consensus_data