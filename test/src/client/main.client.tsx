import Vide, { effect, mount, Node } from "@rbxts/vide";
import { Button, Paper, px, Typography, Utility } from "@rbxts/prism-kit";
import { COLORS, PrismProvider, setPalette, usePrism } from "@rbxts/prism";
import { Players } from "@rbxts/services";
import { DefaultPalettes } from "@rbxts/prism/out/palettes";
import Object from "@rbxts/object-utils";

const Showcase = ({ children, title, subtext }: { children: Node; title: string; subtext: string }) => {
	return (
		<Paper.Regular elevation={1} size={new UDim2(1, 0, 0, 0)}>
			<Utility.List direction="Vertical" />
			<Typography.H3 text={title} />
			<Typography.P text={subtext} />
			<Paper.Regular elevation={0}>
				<Utility.Center direction="Horizontal" />
				<Paper.Regular>{children}</Paper.Regular>
			</Paper.Regular>
		</Paper.Regular>
	);
};

const PaletteSwitcher = () => {
	const { currentPalette } = usePrism();

	return (
		<Showcase title="Palettes" subtext="These palettes are provided by default by prism.">
			<Utility.Center direction="Horizontal" padding={10} />
			{Object.entries(DefaultPalettes).map((v) => (
				<Button.Secondary
					text={v[0]}
					onClick={() => setPalette(v[0])}
					size={UDim2.fromOffset(px(100), px(32))}
					active={currentPalette === v[0]}
				/>
			))}
		</Showcase>
	);
};

const TokenShowcase = () => {
	const { palette } = usePrism();
	return (
		<Showcase title="Tokens" subtext="">
			<Utility.Center direction="Horizontal" />
			{Object.entries(palette.tokens).map(([name, color]) => (
				<Paper.Regular elevation={2} size={UDim2.fromOffset(px(100), px(12))}>
					<Utility.List
						centerHorizontally
						centerVertically
						direction="Horizontal"
						native={{ HorizontalFlex: Enum.UIFlexAlignment.SpaceBetween }}
					/>
					<Typography.M text={name as string} />
					<Paper.Regular
						size={UDim2.fromOffset(px(12), px(12))}
						native={{ BackgroundColor3: color, AutomaticSize: Enum.AutomaticSize.None }}
					>
						<Utility.Stroke color={COLORS.WHITE} />
					</Paper.Regular>
				</Paper.Regular>
			))}
		</Showcase>
	);
};

const TypographyShowcase = () => {
	return (
		<Showcase title="Typography" subtext="Different prebuilt text styles.">
			<Utility.List direction="Vertical" />
			<Typography.H1 text="Header 1" />
			<Typography.H2 text="Header 2" />
			<Typography.H3 text="Header 3" />
			<Typography.B text="Bold" />
			<Typography.M text="Medium" />
			<Typography.P text="Paragraph" />
		</Showcase>
	);
};

const ButtonShowcase = () => {
	return (
		<Showcase title="Typography" subtext="Prism offers a wide range of buttons.">
			<Utility.List direction="Vertical" />
			<Paper.Regular size={UDim2.fromScale(1, 0)}>
				<Utility.List direction="Horizontal" />
				<Button.Primary text="Primary" />
				<Button.Secondary text="Secondary" />
				<Button.Outlined text="Outlined" />
			</Paper.Regular>
			<Paper.Regular>
				<Utility.List direction="Horizontal" />
				<Button.Primary text="Primary" active />
				<Button.Secondary text="Secondary" active />
				<Button.Outlined text="Outlined" active />
			</Paper.Regular>
		</Showcase>
	);
};

const App = () => {
	return (
		<screengui ResetOnSpawn={false} IgnoreGuiInset ZIndexBehavior="Sibling" Name={"prism"}>
			<PrismProvider palette={"frappe"}>
				{() => (
					<Paper.Scrollable rounded={false} size={new UDim2(1, 0, 1, 0)}>
						<Utility.List direction="Vertical" centerHorizontally centerVertically={false} />
						<Utility.Padding px={100} />
						<PaletteSwitcher />
						<TokenShowcase />
						<TypographyShowcase />
						<ButtonShowcase />
					</Paper.Scrollable>
				)}
			</PrismProvider>
		</screengui>
	);
};

mount(App, Players.LocalPlayer.WaitForChild("PlayerGui"));
