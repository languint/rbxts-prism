export interface PrismFont {
	regular: Font;
	medium: Font;
	bold: Font;
}

export interface PrismConfig {
	font: PrismFont;
	radiusPx: number;
}

export const DEFAULT_PRISM_CONFIG = {
	// Inter
	font: {
		regular: new Font("rbxassetid://12187365364"),
		medium: new Font("rbxassetid://12187365364", Enum.FontWeight.Medium),
		bold: new Font("rbxassetid://12187365364", Enum.FontWeight.Bold),
	},
	radiusPx: 8,
};

export function createConfig(base: PrismConfig, override: Partial<PrismConfig>): PrismConfig {
	return {
		...base,
		...override,
	};
}
