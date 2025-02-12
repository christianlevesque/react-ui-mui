import type { OverridableStringUnion } from '@mui/types';

export type MuiColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

/**
 * Themeable component props
 */
export type Themeable = {
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
	srOnly?: boolean
}

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
	| 'current'
	| 'inherit';

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