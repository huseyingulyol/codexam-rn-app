
import google.generativeai as genai
from prompt import PROMPT
from dotenv import load_dotenv
import os

load_dotenv()

GOOGLE_API_KEY= os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-2.0-flash-exp')

async def post_correction(ocr_result):
  response = model.generate_content(PROMPT + ocr_result)
  return response.text


#Kullanılabilecek generative modelleri listelemek için
# for m in genai.list_models():
#   if 'generateContent' in m.supported_generation_methods:
#     print(m.name)