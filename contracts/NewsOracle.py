from genlayer import gl

@gl.contract
class NewsOracle:
    def __init__(self):
        self.news_data = "No news available"

    @gl.public
    def update_news(self, topic: str):
        # AI prompt for generating/validating news content
        prompt = f"Provide a brief, verified update on {topic}."
        result = gl.ai.ask(prompt)
        self.news_data = result

    @gl.public
    def get_latest_news(self) -> str:
        return self.news_data