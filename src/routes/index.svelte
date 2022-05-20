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
	<div class="p-6 md:px-20">
		<Header />

		<Hero />

		<Shorten />

		<!-- <ShortLinks /> -->

		<Drawer />

		<section>
			<header
				class="prose-h2:text-center prose-p:text-center flex flex-col items-center justify-center"
			>
				<h2 class="md:text-3xl mb-3">Advanced Statistics</h2>
				<p class="md:max-w-[44ch]">
					Track how your links are performing across the web with our advanced statistics dashboard.
				</p>
			</header>

			<div class="relative">
				<hr
					class="absolute top-0 md:top-1/2 left-1/2 md:left-0 w-2 md:w-full h-3/4 md:h-2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 bg-primary"
				/>
				<div class="flex flex-col md:flex-row md:gap-7 items-stretch relative">
					<Card title="Brand Recognition" image="/images/icon-brand-recognition.svg">
						Boost your brand recognition with each click. Generic links don't mean a thing. Branded
						links help instil confidence in your content.
					</Card>

					<Card title="Detailed Records" image="/images/icon-detailed-records.svg" class="md:mt-24">
						Boost your brand recognition with each click. Generic links don't mean a thing. Branded
						links help instil confidence in your content.
					</Card>

					<Card
						title="Fully Customizable"
						image="/images/icon-fully-customizable.svg"
						class="md:mt-32"
					>
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
