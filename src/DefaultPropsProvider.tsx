import { defaultPropsContext } from '@/componentDefaults.ts';

import type { ComponentType, PropsWithChildren } from 'react';
import type { ComponentDefaults } from '@/componentDefaults.ts';
import type { InjectionKey } from '@sienar/react-utils';

export const DEFAULT_PROPS_PROVIDER = Symbol() as InjectionKey<ComponentType<PropsWithChildren>>;

export default function DefaultPropsProvider({ children }: PropsWithChildren) {
	const defaults: ComponentDefaults = {
		button: {}
	};

	return <defaultPropsContext.Provider value={defaults}>
		{children}
	</defaultPropsContext.Provider>
}