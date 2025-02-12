import type { OverridableStringUnion } from '@mui/types';

export type MuiColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

/**
 * Themeable component props
 */
export type Themeable = {
	/**
	 * The Bulma display settings for the component
	 */
	display?: Partial<Record<Display, Breakpoint>>
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
 * Bulma display utilities
 */
export type Display =
	| 'block'
	| 'flex'
	| 'inline'
	| 'inline-block'
	| 'inline-flex'
	| 'hidden'
	| 'invisible';

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