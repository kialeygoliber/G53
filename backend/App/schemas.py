from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str

class UserOut(BaseModel):
    username: str


class Config:
    orm_mode = True
