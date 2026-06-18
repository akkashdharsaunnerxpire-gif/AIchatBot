from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from groq import Groq
from dotenv import load_dotenv

import os
import uvicorn

# Load .env
load_dotenv()

# FastAPI App
app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://aichatbot-1-88i7.onrender.com",
        "http://localhost",
        "capacitor://localhost"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Groq Client
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

# Home Route
@app.get("/")
async def home():
    return {
        "message": "AI Chatbot API Running"
    }

# Chat Route
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

        return {
            "response": answer
        }

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={
                "error": str(e)
            }
        )

# Run Directly
if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=int(os.getenv("PORT", 8000)),
        reload=True
    )