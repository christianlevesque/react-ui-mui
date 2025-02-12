﻿import { createContext, useContext } from 'react';
import type { Color, Themeable } from '@/theme.ts';

/**
 * A context providing default component prop values
 */
export const defaultPropsContext = createContext<ComponentDefaults>({});

/**
 * A custom hook to use the default props context
 */
export const useDefaultPropsContext = () => useContext(defaultPropsContext);

/**
 * Button theme default props
 */
export type ButtonDefaults = {
	color?: Color;
} & Themeable;

/**
 * Theme default props for all components
 */
export type ComponentDefaults = {
	button?: ButtonDefaults
}