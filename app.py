from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from groq import Groq
from dotenv import load_dotenv

import os

import uvicorn

# Load .env
load_dotenv()

# Groq Client
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

# FastAPI App
app = FastAPI()

# Static Files
app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static"
)

# Templates
templates = Jinja2Templates(
    directory="templates"
)

# Home Page
@app.get("/")
async def home(request: Request):

    return templates.TemplateResponse(
        request=request,
        name="index.html"
    )


# Chat API
@app.get("/chat")
async def chat(msg: str):

    try:

        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": """
                    You are a helpful AI Assistant.
                    Answer clearly and professionally.
                    Keep responses concise unless asked.
                    """
                },
                {
                    "role": "user",
                    "content": msg
                }
            ],
            temperature=0.7,
            max_tokens=1024
        )

        answer = completion.choices[0].message.content

        return JSONResponse({
            "response": answer
        })

    except Exception as e:

        return JSONResponse({
            "error": str(e)
        })


# Run directly
if __name__ == "__main__":
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 8000))
    )