<script lang="ts">
	import { getContext } from 'svelte';
	import Link from '$lib/models/link';

	import { createLocalStorage } from '$lib/store/local-storage';
	import type { UrlStore } from '$lib/store/shorten-url-store';
	import ShortLink from './short-link.svelte';

	const { data } = getContext<UrlStore>('shorten');
	const urlStore = createLocalStorage<Link[]>('shortly.urls', []);

	$: {
		if ($data && 'result' in $data) {
			const link = $data.result;
			urlStore.update((prev) => [...prev, new Link(link.full_short_link, link.original_link)]);
		}
	}
</script>

<section class="flex flex-col items-stretch gap-5">
	{#each $urlStore as link, i (link.shortUrl + i)}
		<ShortLink shortUrl={link.shortUrl} longUrl={link.longUrl} />
	{/each}
</section>
