import type { ElementType, ComponentPropsWithRef } from 'react';
import { classNames } from '@sienar/react-utils';
import type { Breakpoint, Color, ColorVariant, Spacer, Themeable } from '@/theme.ts';

/**
 * The props for an <code>&lt;HtmlElement&gt;</code>
 */
export type ElementProps<T extends ElementType> = {
	tag: T;
	className?: string;
	otherProps?: ComponentPropsWithRef<T>;
} & Themeable;

/**
 * Renders arbitrary HTML or React components
 */
export default function Element<T extends ElementType>(props: ElementProps<T>) {
	const {
		tag: Tag,
		className,

		// Colors
		textColor,
		textColorVariant,
		invertText,
		backgroundColor,
		backgroundColorVariant,
		invertBackground,

		// Display
		block,
		flex,
		inline,
		inlineBlock,
		inlineFlex,
		hidden,
		invisible,
		srOnly,

		// Spacing
		m,
		my,
		mx,
		mt,
		mr,
		mb,
		ml,
		p,
		py,
		px,
		pt,
		pr,
		pb,
		pl,

		// Text
		textCentered,
		textJustified,
		textLeft,
		textRight,

		...otherProps
	} = props;

	const classes = classNames(
		{
			// Colors
			...getColorWithVariant(
				'has-text',
				textColor,
				textColorVariant,
				invertText
			),
			...getColorWithVariant(
				'has-background',
				backgroundColor,
				backgroundColorVariant,
				invertBackground
			),

			// Display
			...getBreakpointable('is-block', block),
			...getBreakpointable('is-flex', flex),
			...getBreakpointable('is-inline', inline),
			...getBreakpointable('is-inline-block', inlineBlock),
			...getBreakpointable('is-inline-flex', inlineFlex),
			...getBreakpointable('is-hidden', hidden),
			...getBreakpointable('is-invisible', invisible),
			'is-sr-only': srOnly,

			// Spacing
			...getSpacable('m', m),
			...getSpacable('my', my),
			...getSpacable('mx', mx),
			...getSpacable('mt', mt),
			...getSpacable('mr', mr),
			...getSpacable('mb', mb),
			...getSpacable('ml', ml),
			...getSpacable('p', p),
			...getSpacable('py', py),
			...getSpacable('px', px),
			...getSpacable('pt', pt),
			...getSpacable('pr', pr),
			...getSpacable('pb', pb),
			...getSpacable('pl', pl),

			// Text
			...getBreakpointable('has-text-centered', textCentered),
			...getBreakpointable('has-text-justified', textJustified),
			...getBreakpointable('has-text-left', textLeft),
			...getBreakpointable('has-text-right', textRight)
		},
		className
	);

	return (
		<Tag
			className={classes}
			{...otherProps as any}
		/>
	);
}

function getColorWithVariant(
	className: string,
	color: Color|undefined,
	variant: ColorVariant|undefined,
	invert: boolean|undefined
): Record<string, boolean> {
	if (!color) return {};
	const suffixText = !!variant ? `-${variant}` : '';
	const invertText = invert ? '-invert' : '';
	return { [`${className}-${color}${suffixText}${invertText}`]: true };
}

function getBreakpointable(className: string, breakpoint: Breakpoint|undefined): Record<string, boolean> {
	if (breakpoint === true) return { [className]: true };

	return { [`${className}-${breakpoint}`]: !!breakpoint };
}

function getSpacable(className: string, spacer: Spacer|undefined): Record<string, boolean> {
	if (typeof spacer === 'undefined') return {};

	return { [`${className}-${spacer}`]: true };
}