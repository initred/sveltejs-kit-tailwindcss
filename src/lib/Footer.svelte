<script lang="ts">
	import { t, locale, locales } from 'svelte-i18n'
	import HeroiconsSolidHome from '~icons/heroicons-solid/home'
	import HeroiconsSolidTranslate from '~icons/heroicons-solid/translate'
	import CarbonLogoGithub from '~icons/carbon/logo-github'
	import Theme from '$lib/Theme.svelte'

	function changeLocale() {
		const getLocale = $locale

		if (getLocale) {
			const localeIndex = $locales.findIndex((l) => l.includes(`${getLocale.substring(0, 2)}`))
			if (localeIndex !== -1) locale.set($locales[(localeIndex + 1) % $locales.length])
		}
	}
</script>

<footer class="text-gray-500 dark:text-white flex items-center justify-center space-x-2.5 mt-8">
	<a href="/" title={$t('button.home')}>
		<HeroiconsSolidHome class="w-5 h-5" />
	</a>

	<Theme />

	<button type="button" on:click={changeLocale} title={$t('button.toggle_langs')}>
		<HeroiconsSolidTranslate class="w-5 h-5" />
	</button>

	<a href="https://github.com/initred/sveltejs-kit-tailwindcss" target="_blank" title="github">
		<CarbonLogoGithub class="w-5 h-5" />
	</a>
</footer>
