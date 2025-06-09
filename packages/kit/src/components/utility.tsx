import { px } from "../hooks";
import { usePrism } from "@rbxts/prism";
import Vide from "@rbxts/vide";

export namespace Utility {
	export interface PaddingProps {
		px: number;
	}

	export function Padding(props: PaddingProps) {
		return (
			<uipadding
				PaddingBottom={new UDim(0, px(props.px))}
				PaddingLeft={new UDim(0, px(props.px))}
				PaddingRight={new UDim(0, px(props.px))}
				PaddingTop={new UDim(0, px(props.px))}
			/>
		);
	}

	export interface ListProps {
		direction: "Horizontal" | "Vertical";
		centerVertically?: boolean;
		centerHorizontally?: boolean;
		padding?: number;
		native?: Partial<WritableInstanceProperties<UIListLayout>>;
	}

	export function List(props: ListProps) {
		return (
			<uilistlayout
				Padding={new UDim(0, px(props.padding ?? 8))}
				FillDirection={props.direction}
				HorizontalAlignment={props.centerHorizontally ? "Center" : "Left"}
				VerticalAlignment={props.centerVertically ? "Center" : "Top"}
			/>
		);
	}

	export interface CenterProps {
		direction: "Horizontal" | "Vertical";
		padding?: number;
		native?: Partial<WritableInstanceProperties<UIListLayout>>;
	}

	export function Center(props: CenterProps) {
		return (
			<List
				centerHorizontally
				centerVertically
				direction={props.direction}
				native={props.native}
				padding={props.padding}
			/>
		);
	}

	export interface RoundedProps {
		px?: number;
	}

	export function Rounded(props: RoundedProps) {
		const { config } = usePrism();
		return <uicorner CornerRadius={new UDim(0, px(props.px ?? config.radiusPx))} />;
	}

	export interface StrokeProps {
		color?: Color3;
		native?: Partial<WritableInstanceProperties<UIStroke>>;
	}

	export function Stroke(props: StrokeProps) {
		const { palette } = usePrism();
		return <uistroke ApplyStrokeMode={"Border"} Thickness={1} Color={props.color ?? palette.tokens.surface} />;
	}
}
