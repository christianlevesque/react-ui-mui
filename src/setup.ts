import { provide, NOTIFICATION_PROVIDER_COMPONENT, NOTIFIER } from '@sienar/react-utils';
import SnackbarProvider from './SnackbarProvider.tsx';
import { DEFAULT_PROPS_PROVIDER, default as DefaultPropsProvider } from '@/DefaultPropsProvider.tsx';
import { MUI_DATE_LOCALIZATION_PROVIDER, default as MuiDateLocalizationProvider } from './MuiDateLocalizationProvider.tsx';
import { notifier } from './utils.ts';

export default function setup() {
	provide(NOTIFICATION_PROVIDER_COMPONENT, SnackbarProvider);
	provide(DEFAULT_PROPS_PROVIDER, DefaultPropsProvider);
	provide(MUI_DATE_LOCALIZATION_PROVIDER, MuiDateLocalizationProvider);
	provide(NOTIFIER, notifier);
}