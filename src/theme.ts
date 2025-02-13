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
	 * The flex direction of the element
	 */
	flexDirection?: FlexDirection;

	/**
	 * The flex wrap of the element
	 */
	flexWrap?: FlexWrap;

	/**
	 * The flex justify value of the element
	 */
	flexJustify?: FlexJustify;

	/**
	 * The flex align-content value of the element
	 */
	flexAlignContent?: FlexAlignContent;

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
	 * The text case transformation to apply
	 */
	textTransform?: CaseTransformation;

	/**
	 * Whether the text should be italicized
	 */
	italic?: boolean;

	/**
	 * Whether the text should be underlined
	 */
	underlined?: boolean;

	/**
	 * The font weight of the text
	 */
	fontWeight?: FontWeight;

	/**
	 * The font family of the text
	 */
	fontFamily?: FontFamily;

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

	/**
	 * Applies a clearfix to the element
	 */
	clearfix?: boolean;

	/**
	 * Moves the element to the left or right
	 */
	pulled?: PullDirection;

	/**
	 * Makes the element an overlay over the closest positioned parent
	 */
	overlay?: boolean;

	/**
	 * Applies <code>overflow: hidden</code> to the element
	 */
	clipped?: boolean;

	/**
	 * Removes any radius from the element
	 */
	radiusless?: boolean;

	/**
	 * Removes any shadow from the element
	 */
	shadowless?: boolean;

	/**
	 * Prevents the element from being selected
	 */
	unselectable?: boolean;

	/**
	 * Applies <code>cursor:pointer</code> to the element
	 */
	clickable?: boolean;

	/**
	 * Applies <code>position:relative</code> to the element
	 */
	relative?: boolean;
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
 * Bulma flex directions
 */
export type FlexDirection =
	| 'row'
	| 'row-reverse'
	| 'column'
	| 'column-reverse';

/**
 * Bulma flex wrap values
 */
export type FlexWrap =
	| 'nowrap'
	| 'wrap'
	| 'wrap-reverse';

/**
 * Bulma flex justify values
 */
export type FlexJustify =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'start'
	| 'end'
	| 'left'
	| 'right';

/**
 * Bulma flex align-content values
 */
export type FlexAlignContent =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'stretch'
	| 'start'
	| 'end'
	| 'baseline';

/**
 * Bulma text case transformation states
 */
export type CaseTransformation =
	| 'capitalized'
	| 'lowercase'
	| 'uppercase';

/**
 * Bulma font weight states
 */
export type FontWeight =
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold';

/**
 * Bulma font family states
 */
export type FontFamily =
	| 'sans-serif'
	| 'monospace'
	| 'primary'
	| 'secondary'
	| 'code';

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

/**
 * Bulma is-pulled values
 */
export type PullDirection = 'left' | 'right';

export type ExtensibleColor<T> = OverridableStringUnion<MuiColor, T>;