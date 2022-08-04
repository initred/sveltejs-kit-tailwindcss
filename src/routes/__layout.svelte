<script lang="ts" context="module">
	import '../styles/app.css'
	import loadedI18n from '../lib/i18n'

	loadedI18n()
</script>

<script lang="ts">
	import Footer from '$lib/Footer.svelte'
	import { isLoading } from 'svelte-i18n'
</script>

{#if !$isLoading}
	<div>
		<div class="flex justify-center items-center mt-12">
			<slot />
		</div>
		<Footer />
	</div>
{/if}
