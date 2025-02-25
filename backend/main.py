from typing import Dict
from pydantic import BaseModel
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from pathlib import Path
import shutil
from azure_ocr import run_ocr 

app = FastAPI()

class User(BaseModel):
    name: str
    email: str
# Tüm kullanıcıları listeleyen API endpoint
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

@app.get("/test/")
def result(fileName:str = None):
  print(fileName)
  return {
    "test": "tested"
  }

@app.post("/upload")
async def upload_photo(file: UploadFile = File(...)):
    try:
        file_location = UPLOAD_DIR / file.filename
        with file_location.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        response = await run_ocr(f"./uploads/{file.filename}")
        return JSONResponse(content={"message": "Successfully", 
                                    "filename": file.filename,
                                    "response": response,
                                    })

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
