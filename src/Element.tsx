import type { ElementType, ComponentPropsWithRef } from 'react';

/**
 * The props for an <code>&lt;HtmlElement&gt;</code>
 */
export type ElementProps<T extends ElementType> = {
	tag: T;
	className?: string;
	otherProps?: ComponentPropsWithRef<T>;
}

/**
 * Renders arbitrary HTML or React components
 */
export default function Element<T extends ElementType>(
	{ tag: Tag, className, otherProps }: ElementProps<T>
) {
	return <Tag className={className} {...otherProps as any}/>;
}