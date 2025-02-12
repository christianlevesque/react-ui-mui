import type { ElementType, ComponentPropsWithRef, ReactNode } from 'react';
import { classNames } from '@sienar/react-utils';
import type { Breakpoint, Color, ColorVariant, Themeable } from '@/theme.ts';

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

		// Colors
		textColor,
		textColorVariant,
		backgroundColor,
		backgroundColorVariant,

		// Display
		block,
		flex,
		inline,
		inlineBlock,
		inlineFlex,
		hidden,
		invisible,
		srOnly,

		...otherProps
	} = props;

	const classes = classNames(
		{
			// Colors
			...getColorWithVariant('has-text', textColor, textColorVariant),
			...getColorWithVariant('has-background', backgroundColor, backgroundColorVariant),

			// Display
			...getBreakpointable('is-block', block),
			...getBreakpointable('is-flex', flex),
			...getBreakpointable('is-inline', inline),
			...getBreakpointable('is-inline-block', inlineBlock),
			...getBreakpointable('is-inline-flex', inlineFlex),
			...getBreakpointable('is-hidden', hidden),
			...getBreakpointable('is-invisible', invisible),
			'is-sr-only': srOnly
		},
		className
	);

	return (
		<Tag
			className={classes}
			children={children}
			{...otherProps as any}
		/>
	);
}

function getColorWithVariant(
	className: string,
	color: Color|undefined,
	variant: ColorVariant|undefined
): Record<string, boolean> {
	if (!color) return {};
	const suffix = !!variant ? `-${variant}` : '';
	return { [`${className}-${color}${suffix}`]: true };
}

function getBreakpointable(className: string, breakpoint: Breakpoint|undefined): Record<string, boolean> {
	if (breakpoint === true) return { [className]: true };

	return { [`${className}-${breakpoint}`]: !!breakpoint };
}