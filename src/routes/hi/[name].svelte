<script lang="ts">
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { userStore } from '../../store/user'
	import { t } from 'svelte-i18n'
	import HeroiconsSolidUserCircle from '~icons/heroicons-solid/user-circle'
	const { savedName, setNewName } = userStore()

	onMount(() => {
		setNewName($page.params.name)
	})
</script>

<div class="text-center">
	<div>
		<HeroiconsSolidUserCircle class="inline-block w-12 h-12" />
	</div>

	<p class="mt-4">
		{$t('intro.hi', { values: { name: $savedName } })}
	</p>

	<div class="mt-4">
		<button
			type="button"
			class="text-sm text-white bg-gray-500 rounded px-2.5 py-1.5"
			on:click={() => history.back()}
		>
			{$t('button.back')}
		</button>
	</div>
</div>
