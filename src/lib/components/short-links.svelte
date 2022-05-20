<script lang="ts">
	import Link from '$lib/models/link';

	import { createLocalStorage } from '$lib/store/local-storage';
	import ShortUrlError from '$lib/utils/error';

	import ShortLink from './short-link.svelte';

	const urlStore = createLocalStorage<Link[]>('shortly.urls', [
		new Link('https://rel.ink/l4Isj', 'https://www.frontendmentor.io'),
		new Link('https://rel.ink/l4Isj', 'https://www.frontendmentor.io'),
		new Link('https://rel.ink/l4Isj', 'https://www.frontendmentor.io')
	]);
</script>

<section class="prose-hr:my-2 flex flex-col items-stretch gap-5">
	{#each $urlStore as link (link.shortUrl)}
		<ShortLink shortUrl={link.shortUrl} longUrl={link.longUrl} />
	{/each}
</section>
