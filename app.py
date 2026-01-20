from io import BytesIO
from rembg import remove
from flask import Flask, render_template, request, send_file
from PIL import Image
import torch

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        if "file" not in request.files:
            return "No file uploaded", 400

        file = request.files["file"]

        if file.filename == "":
            return "No file selected"

        if file:
            if torch.cuda.is_available():
                input_image = Image.open(file.stream)
                output_image = remove(input_image, post_process_mask=True)
                img_io = BytesIO()
                output_image.save(img_io, "PNG")
                img_io.seek(0)
                return send_file(
                    img_io,
                    mimetype="image/png",
                    as_attachment=True,
                    download_name=f"{file.filename}_rmbg.png",
                )
            else:
                return "CUDA not available", 500

    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)
