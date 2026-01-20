from fastapi import APIRouter
from api.routes import remove_background_route

router = APIRouter()

router.include_router(remove_background_route)
