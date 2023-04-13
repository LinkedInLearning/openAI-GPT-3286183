import os
import openai
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")


def generate(prompt):
    response = openai.Moderation.create(
        input=prompt
    )
    output = response["results"][0]
    print(output)