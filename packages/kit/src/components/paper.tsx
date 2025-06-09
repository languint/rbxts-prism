import { COLORS, usePrism } from "@rbxts/prism";
import { Palette } from "@rbxts/prism/out/types/palette";
import { Utility } from "./utility";
import Vide, { Node } from "@rbxts/vide";
import { px } from "../hooks";

export namespace Paper {
	export interface RegularProps {
		position?: UDim2;
		size?: UDim2;
		rounded?: boolean;
		elevation?: number;
		native?: Partial<WritableInstanceProperties<Frame>>;
		children?: Node;
	}

	function getElevatedColor(palette: Palette, elevation: number) {
		if (elevation === 0) return palette.tokens.background;
		if (elevation === 1) return palette.tokens.surface;
		return lightenColor(palette.tokens.surface, palette.tokens.text, (elevation - 1) * 0.05);
	}

	export function lightenColor(color: Color3, target: Color3, factor: number) {
		return color.Lerp(target, factor);
	}

	export function Regular(props: RegularProps) {
		const { palette } = usePrism();

		return (
			<frame
				BackgroundColor3={getElevatedColor(palette, props.elevation ?? 0)}
				BorderSizePixel={0}
				Size={props.size}
				Position={props.position}
				AutomaticSize={"XY"}
				{...props.native}
			>
				<Utility.Padding px={8} />
				{props.rounded !== undefined ? props.rounded ? <Utility.Rounded /> : undefined : <Utility.Rounded />}
				{props.children}
			</frame>
		);
	}

	export interface ScrollableProps {
		position?: UDim2;
		size?: UDim2;
		rounded?: boolean;
		elevation?: number;
		native?: Partial<WritableInstanceProperties<ScrollingFrame>>;
		children?: Node;
	}

	export function Scrollable(props: ScrollableProps) {
		const { palette } = usePrism();
		return (
			<scrollingframe
				BackgroundColor3={getElevatedColor(palette, props.elevation ?? 0)}
				BorderSizePixel={0}
				Size={props.size}
				Position={props.position}
				ScrollBarThickness={px(6)}
				ScrollBarImageColor3={palette.tokens.surface}
				AutomaticCanvasSize={"Y"}
				{...props.native}
			>
				<Utility.Padding px={8} />
				{props.rounded !== undefined ? props.rounded ? <Utility.Rounded /> : undefined : <Utility.Rounded />}
				{props.children}
			</scrollingframe>
		);
	}
}
