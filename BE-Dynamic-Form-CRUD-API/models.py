from typing import Optional
from sqlalchemy import JSON, Column, Integer, String, DateTime
from database import Base

class UserDetails(Base):
    __tablename__ = "user_details" 

    userId = Column(Integer, primary_key=True)
    username = Column(String)
    formData = Column(JSON)

class Users(Base):
    __tablename__ = "users"

    userId = Column(Integer, primary_key=True, index=True, autoincrement=True)
    username = Column(String)
    formData = Column(JSON)

    