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
	{ label: "U²-Net", value: REMBG_MODELS.U2NET },
	{ label: "U²-Net (light)", value: REMBG_MODELS.U2NETP },
	{ label: "Human Segmentation", value: REMBG_MODELS.U2NET_HUMAN_SEG },
	{ label: "Cloth Segmentation", value: REMBG_MODELS.U2NET_CLOTH_SEG },
	{ label: "Silueta", value: REMBG_MODELS.SILUETA },
	{ label: "ISNet (General)", value: REMBG_MODELS.ISNET_GENERAL_USE },
	{ label: "ISNet (Anime)", value: REMBG_MODELS.ISNET_ANIME },
	{ label: "SAM", value: REMBG_MODELS.SAM },
	{ label: "BiRefNet General", value: REMBG_MODELS.BIREFNET_GENERAL },
	{ label: "BiRefNet General Lite", value: REMBG_MODELS.BIREFNET_GENERAL_LITE },
	{ label: "BiRefNet Portrait", value: REMBG_MODELS.BIREFNET_PORTRAIT },
	{ label: "BiRefNet DIS", value: REMBG_MODELS.BIREFNET_DIS },
	{ label: "BiRefNet HRSOD", value: REMBG_MODELS.BIREFNET_HRSOD },
	{ label: "BiRefNet COD", value: REMBG_MODELS.BIREFNET_COD },
	{ label: "BiRefNet Massive", value: REMBG_MODELS.BIREFNET_MASSIVE },
	{ label: "BRIA RMBG", value: REMBG_MODELS.BRIA_RMBG },
] as const;
