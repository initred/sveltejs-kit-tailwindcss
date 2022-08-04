<script lang="ts">
	import { t } from 'svelte-i18n'
	import { userStore } from '../store/user'
	import logo from '$lib/svelte-logo.svg'

	const user = userStore()
	const name = user.savedName

	function go() {
		if (name) location.href = `/hi/${encodeURIComponent($name)}`
	}
</script>

<div class="flex flex-col justify-center items-center">
	<h1 class="text-lg font-bold">Svelte Tailwind Template</h1>

	<div class="mt-8">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<div class="text-sm mt-8">
		<p class="text-center">Support</p>
		<ul class="text-blue-400 list-disc my-2.5">
			<li>
				<a href="https://tailwindcss.com/" target="_blank" title="Tailwindcss">Tailwindcss</a>
			</li>
			<li>
				<a href="https://github.com/antfu/unplugin-icons" target="_blank" title="Unplugin Icons">
					Unplugin Icons
				</a>
			</li>
			<li>
				<a href="https://github.com/kaisermann/svelte-i18n" target="_blank" title="Svelte I18n">
					Svelte I18n
				</a>
			</li>
		</ul>
	</div>

	<div class="flex flex-col justify-center items-center mt-4 space-y-4">
		<input
			type="text"
			class="form-input items-center text-center text-sm rounded dark:text-gray-700"
			bind:value={$name}
			placeholder={$t('intro.whats-your-name')}
			on:keydown={({ key }) => key === 'Enter' && $name !== '' && go()}
		/>
		<button
			type="button"
			class="text-sm text-white bg-gray-500 rounded px-2.5 py-1.5 disabled:cursor-not-allowed"
			on:click={go}
			disabled={!$name}
		>
			{$t('button.go')}
		</button>
	</div>
</div>
