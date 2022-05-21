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

<article class="bg-white rounded-md p-5 md:py-3 md:flex items-center gap-5">
	<div class="md:flex-1 md:flex justify-between items-center prose-a:no-underline">
		<a href={longUrl} class="truncate font-medium md:max-w-[32ch]">{longUrl}</a>
		<hr class="md:hidden" />
		<a href={shortUrl} class="text-primary truncate font-medium md:max-w-[32ch]">{shortUrl}</a>
	</div>
	<Button on:click={handleCopy} secondary={copying} class="w-full md:w-auto mt-3 md:mt-auto">
		{copying ? 'Copied!' : 'Copy'}
	</Button>
</article>
