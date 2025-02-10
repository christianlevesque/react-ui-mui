import { createContext, useContext } from 'react';
import type { Color } from '@/theme.ts';

/**
 * A context providing default component prop values
 */
export const defaultPropsContext = createContext<ComponentDefaults>({});

/**
 * A custom hook to use the default props context
 */
export const useDefaultPropsContext = () => useContext(defaultPropsContext);

/**
 * Themeable component default props
 */
export type Themeable = {
	color?: Color
}

/**
 * Button theme default props
 */
export type ButtonDefaults = Themeable;

/**
 * Theme default props for all components
 */
export type ComponentDefaults = {
	button?: ButtonDefaults
}