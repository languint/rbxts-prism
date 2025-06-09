import { usePrism } from "@rbxts/prism";
import Vide, { Node } from "@rbxts/vide";
import { px } from "../hooks";

export namespace Typography {
	export interface TextProps {
		native?: Partial<WritableInstanceProperties<TextLabel>>;
		children?: Node;
		font?: "bold" | "regular" | "medium";
		text: string;
	}

	export function H1(props: TextProps) {
		const { palette, config } = usePrism();
		return (
			<textlabel
				BackgroundTransparency={1}
				BorderSizePixel={1}
				Text={props.text}
				TextColor3={palette.tokens.text}
				TextSize={px(40)}
				AutomaticSize={"X"}
				Size={UDim2.fromOffset(0, px(40))}
				FontFace={props.font !== undefined ? config.font[props.font] : config.font.bold}
				{...props.native}
			>
				{props.children}
			</textlabel>
		);
	}

	export function H2(props: TextProps) {
		const { palette, config } = usePrism();
		return (
			<textlabel
				BackgroundTransparency={1}
				BorderSizePixel={1}
				Text={props.text}
				TextColor3={palette.tokens.text}
				TextSize={px(32)}
				AutomaticSize={"X"}
				Size={UDim2.fromOffset(0, px(32))}
				FontFace={props.font !== undefined ? config.font[props.font] : config.font.bold}
				{...props.native}
			>
				{props.children}
			</textlabel>
		);
	}

	export function H3(props: TextProps) {
		const { palette, config } = usePrism();
		return (
			<textlabel
				BackgroundTransparency={1}
				BorderSizePixel={1}
				Text={props.text}
				TextColor3={palette.tokens.text}
				TextSize={px(24)}
				AutomaticSize={"X"}
				Size={UDim2.fromOffset(0, px(24))}
				FontFace={props.font !== undefined ? config.font[props.font] : config.font.bold}
				{...props.native}
			>
				{props.children}
			</textlabel>
		);
	}

	export function P(props: TextProps) {
		const { palette, config } = usePrism();
		return (
			<textlabel
				BackgroundTransparency={1}
				BorderSizePixel={1}
				Text={props.text}
				TextColor3={palette.tokens.subtext}
				TextSize={px(12)}
				AutomaticSize={"X"}
				Size={UDim2.fromOffset(0, px(12))}
				FontFace={props.font !== undefined ? config.font[props.font] : config.font.regular}
				{...props.native}
			>
				{props.children}
			</textlabel>
		);
	}

	export function M(props: TextProps) {
		const { palette, config } = usePrism();
		return (
			<textlabel
				BackgroundTransparency={1}
				BorderSizePixel={1}
				Text={props.text}
				TextColor3={palette.tokens.subtext}
				TextSize={px(12)}
				AutomaticSize={"X"}
				Size={UDim2.fromOffset(0, px(12))}
				FontFace={props.font !== undefined ? config.font[props.font] : config.font.medium}
				{...props.native}
			>
				{props.children}
			</textlabel>
		);
	}

	export function B(props: TextProps) {
		const { palette, config } = usePrism();
		return (
			<textlabel
				BackgroundTransparency={1}
				BorderSizePixel={1}
				Text={props.text}
				TextColor3={palette.tokens.subtext}
				TextSize={px(12)}
				AutomaticSize={"X"}
				Size={UDim2.fromOffset(0, px(12))}
				FontFace={props.font !== undefined ? config.font[props.font] : config.font.bold}
				{...props.native}
			>
				{props.children}
			</textlabel>
		);
	}
}
