<script lang="ts">
	import { getContext } from 'svelte';
	import Link from '$lib/models/link';

	import { createLocalStorage } from '$lib/store/local-storage';
	import type { UrlStore } from '$lib/store/shorten-url-store';
	import ShortLink from './short-link.svelte';

	const { data } = getContext<UrlStore>('shorten');
	const urlLocalStore = createLocalStorage<Link[]>('shortly.urls', []);

	$: {
		if ($data && 'result' in $data) {
			const link = $data.result;
			urlLocalStore.update((prev) => [
				new Link({ id: link.code, shortUrl: link.full_short_link, longUrl: link.original_link }),
				...prev
			]);
		}
	}
</script>

<section class="flex flex-col items-stretch gap-5">
	<!-- {#if $urlLocalStore} -->
	{#each $urlLocalStore as link, i (link.id)}
		<ShortLink shortUrl={link.shortUrl} longUrl={link.longUrl} />
	{/each}
	<!-- {/if} -->
</section>
