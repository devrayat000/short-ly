<script lang="ts">
	import type { UrlStore } from '$lib/store/shorten-url-store';
	import clsx from 'clsx';
	import { getContext, onDestroy } from 'svelte';

	import Button from './button.svelte';

	let longUrl: string = '';

	const { data, error, loading, shortenUrl } = getContext<UrlStore>('shorten');
	const unsubscribe = data.subscribe(console.log);

	async function handleShortening() {
		await shortenUrl(longUrl);
		longUrl = '';
	}

	$: cls = clsx(
		'rounded py-2 px-4 w-full focus-visible:outline-none ring-primary focus-visible:ring-2 transition-all',
		!!$error && 'placeholder:text-secondary ring-secondary'
	);

	onDestroy(unsubscribe);
</script>

<main
	class="bg-primary-bg p-5 md:p-8 rounded-md overflow-hidden my-10 bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top md:bg-cover"
>
	<!-- <img src="/images/bg-shorten-mobile.svg" alt="Shorten" class="absolute right-0 top-0 m-0" /> -->
	<section class="flex flex-col items-stretch gap-4 md:flex-row relative">
		<div class="md:flex-1 relative">
			<input
				type="url"
				class={cls}
				placeholder="Shorten a link here..."
				bind:value={longUrl}
				aria-invalid={!!$error}
			/>
			{#if $error}
				<p
					class="text-secondary italic mt-1 md:my-0 md:absolute md:left-0 md:-bottom-5 w-auto my-0 text-xs md:text-sm"
				>
					{$error.message}
				</p>
			{/if}
		</div>
		<Button on:click={handleShortening} class="relative w-full md:w-auto">Shorten It!</Button>
	</section>
</main>
