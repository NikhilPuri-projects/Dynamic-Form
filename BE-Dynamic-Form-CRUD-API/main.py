from typing import Optional
from fastapi import Depends, FastAPI, HTTPException, Request
from sqlalchemy import JSON
from database import SessionLocal, engine
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware  
import schema
import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

def get_db():   
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/health")
def read_root():
    return {"status": "working"}   

@app.post("/addUser")
def create_user(user: schema.User, db: Session = Depends(get_db)):
    db_user = models.Users(userId=user.userId, username=user.username, formData=user.formData)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return {"message": "User created successfully"}

@app.delete("/deleteUser/{userId}")
def delete_user(userId: int, db: Session = Depends(get_db)):
    db_user = db.query(models.Users).filter(models.Users.userId == userId).first()
    db.delete(db_user)
    db.commit()
    return {"message": "User deleted successfully"}


@app.get("/getUsers")
def get_user(userId: Optional[int] = None, db: Session = Depends(get_db)):
    if userId is not None:
        db_user = db.query(models.Users).filter(models.Users.userId == userId).first()
        if db_user:
            return {"error": False, "data": db_user}
        else:
            return {"error": True, "message": "User not found", "data": {}}
    else:
        db_user = db.query(models.Users).all()
        return {"error": False, "data": db_user}

@app.delete("/deleteAllUsers")
def delete_all_users(db: Session = Depends(get_db)):
    db.query(models.Users).delete()
    db.commit()
    return {"message": "All users deleted successfully"}


@app.post("/postUsers")
async def post_details(request:Request, db: Session = Depends(get_db)):
    form_data = await request.json()
    if 'userId' not in form_data:
        raise HTTPException(status_code=400, detail="userId is required")
    
    db_user = models.UserDetails(userId=form_data['userId'], username=form_data['name'], formData=form_data)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return {"message": "User created successfully"}


