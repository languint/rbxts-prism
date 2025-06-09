import { source } from "@rbxts/vide";
import { PrismConfig } from "../config";
import { Palette } from "../types/palette";
import { DefaultPalettes, DefaultPalettesType } from "../palettes";

export interface PrismContext {
	config: PrismConfig;
	palette: Palette;
	currentPalette: keyof DefaultPalettesType | string;
}

const prismState = source<PrismContext>();

export function usePrism(client?: PrismContext): PrismContext {
	const value = prismState();
	if (value !== undefined) return value;

	assert(client !== undefined, "No palette has been set.");
	prismState(client);
	return client;
}

export function setPalette(palette: Palette | keyof typeof DefaultPalettes) {
	const value = prismState();
	assert(value !== undefined, "Prism context has not been initialized.");

	if (typeOf(palette) === "string") {
		assert(
			DefaultPalettes[palette as keyof typeof DefaultPalettes] !== undefined,
			`Palette "${palette}" does not exist.`,
		);
		value.palette = DefaultPalettes[palette as keyof typeof DefaultPalettes];
		value.currentPalette = palette as string;
	} else {
		value.palette = palette as Palette;
		value.currentPalette = "custom";
	}

	prismState(value);
}
