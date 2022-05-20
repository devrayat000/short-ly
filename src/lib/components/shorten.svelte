<script lang="ts">
	import { shortenUrl, type ShortenUrlResponse } from '$lib/services/shortenUrl';
	import type { UrlStore } from '$lib/store/shorten-url-store';
	import { getContext } from 'svelte';

	import Button from './button.svelte';

	let longUrl: string = '';

	const urlStore = getContext<UrlStore>('shorten');
	urlStore.subscribe(console.log);
	async function handleShortening() {
		urlStore.shortenUrl(longUrl);
	}
</script>

<main
	class="bg-primary-bg p-5 md:p-8 rounded-md overflow-hidden my-10 bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top md:bg-cover"
>
	<!-- <img src="/images/bg-shorten-mobile.svg" alt="Shorten" class="absolute right-0 top-0 m-0" /> -->
	<section class="flex flex-col items-stretch gap-4 md:flex-row relative">
		<input
			type="text"
			class="rounded py-2 px-4 md:flex-1 relative"
			placeholder="Shorten a link here..."
			bind:value={longUrl}
		/>
		{#if $urlStore?.error}
			<p
				class="text-secondary italic absolute left-0 -bottom-4 md:-bottom-5 w-auto my-0 text-xs md:text-sm"
			>
				{$urlStore.error.message}
			</p>
		{/if}
		<Button on:click={handleShortening} class="relative">Shorten It!</Button>
	</section>
</main>
