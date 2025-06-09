import { createConfig, DEFAULT_PRISM_CONFIG, type PrismConfig } from "./config";
import type { Node } from "@rbxts/vide";
import { usePrism } from "./hooks/use-prism";
import { DefaultPalettes } from "./palettes";
import { Palette } from "./types/palette";

interface PrismProviderProps {
	palette?: keyof typeof DefaultPalettes | Palette;
	config?: Partial<PrismConfig>;
	children: Node;
}

export const PrismProvider = ({ children, palette, config }: PrismProviderProps) => {
	const paletteKey: keyof typeof DefaultPalettes = typeIs(palette, "string")
		? (palette as keyof typeof DefaultPalettes)
		: palette === undefined
		? "mocha"
		: typeIs(palette, "number")
		? (tostring(palette) as keyof typeof DefaultPalettes)
		: "mocha";
	const realPalette: Palette = typeIs(palette, "string") ? DefaultPalettes[paletteKey] : (palette as Palette);

	usePrism({
		config: config ? createConfig(DEFAULT_PRISM_CONFIG, config) : DEFAULT_PRISM_CONFIG,
		palette: realPalette,
		currentPalette: paletteKey,
	});

	return children;
};
