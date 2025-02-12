import type { ElementType, ComponentPropsWithRef, ReactNode } from 'react';
import { classNames } from '@sienar/react-utils';
import type { Breakpoint, Display, Themeable } from '@/theme.ts';

/**
 * The props for an <code>&lt;HtmlElement&gt;</code>
 */
export type ElementProps<T extends ElementType> = {
	tag: T;
	children?: ReactNode;
	className?: string;
	otherProps?: ComponentPropsWithRef<T>;
} & Themeable;

/**
 * Renders arbitrary HTML or React components
 */
export default function Element<T extends ElementType>(props: ElementProps<T>) {
	const {
		tag: Tag,
		children,
		className,
		display,
		srOnly,
		...otherProps
	} = props;

	const classes = classNames(
		{
			'is-sr-only': srOnly
		},
		className,
		...getDisplay(display)
	);

	return <Tag className={classes} children={children} {...otherProps as any}/>;
}

function getDisplay(display: Partial<Record<Display, Breakpoint>>|undefined): string[] {
	if (!display) return [];

	const result: string[] = [];

	for (let key in display) {
		const value = display[key as Display];
		const displayClass = typeof value === 'string'
			? `is-${key}-${value}`
			: `is-${key}`;
		result.push(displayClass);
	}

	return result;
}