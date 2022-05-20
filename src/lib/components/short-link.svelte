<script lang="ts">
	import { browser } from '$app/env';
	import { onDestroy } from 'svelte';

	import Button from './button.svelte';

	export let shortUrl: string, longUrl: string;

	let copying = false;

	async function handleCopy() {
		if (!browser) return;

		await navigator.clipboard.writeText(shortUrl);
		copying = true;
	}

	$: {
		if (copying) {
			const timeout = setTimeout(() => {
				copying = false;
			}, 1500);

			onDestroy(() => {
				clearTimeout(timeout);
			});
		}
	}
</script>

<div class="bg-white rounded-md p-5">
	<h5 class="truncate font-medium">{longUrl}</h5>
	<hr />
	<h5 class="text-primary truncate font-medium">{shortUrl}</h5>
	<Button fullWidth on:click={handleCopy} secondary={copying} class="mt-3">
		{copying ? 'Copied!' : 'Copy'}
	</Button>
</div>
