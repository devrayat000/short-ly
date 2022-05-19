<script lang="ts">
	import Button from './button.svelte';

	let longUrl: string = '';
</script>

<main class="relative bg-primary-bg p-5 rounded-md overflow-hidden my-10">
	<img src="/images/bg-shorten-mobile.svg" alt="Shorten" class="absolute right-0 top-0 m-0" />
	<section class="relative flex flex-col items-stretch gap-4">
		<input
			type="text"
			class="rounded py-2 px-4"
			placeholder="Shorten a link here..."
			bind:value={longUrl}
		/>
		<Button>Shorten It!</Button>
	</section>
</main>
