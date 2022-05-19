<script>
	import Footer from '$lib/components/footer.svelte';
	import Boost from '$lib/components/boost.svelte';
</script>

<div class="prose max-w-none prose-h1:mb-0">
	<div class="p-6">
		<header class="flex justify-between items-center">
			<section>
				<h1>Shortly</h1>
			</section>
			<nav>
				<button id="burger" class="flex flex-col items-stretch justify-center gap-1">
					<span class="h-1 w-7 bg-gray-400 rounded-lg" />
					<span class="h-1 w-7 bg-gray-400 rounded-lg" />
					<span class="h-1 w-7 bg-gray-400 rounded-lg" />
				</button>
			</nav>
		</header>

		<article>
			<header>
				<img src="/images/illustration-working.svg" alt="Hero" />
			</header>
			<main class="prose-h2:text-center prose-p:text-center">
				<h2>More than just shorter link</h2>
				<p>
					Build your brand's recognition and get detailed insights on how your links are performing.
				</p>
				<div class="grid place-items-center">
					<button class="bg-primary text-white rounded-full px-6 py-2 font-medium"
						>Get Started</button
					>
				</div>
			</main>
		</article>

		<main class="relative bg-primary-bg p-5 rounded-md overflow-hidden my-10">
			<img src="/images/bg-shorten-mobile.svg" alt="Shorten" class="absolute right-0 top-0 m-0" />
			<section class="relative flex flex-col items-stretch gap-4">
				<input type="text" class="rounded py-2 px-4" placeholder="Shorten a link here..." />
				<button class="bg-primary text-white rounded px-6 py-2 font-medium">Shorten It!</button>
			</section>
		</main>

		<section>
			<header class="prose-h2:text-center prose-p:text-center">
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with our advanced statistics dashboard.
				</p>
			</header>

			<main class="prose-h4:mb-0 prose-p:mb-0 relative mt-16">
				<div
					class="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-primary-bg w-20 h-20 my-0 rounded-full grid place-items-center"
				>
					<img src="/images/icon-brand-recognition.svg" alt="Brand Recognition" class="m-0" />
				</div>
				<section class="bg-white rounded-md p-8 relative">
					<h3>Brand Recognition</h3>
					<p>
						Boost your brand recognition with each click. Generic links don't mean a thing. Branded
						links help instil confidence in your content.
					</p>
				</section>
			</main>
		</section>
	</div>

	<Boost />

	<Footer />
</div>
