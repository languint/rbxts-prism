import { usePrism } from "@rbxts/prism";
import { Utility } from "./utility";
import { px } from "../hooks";
import Vide from "@rbxts/vide";

export namespace Button {
	export interface ButtonProps {
		text?: string;
		position?: UDim2;
		size?: UDim2;
		native?: Partial<WritableInstanceProperties<TextButton>>;
		nativeText?: Partial<WritableInstanceProperties<TextLabel>>;
		active?: boolean;
		onClick?: () => void;
	}

	export function Primary(props: ButtonProps) {
		const { config, palette } = usePrism();

		return (
			<textbutton
				Text={""}
				BackgroundColor3={props.active ? palette.tokens.highlight : palette.tokens.background}
				BorderSizePixel={0}
				Size={props.size ?? UDim2.fromOffset(px(200), px(32))}
				Position={props.position}
				AutomaticSize={"X"}
				MouseButton1Click={props.onClick}
				{...props.native}
			>
				<Utility.Rounded />
				<Utility.Padding px={8} />
				<Utility.Center direction="Horizontal" />
				<textlabel
					Text={props.text ?? "Button"}
					BorderSizePixel={0}
					BackgroundTransparency={1}
					FontFace={config.font.medium}
					TextColor3={props.active ? palette.tokens.background : palette.tokens.text}
					Size={new UDim2(0, 0, 0, px(12))}
					AutomaticSize={"X"}
					TextSize={px(12)}
					{...props.nativeText}
				/>
			</textbutton>
		);
	}

	export function Secondary(props: ButtonProps) {
		const { config, palette } = usePrism();

		return (
			<textbutton
				Text={""}
				BackgroundColor3={props.active ? palette.tokens.highlight : palette.tokens.surface}
				BorderSizePixel={0}
				Size={props.size ?? UDim2.fromOffset(px(200), px(32))}
				Position={props.position}
				AutomaticSize={"X"}
				MouseButton1Click={props.onClick}
				{...props.native}
			>
				<Utility.Rounded />
				<Utility.Padding px={8} />
				<Utility.Center direction="Horizontal" />
				<textlabel
					Text={props.text ?? "Button"}
					BorderSizePixel={0}
					BackgroundTransparency={1}
					FontFace={config.font.medium}
					TextColor3={props.active ? palette.tokens.background : palette.tokens.text}
					Size={new UDim2(0, 0, 0, px(12))}
					AutomaticSize={"X"}
					TextSize={px(12)}
					{...props.nativeText}
				/>
			</textbutton>
		);
	}

	export function Outlined(props: ButtonProps) {
		const { config, palette } = usePrism();

		return (
			<textbutton
				Text={""}
				BackgroundTransparency={1}
				BorderSizePixel={0}
				Size={props.size ?? UDim2.fromOffset(px(200), px(32))}
				Position={props.position}
				AutomaticSize={"X"}
				MouseButton1Click={props.onClick}
				{...props.native}
			>
				<Utility.Rounded />
				<Utility.Padding px={8} />
				<Utility.Center direction="Horizontal" />
				<Utility.Stroke color={props.active ? palette.tokens.highlight : palette.tokens.background} />
				<textlabel
					Text={props.text ?? "Button"}
					BorderSizePixel={0}
					BackgroundTransparency={1}
					FontFace={config.font.medium}
					TextColor3={palette.tokens.text}
					Size={new UDim2(0, 0, 0, px(12))}
					AutomaticSize={"X"}
					TextSize={px(12)}
					{...props.nativeText}
				/>
			</textbutton>
		);
	}
}
