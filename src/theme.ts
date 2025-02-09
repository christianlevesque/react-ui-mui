import type { OverridableStringUnion } from '@mui/types';

export type MuiColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

export type ExtensibleColor<T> = OverridableStringUnion<MuiColor, T>;