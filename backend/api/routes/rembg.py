from fastapi import APIRouter, File, Form, UploadFile

from core.rembg import RembgModel
from services.rembg_service import bg_remove


router = APIRouter(prefix="/api/remove-background", tags=["remove-background"])


@router.post("/")
def remove_bg(file: UploadFile = File(...), model: RembgModel = Form("u2net")):
    print(model)
    return bg_remove(file, model)


@router.get("/models")
def list_models():
    return [m.value for m in RembgModel]
