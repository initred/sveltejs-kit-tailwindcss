<script lang="ts">
	import { onMount } from 'svelte'
	import { t } from 'svelte-i18n'
	import HeroiconsSolidMoon from '~icons/heroicons-solid/moon'
	import HeroiconsSolidSun from '~icons/heroicons-solid/sun'

	let dark: boolean
	let hidden: boolean = true

	function handleChange({ matches: dark }: MediaQueryListEvent) {
		if (!localStorage.theme) {
			setMode(dark)
		}
	}
	function toggle() {
		setMode(!dark)
	}

	function setMode(value: boolean) {
		dark = value
		dark
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')

		localStorage.theme = dark ? 'dark' : 'light'

		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme')
		}
	}

	onMount(() => {
		dark = document.documentElement.classList.contains('dark')
		hidden = false

		const matcher = window.matchMedia('(prefers-color-scheme: dark)')
		matcher.addEventListener('change', handleChange)

		return () => matcher.removeEventListener('change', handleChange)
	})
</script>

<button
	class="text-gray-500 dark:text-white"
	type="button"
	on:click={toggle}
	title={$t('button.toggle_dark')}
>
	{#if dark}
		<HeroiconsSolidMoon class="h-5 w-5" />
	{:else}
		<HeroiconsSolidSun class="h-5 w-5 " />
	{/if}
</button>
