export const REMBG_MODELS = {
	U2NET: "u2net",
	U2NETP: "u2netp",
	U2NET_HUMAN_SEG: "u2net_human_seg",
	U2NET_CLOTH_SEG: "u2net_cloth_seg",
	SILUETA: "silueta",
	ISNET_GENERAL_USE: "isnet-general-use",
	ISNET_ANIME: "isnet-anime",
	SAM: "sam",
	BIREFNET_GENERAL: "birefnet-general",
	BIREFNET_GENERAL_LITE: "birefnet-general-lite",
	BIREFNET_PORTRAIT: "birefnet-portrait",
	BIREFNET_DIS: "birefnet-dis",
	BIREFNET_HRSOD: "birefnet-hrsod",
	BIREFNET_COD: "birefnet-cod",
	BIREFNET_MASSIVE: "birefnet-massive",
	BRIA_RMBG: "bria-rmbg",
} as const;

export type RembgModel = (typeof REMBG_MODELS)[keyof typeof REMBG_MODELS];

export const REMBG_MODEL_OPTIONS = [
	{
		label: "U²-Net",
		value: REMBG_MODELS.U2NET,
		description:
			"A pre-trained model for general background removal use cases.",
	},
	{
		label: "U²-Net (light)",
		value: REMBG_MODELS.U2NETP,
		description:
			"A lightweight version of U²-Net with reduced size and faster inference.",
	},
	{
		label: "U²-Net Human Segmentation",
		value: REMBG_MODELS.U2NET_HUMAN_SEG,
		description: "A pre-trained model specialized for human segmentation.",
	},
	{
		label: "U²-Net Cloth Segmentation",
		value: REMBG_MODELS.U2NET_CLOTH_SEG,
		description:
			"A pre-trained model for clothes parsing in human portraits. Segments upper body, lower body, and full body.",
	},
	{
		label: "Silueta",
		value: REMBG_MODELS.SILUETA,
		description:
			"Same architecture as U²-Net, but with a significantly reduced model size (~43MB).",
	},
	{
		label: "ISNet (General)",
		value: REMBG_MODELS.ISNET_GENERAL_USE,
		description:
			"A newer pre-trained model designed for general background removal.",
	},
	{
		label: "ISNet (Anime)",
		value: REMBG_MODELS.ISNET_ANIME,
		description:
			"A high-accuracy segmentation model optimized for anime characters.",
	},
	{
		label: "SAM",
		value: REMBG_MODELS.SAM,
		description:
			"Segment Anything Model (SAM). A versatile, high-quality segmentation model for many use cases.",
	},
	{
		label: "BiRefNet General",
		value: REMBG_MODELS.BIREFNET_GENERAL,
		description:
			"A pre-trained BiRefNet model for general-purpose segmentation.",
	},
	{
		label: "BiRefNet General Lite",
		value: REMBG_MODELS.BIREFNET_GENERAL_LITE,
		description:
			"A lightweight BiRefNet model for general use, optimized for lower resource consumption.",
	},
	{
		label: "BiRefNet Portrait",
		value: REMBG_MODELS.BIREFNET_PORTRAIT,
		description:
			"A BiRefNet model optimized specifically for human portrait segmentation.",
	},
	{
		label: "BiRefNet DIS",
		value: REMBG_MODELS.BIREFNET_DIS,
		description:
			"A BiRefNet model trained for dichotomous image segmentation (DIS).",
	},
	{
		label: "BiRefNet HRSOD",
		value: REMBG_MODELS.BIREFNET_HRSOD,
		description:
			"A BiRefNet model designed for high-resolution salient object detection (HRSOD).",
	},
	{
		label: "BiRefNet COD",
		value: REMBG_MODELS.BIREFNET_COD,
		description: "A BiRefNet model for concealed object detection (COD).",
	},
	{
		label: "BiRefNet Massive",
		value: REMBG_MODELS.BIREFNET_MASSIVE,
		description:
			"A BiRefNet model trained on a massive dataset for robust segmentation performance.",
	},
	{
		label: "BRIA RMBG",
		value: REMBG_MODELS.BRIA_RMBG,
		description:
			"A state-of-the-art background removal model developed by BRIA AI.",
	},
] as const;

export const rembgModelOptionsMap = new Map(
	REMBG_MODEL_OPTIONS.map((model) => [model.value, model]),
);
