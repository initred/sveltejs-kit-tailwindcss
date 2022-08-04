import { register, init, getLocaleFromNavigator } from 'svelte-i18n'

export default () => {
	Object.entries(import.meta.glob('../locales/*.json')).forEach(([key, value]) => {
		register(key.slice(11, -5), value)
	})

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator(),
	})
}
