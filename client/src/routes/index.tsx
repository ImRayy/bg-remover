import {
	Image01Icon,
	ImageDownload02Icon,
	Loading03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { downloadImage } from "@/utils/image";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const [file, setFile] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [canDownload, setCanDownload] = useState(false);

	const handleFile = (file: File) => {
		if (!file.type.startsWith("image/")) return;

		setFile(file);
		const reader = new FileReader();
		reader.onload = (e) => {
			setPreviewUrl(e.target?.result as string);
		};
		reader.readAsDataURL(file);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) handleFile(file);
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(false);

		const file = e.dataTransfer.files?.[0];
		if (file) handleFile(file);
	};

	const reset = () => {
		setCanDownload(false);
		setFile(null);
		setPreviewUrl(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const { mutate, isPending } = useMutation({
		mutationFn: async (file: File) => {
			const formData = new FormData();
			formData.append("file", file);

			const response = await fetch(
				"http://localhost:8000/api/remove-background",
				{
					method: "POST",
					body: formData, // ← browser sets multipart boundary
				},
			);

			if (!response.ok) {
				const text = await response.text();
				throw new Error(text || "Upload failed");
			}

			return await response.blob();
		},
		onSuccess: (blob) => {
			if (blob) {
				const url = URL.createObjectURL(blob);
				setPreviewUrl(url);
				setCanDownload(true);
			}
		},
	});

	const submit = (e: React.FormEvent) => {
		e.preventDefault();
		if (file) mutate(file);
	};

	return (
		<div className="min-h-screen items-center justify-center flex w-full">
			<form
				onSubmit={submit}
				className="card w-full max-w-xl flex  justify-center border min-h-96  border-dashed border-base-content/30 bg-base-200 p-8"
			>
				{!file && (
					// biome-ignore lint/a11y/noStaticElementInteractions: false
					<div
						className={`flex flex-col items-center gap-4 rounded-lg transition
            ${isDragging ? "border-primary" : "border-base-content/30"}`}
						onDragOver={(e) => {
							e.preventDefault();
							setIsDragging(true);
						}}
						onDragLeave={() => setIsDragging(false)}
						onDrop={handleDrop}
					>
						<HugeiconsIcon icon={Image01Icon} size={48} />
						<p className="text-base-content/60 text-center">
							Click to upload or drag and drop
						</p>

						<input
							ref={fileInputRef}
							type="file"
							accept="image/*"
							className="hidden"
							onChange={handleInputChange}
						/>

						<button
							type="button"
							className="btn btn-primary rounded-full"
							onClick={() => fileInputRef.current?.click()}
						>
							Select Image
						</button>
					</div>
				)}

				{file && previewUrl && (
					<div className="flex flex-col gap-4">
						<div className="relative  overflow-hidden rounded-lg border border-base-content/20">
							<img
								src={previewUrl}
								alt="Preview"
								className="h-full w-full object-contain"
							/>

							<button
								type="button"
								className="btn btn-error btn-sm absolute right-2 top-2 rounded-full"
								onClick={reset}
							>
								✕
							</button>
						</div>

						<p className="text-sm text-base-content/60 text-center">
							{file.name}
						</p>
						{canDownload ? (
							<button
								type="button"
								onClick={() => downloadImage(previewUrl)}
								className="inline-flex items-center gap-1 btn btn-primary"
							>
								<HugeiconsIcon icon={ImageDownload02Icon} />
								Download
							</button>
						) : (
							<button
								type="submit"
								className="btn btn-primary w-full rounded-full"
							>
								{isPending ? (
									<div className="inline-flex items-center gap-1">
										<HugeiconsIcon
											icon={Loading03Icon}
											className="animate-spin"
										/>
										<span>Loading...</span>
									</div>
								) : (
									"Remove Background"
								)}
							</button>
						)}
					</div>
				)}
			</form>
		</div>
	);
}
