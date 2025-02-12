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
	 * The theme color of the text
	 */
	backgroundColor?: Color;

	/**
	 * The color variant of the text
	 */
	backgroundColorVariant?: ColorVariant;

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