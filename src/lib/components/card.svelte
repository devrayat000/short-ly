<script lang="ts">
	export let title: string, image: string;
</script>

<article class="prose-h4:mb-0 prose-p:mb-0 relative mt-16">
	<div
		class="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-primary-bg w-20 h-20 my-0 rounded-full grid place-items-center"
	>
		<img src={image} alt={title} class="m-0" />
	</div>
	<section class="bg-white rounded-md p-8 relative">
		<h3 class="text-center">{title}</h3>
		<p class="text-center">
			<slot />
		</p>
	</section>
</article>
