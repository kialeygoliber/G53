from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import users, charts


app = FastAPI()

origins = [
    "http://localhost",
    "http://127.0.0.1", 
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
    "http://157.245.233.160"
]

@app.get("/")
def root():
    return {"message": "FastAPI backend running!"}

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins, 
    allow_credentials=True, 
    allow_methods=["*"], 
    allow_headers=["*"])
app.include_router(users.router)
app.include_router(charts.router)
app.include_router(users.router, prefix="/api")
#app.include_router(tasks.router)

#@app.get("/pie_data")
#def test_pie_data():
#    return {"msg": "Hello, this works!"}