from typing import List, Optional, Union
from pydantic import BaseModel

class User(BaseModel):
    userId: int
    username: str
    formData: dict

class PostFormDetails(BaseModel):
  userId: int
  name: Optional[str] = None
  email: Optional[str] = None
  password: Optional[str] = None
  interests: Optional[str] = None
  number: Optional[str] = None
  time: Optional[str] = None
  hobbies: Optional[str] = None
  transport: Optional[List[str]] = None
  date: Optional[str] = None
    

{
    "userId": 4,
    "name": "fghdfh",
    "email": "platformops@lifedata.ai",
    "password": "Lifedata@124",
    "interests": "chess",
    "number": "",
    "time": "2024-06-29T06:35:00.000Z",
    "hobbies": "football",
    "transport": [
        "bike",
        "car"
    ],
    "date": "2024-06-20T18:30:00.000Z"
}











