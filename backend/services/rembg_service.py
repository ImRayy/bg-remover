from io import BytesIO
from PIL import Image
from rembg import remove
from fastapi.responses import StreamingResponse
from fastapi import UploadFile

from core.rembg import RembgModel, get_session


def bg_remove(file: UploadFile, model: RembgModel | RembgModel = "u2net"):
    session = get_session(model)

    input_image = Image.open(file.file)
    output_image = remove(input_image, post_process_mask=True, session=session)

    img_io = BytesIO()
    output_image.save(img_io, format="PNG")  # type: ignore[call-arg]
    img_io.seek(0)

    return StreamingResponse(
        img_io,
        media_type="image/png",
        headers={
            "Content-Disposition": f'attachment; filename="{file.filename}_rmbg.png"'
        },
    )
