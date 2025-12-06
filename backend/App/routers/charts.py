from fastapi import APIRouter, Depends, HTTPException
from App.auth import verify_token
from fastapi.responses import JSONResponse

router = APIRouter()

#@router.get("/ai_diagnostics")
#def ai_diagnostics_chart(token: str = Depends(verify_token)):
#    return {
#       "labels": ["June", "July", "Aug", "Sept", "Oct", "Nov"],
#       "values": [2, 3, 4, 6, 8, 10]
#   }

@router.get("/pie_data")
def get_pie_data(token: str = Depends(verify_token)):
    # Example data, could be read from CSV or DB
    data = [
        {"name": "Telemedicine", "value": 50},
        {"name": "AI Diagnostics", "value": 30},
        {"name": "Wearables", "value": 20},
        {"name": "Surgical Robotics", "value": 50}
    ]
    print(data)
    return JSONResponse(content=data)

@router.get("/bar_data")
def get_bar_data(token: str = Depends(verify_token)):
    data = [
        {"month": "June", "value": 15},
        {"month": "July", "value": 22},
        {"month": "Aug", "value": 30},
        {"month": "Sept", "value": 35},
        {"month": "Oct", "value": 42},
        {"month": "Nov", "value": 50}
    ]
    return JSONResponse(content=data)