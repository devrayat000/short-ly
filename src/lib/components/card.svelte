<script lang="ts">
	import clsx from 'clsx';

	export let title: string, image: string;
	let clazz = '';
	export { clazz as class };

	const cls = clsx('prose-h4:mb-0 prose-p:mb-0 relative mt-16', clazz);
</script>

<article class={cls}>
	<div
		class="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-primary-bg w-20 h-20 my-0 rounded-full grid place-items-center"
	>
		<img src={image} alt={title} class="m-0" />
	</div>
	<section class="bg-white rounded-md p-8 relative">
		<h3 class="text-center md:text-left">{title}</h3>
		<p class="text-center md:text-left">
			<slot />
		</p>
	</section>
</article>
