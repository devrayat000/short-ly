<script lang="ts">
	import { shortenUrl, type ShortenUrlResponse } from '$lib/services/shortenUrl';
	import type { UrlStore } from '$lib/store/shorten-url-store';
	import { getContext } from 'svelte';

	import Button from './button.svelte';

	let longUrl: string = '';
	// let error: ShortUrlError;

	let promise: Promise<ShortenUrlResponse>;

	async function handleShortening() {
		promise = shortenUrl(longUrl);
	}

	const urlStore = getContext<UrlStore>('shorten');
</script>

<main class="relative bg-primary-bg p-5 rounded-md overflow-hidden my-10">
	<img src="/images/bg-shorten-mobile.svg" alt="Shorten" class="absolute right-0 top-0 m-0" />
	<section class="relative flex flex-col items-stretch gap-4">
		<input
			type="text"
			class="rounded py-2 px-4"
			placeholder="Shorten a link here..."
			bind:value={longUrl}
		/>
		{#if $urlStore?.error}
			<p class="text-red italic">{$urlStore.error.message}</p>
		{/if}
		<Button on:click={handleShortening}>Shorten It!</Button>
	</section>
</main>
