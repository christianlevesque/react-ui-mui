import type { OverridableStringUnion } from '@mui/types';

export type MuiColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

/**
 * Themeable component props
 */
export type Themeable = {
	/**
	 * The theme color of the text
	 */
	textColor?: Color;

	/**
	 * The color variant of the text
	 */
	textColorVariant?: ColorVariant;

	/**
	 * Whether the text color should be inverted
	 */
	invertText?: boolean

	/**
	 * The theme color of the text
	 */
	backgroundColor?: Color;

	/**
	 * The color variant of the text
	 */
	backgroundColorVariant?: ColorVariant;

	/**
	 * Whether the background color should be inverted
	 */
	invertBackground?: boolean

	/**
	 * The breakpoint at which the component should be rendered as <code>display:block</code>
	 */
	block?: Breakpoint;

	/**
	 * The breakpoint at which the component should be rendered as <code>display:flex</code>
	 */
	flex?: Breakpoint;

	/**
	 * The breakpoint at which the component should be rendered as <code>display:inline</code>
	 */
	inline?: Breakpoint;

	/**
	 * The breakpoint at which the component should be rendered as <code>display:inline-block</code>
	 */
	inlineBlock?: Breakpoint;

	/**
	 * The breakpoint at which the component should be rendered as <code>display:inline-flex</code>
	 */
	inlineFlex?: Breakpoint;

	/**
	 * The breakpoint at which the component should be rendered as <code>display:none</code>
	 */
	hidden?: Breakpoint;

	/**
	 * The breakpoint at which the component should be rendered as <code>visibility:hidden</code>
	 */
	invisible?: Breakpoint;

	/**
	 * Whether the component should be rendered as screenreader-only content
	 */
	srOnly?: boolean;

	/**
	 * The margin that should be applied to all sides
	 */
	m?: Spacer;

	/**
	 * The margin that should be applied to the x-axis
	 */
	mx?: Spacer;

	/**
	 * The margin that should be applied to the y-axis
	 */
	my?: Spacer;

	/**
	 * The margin that should be applied to the top
	 */
	mt?: Spacer;

	/**
	 * The margin that should be applied to the right
	 */
	mr?: Spacer;

	/**
	 * The margin that should be applied to the bottom
	 */
	mb?: Spacer;

	/**
	 * The margin that should be applied to the left
	 */
	ml?: Spacer;

	/**
	 * The margin that should be applied to all sides
	 */
	p?: Spacer;

	/**
	 * The padding that should be applied to the x-axis
	 */
	px?: Spacer;

	/**
	 * The padding that should be applied to the y-axis
	 */
	py?: Spacer;

	/**
	 * The padding that should be applied to the top
	 */
	pt?: Spacer;

	/**
	 * The padding that should be applied to the right
	 */
	pr?: Spacer;

	/**
	 * The padding that should be applied to the bottom
	 */
	pb?: Spacer;

	/**
	 * The padding that should be applied to the left
	 */
	pl?: Spacer;

	/**
	 * The breakpoint at which text should be centered
	 */
	textCentered?: Breakpoint;

	/**
	 * The breakpoint at which text should be justified
	 */
	textJustified?: Breakpoint;

	/**
	 * The breakpoint at which text should be left-aligned
	 */
	textLeft?: Breakpoint;

	/**
	 * The breakpoint at which test should be right-aligned
	 */
	textRight?: Breakpoint;

	/**
	 * The breakpoint at which text should be size 1
	 */
	size1?: Breakpoint;

	/**
	 * The breakpoint at which text should be size 2
	 */
	size2?: Breakpoint;

	/**
	 * The breakpoint at which text should be size 3
	 */
	size3?: Breakpoint;

	/**
	 * The breakpoint at which text should be size 4
	 */
	size4?: Breakpoint;

	/**
	 * The breakpoint at which text should be size 5
	 */
	size5?: Breakpoint;

	/**
	 * The breakpoint at which text should be size 6
	 */
	size6?: Breakpoint;

	/**
	 * The breakpoint at which text should be size 7
	 */
	size7?: Breakpoint;
};

/**
 * Bulma theme colors for use by themeable components
 */
export type Color =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'link'
	| 'success'
	| 'info'
	| 'warning'
	| 'danger'
	| 'text'
	| 'white'
	| 'light'
	| 'black'
	| 'dark'
	| 'grey'
	| 'current'
	| 'inherit';

/**
 * Bulma theme color variants
 */
export type ColorVariant =
	| '00'
	| '05'
	| '10'
	| '15'
	| '20'
	| '25'
	| '30'
	| '35'
	| '40'
	| '45'
	| '50'
	| '55'
	| '60'
	| '65'
	| '70'
	| '75'
	| '80'
	| '85'
	| '90'
	| '95'
	| '100'
	| 'light'
	| 'lighter'
	| 'dark'
	| 'darker'
	| 'bis'
	| 'ter'
	| 'soft'
	| 'bold'
	| 'on-scheme';

/**
 * Bulma sizes for use by themeable components
 */
export type Size =
	| 'small'
	| 'normal'
	| 'medium'
	| 'large';

/**
 * Bulma spacing sizes for use by themeable components
 */
export type Spacer =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 'auto';

/**
 * Bulma breakpoints
 */
export type Breakpoint =
	| true
	| 'mobile'
	| 'touch'
	| 'tablet'
	| 'tablet-only'
	| 'desktop'
	| 'desktop-only'
	| 'widescreen'
	| 'widescreen-only'
	| 'fullhd';

export type ExtensibleColor<T> = OverridableStringUnion<MuiColor, T>;