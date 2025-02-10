import type { OverridableStringUnion } from '@mui/types';

export type MuiColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

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

export type ExtensibleColor<T> = OverridableStringUnion<MuiColor, T>;