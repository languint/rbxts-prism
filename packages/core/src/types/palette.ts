export interface Palette {
	tokens: {
		background: Color3;
		surface: Color3;
		text: Color3;
		subtext: Color3;
		highlight: Color3;
		success: Color3;
		error: Color3;
		[k: string]: Color3;
	};
}

export interface Palettes {
	[k: string]: Palette;
}
