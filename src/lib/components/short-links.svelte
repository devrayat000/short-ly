<script lang="ts">
	import Link from '$lib/models/link';
	import { createLocalStorage } from '$lib/store/local-storage';
	import ShortLink from './short-link.svelte';

	const urlStore = createLocalStorage<Link[]>('shortly.urls', [
		new Link('https://rel.ink/l4Isj', 'https://www.frontendmentor.io/everybody'),
		new Link('https://rel.ink/l4Isj', 'https://www.frontendmentor.io'),
		new Link('https://rel.ink/l4Isj', 'https://www.frontendmentor.io')
	]);
</script>

<section class="flex flex-col items-stretch gap-5">
	{#each $urlStore as link, i (link.shortUrl + i)}
		<ShortLink shortUrl={link.shortUrl} longUrl={link.longUrl} />
	{/each}
</section>
