<script>
	import Button from './button.svelte';
</script>

<article class="md:flex flex-row-reverse items-start gap-20">
	<aside>
		<img
			src="/images/illustration-working.svg"
			alt="Hero"
			class="relative max-w-[150%] md:-right-32 md:max-w-full"
		/>
	</aside>
	<main class="prose-p:text-center md:prose-p:text-left">
		<h2 class="text-center md:text-left md:text-6xl md:mt-14 md:mb-2">
			More than just shorter link
		</h2>
		<p class="md:max-w-[40ch] text-neutral-gray-violet">
			Build your brand's recognition and get detailed insights on how your links are performing.
		</p>
		<div class="grid place-items-center md:place-items-start">
			<Button pill>Get Started</Button>
		</div>
	</main>
</article>
