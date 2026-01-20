export function downloadImage(url: string) {
	const a = document.createElement("a");
	a.href = url;
	a.download = "something-shit.png";
	document.body.appendChild(a);
	a.click();

	a.remove();
	URL.revokeObjectURL(url);
}
