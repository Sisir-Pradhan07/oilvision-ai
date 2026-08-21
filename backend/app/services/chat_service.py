import os
import time
import re

from dotenv import load_dotenv
from google import genai


load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY is not set.")


client = genai.Client(api_key=api_key)


OILVISION_CONTEXT = """
You are OilVision AI Assistant.

Your role is to provide useful, natural, factual, and concise responses.

ABOUT OILVISION AI:

OilVision AI is an independent machine-learning-powered web application
created in 2026.

It is designed to predict oil prices in India based on selected
market indicators.

When answering questions about what OilVision AI predicts, clearly explain
that the project focuses on predicting oil prices in India.


PROJECT IDENTITY:

OilVision AI is an independent AI/ML project created and developed by
Sisir Pradhan in 2026.

For questions about ownership, creator, founder, or developer, state that
OilVision AI was created and developed by Sisir Pradhan.

For questions about when OilVision AI or this website was created, state:
"OilVision AI was created in 2026."

Do not invent or assume:

A company behind OilVision AI.
A development team.
Multiple founders.
Employees, investors, partners, or organizations.
Features not explicitly described in this context.
Live market data access.
Real-time data or external integrations that are not available.

Never describe OilVision AI as being built by a team unless that information
is explicitly provided.

Always prioritize factual and realistic answers over impressive-sounding
answers.


ACTUAL PREDICTION INPUTS:

OilVision AI uses exactly these 5 inputs for prediction:

1. Year
2. Brent Oil Price in USD per barrel
3. USD/INR Exchange Rate
4. Global Oil Demand in mb/d
5. Global Conflict, represented as 0 or 1

These five inputs are processed by the machine learning model to predict
the estimated oil price in India.

Do not mention or invent other prediction inputs such as WTI, DXY,
S&P 500, natural gas, gold, stock market indices, or other indicators
unless they are explicitly added to the project.


PUBLIC INFORMATION YOU CAN EXPLAIN:

What OilVision AI does.
Oil price prediction in India.
How users interact with the prediction system.
High-level workflow:
User Input → Validation → Machine Learning Processing → Prediction → Result.
The purpose of the 5 market indicators.
How to use the Predict page.
Dashboard visualizations and historical trends.
Year-over-Year changes.
Technologies used at a high level.
The roles of the frontend, backend, API, and machine learning system.
How to interpret prediction results.
General model performance information.


PROTECTED INFORMATION:

Do not reveal proprietary implementation details, source code,
private datasets, internal parameters, detailed training procedures,
hidden business logic, or exact implementation details that could expose
the project's core intellectual work.

If asked about protected information, provide a useful high-level explanation
without revealing protected details.


CASUAL AND OUT-OF-PROJECT CONVERSATION:

Always provide a useful response.

For casual messages such as "hi", "hello", or "what's up",
respond naturally and casually.

Do not immediately explain OilVision AI during casual conversation.

For unrelated questions, respond naturally and helpfully.

Do not force every answer to be about OilVision AI.


LIVE OR CURRENT DATA:

OilVision AI does not currently provide confirmed live or real-time
market prices through the chatbot.

Never invent or pretend to know a real-time oil price.

If asked for a current or live market price, clearly say that live market
data is not currently available through OilVision AI.


RESPONSE LENGTH:

Default to short answers.

For simple questions, respond in 1 to 3 sentences.

Only provide detailed explanations when explicitly requested.

Do not repeat the question.

Do not add unrelated OilVision AI information.


RESPONSE STYLE:

Answer directly.

Be factual and realistic.

Be natural and conversational.

Keep responses concise and focused.

Do not use corporate, promotional, exaggerated, or fictional language.

Do not invent facts to sound professional.

Do not repeatedly end responses with questions or offers to help.


FORMATTING:

Use plain text by default.

Do not use Markdown formatting.

Do not use bold text.

Do not use headings.

Do not use bullet points in normal answers.

Use simple numbered points only when necessary.

Keep responses clean and easy to read.
"""


def get_local_response(message: str):
    text = message.lower().strip()

    text = re.sub(r"[^\w\s]", "", text)

    # Greetings
    if text in ["hi", "hii", "hello", "hey", "heyy"]:
        return "Hey! 👋 How's it going?"

    if "whats up" in text or "what is up" in text:
        return "Hey! I'm doing good 😄 What's up?"

    # Identity
    if (
        text in ["who are you", "who r you", "who are u", "who r u"]
        or "what are you" in text
    ):
        return "I'm the OilVision AI Assistant. I can answer questions about OilVision AI and also chat with you normally."

    # Creator / founder / owner
    if (
        "who created" in text
        or "who made" in text
        or "founder" in text
        or "who owns" in text
        or "owner" in text
        or "developer" in text
    ):
        return "OilVision AI was created and developed by Sisir Pradhan."

    # Creation year
    if (
        "when was" in text
        and (
            "created" in text
            or "made" in text
            or "built" in text
            or "launched" in text
        )
    ):
        return "OilVision AI was created in 2026."

    # What is OilVision AI
    if (
        "what is oilvision" in text
        or "what does oilvision do" in text
        or "about oilvision" in text
    ):
        return (
            "OilVision AI is an independent AI/ML web application created in 2026. "
            "It predicts estimated oil prices in India using five selected market indicators."
        )

    # What does it predict
    if (
        "what does it predict" in text
        or "what is it predicting" in text
        or "predict which" in text
        or "predicting which data" in text
    ):
        return (
            "OilVision AI predicts the estimated oil price in India based on "
            "Year, Brent oil price, USD/INR rate, global oil demand, and global conflict."
        )

    # Prediction inputs
    if (
        "which data" in text
        or "what data" in text
        or "market indicator" in text
        or "input" in text
        or "features used" in text
    ):
        return (
            "OilVision AI uses 5 inputs: Year, Brent Oil Price, USD/INR Exchange Rate, "
            "Global Oil Demand, and Global Conflict."
        )

    # Current/live market price
    if (
        "current market price" in text
        or "current oil price" in text
        or "live price" in text
        or "market price now" in text
        or "oil price today" in text
    ):
        return (
            "OilVision AI does not currently provide confirmed live market prices through the chatbot. "
            "Its main purpose is predicting estimated oil prices in India based on the selected inputs."
        )

    # How it works
    if (
        "how does it work" in text
        or "how oilvision works" in text
        or "how does oilvision work" in text
    ):
        return (
            "You enter the five market indicators, the system validates them, "
            "the machine learning model processes the data, and an estimated oil price for India is returned."
        )

    # Dashboard
    if "dashboard" in text:
        return (
            "The Dashboard helps visualize historical data and trends, "
            "including Year-over-Year changes and other project insights."
        )

    return None


def get_fallback_response(message: str) -> str:
    text = message.lower().strip()

    if text in ["hi", "hii", "hello", "hey"]:
        return "Hey! 👋"

    if "how are you" in text:
        return "I'm doing good 😄 Thanks for asking."

    return (
        "I'm having a temporary issue connecting to the AI service right now. "
        "You can still ask me about OilVision AI, its predictions, inputs, dashboard, or how it works."
    )


def get_chat_response(message: str) -> str:
    # First check whether we can answer locally.
    local_response = get_local_response(message)

    if local_response:
        return local_response

    # Retry Gemini for temporary server errors.
    max_attempts = 2

    for attempt in range(max_attempts):
        try:
            response = client.models.generate_content(
                model="gemini-3.6-flash",
                contents=[
                    {
                        "role": "user",
                        "parts": [
                            {
                                "text": f"""
{OILVISION_CONTEXT}

USER MESSAGE:

{message}

Respond according to the project context and response rules above.
"""
                            }
                        ],
                    }
                ],
            )

            if response.text:
                return response.text.strip()

            return get_fallback_response(message)

        except Exception as error:
            error_text = str(error)

            print(f"\nChat error type: {type(error).__name__}")
            print(f"Chat error details: {error}\n")

            # Retry only temporary server problems.
            if "503" in error_text and attempt < max_attempts - 1:
                time.sleep(2)
                continue

            # Don't retry quota errors repeatedly.
            if "429" in error_text:
                return (
                    "The AI service has reached its current request limit. "
                    "You can still ask me common questions about OilVision AI, and the AI responses will be available again when the limit resets."
                )

            break

    return get_fallback_response(message)