<script lang="ts">
	import { setContext } from 'svelte';

	import Footer from '$lib/components/footer.svelte';
	import Boost from '$lib/components/boost.svelte';
	import Card from '$lib/components/card.svelte';
	import Header from '$lib/components/header.svelte';
	import { createUrlStore, type UrlStore } from '$lib/store/shorten-url-store';
	import Hero from '$lib/components/hero.svelte';
	import Shorten from '$lib/components/shorten.svelte';
	import ShortLinks from '$lib/components/short-links.svelte';
	import Drawer from '$lib/components/drawer.svelte';
	import { writable } from 'svelte/store';
	import { browser } from '$app/env';

	const urlStore = createUrlStore();

	const drawerOpen = writable(false);

	setContext<UrlStore>('shorten', urlStore);
	setContext('drawer', drawerOpen);

	$: {
		if (browser) {
			if ($drawerOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.removeAttribute('style');
			}
		}
	}
</script>

<svelte:head>
	<title>Shortly - Url Shortner</title>
</svelte:head>

<div class="prose max-w-none prose-h1:mb-0 prose-hr:my-2">
	<div class="p-6">
		<Header />

		<Hero />

		<Shorten />

		<ShortLinks />

		<Drawer />

		<section>
			<header class="prose-h2:text-center prose-p:text-center">
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with our advanced statistics dashboard.
				</p>
			</header>

			<div class="relative">
				<hr class="absolute top-0 left-1/2 w-2 h-3/4 -translate-x-1/2 bg-primary" />
				<div class="flex flex-col items-stretch relative">
					<Card title="Brand Recognition" image="/images/icon-brand-recognition.svg">
						Boost your brand recognition with each click. Generic links don't mean a thing. Branded
						links help instil confidence in your content.
					</Card>

					<Card title="Detailed Records" image="/images/icon-detailed-records.svg">
						Boost your brand recognition with each click. Generic links don't mean a thing. Branded
						links help instil confidence in your content.
					</Card>

					<Card title="Fully Customizable" image="/images/icon-fully-customizable.svg">
						Improve brand awareness and content discoverability through customizable links,
						supercharging audience engagement.
					</Card>
				</div>
			</div>
		</section>
	</div>

	<Boost />

	<Footer />
</div>
