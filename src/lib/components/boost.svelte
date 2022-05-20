<script>
	import Button from './button.svelte';
</script>

<div id="boost">
	<section
		class="relative mt-10 bg-primary-bg bg-[url('/images/bg-boost-mobile.svg')] md:bg-[url('/images/bg-boost-desktop.svg')] bg-left-top bg-no-repeat md:bg-cover"
	>
		<!-- <img
			src="images/bg-boost-mobile.svg"
			alt="Boost"
			class="absolute top-0 left-0 h-full w-full m-0 bg-primary-bg"
		/> -->
		<article class="py-20 relative prose-h2:mt-0">
			<h2 class="font-bold text-center text-white">Boost your links today</h2>
			<div class="grid place-items-center">
				<Button pill>Get Started</Button>
			</div>
		</article>
	</section>
</div>
