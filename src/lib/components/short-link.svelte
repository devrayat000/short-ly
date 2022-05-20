<script lang="ts">
	import { browser } from '$app/env';

	import Button from './button.svelte';

	export let shortUrl: string, longUrl: string;

	function handleCopy() {
		if (!browser) return;

		return navigator.clipboard.writeText(shortUrl);
	}
</script>

<div class="bg-white rounded-md p-5">
	<h5>{longUrl}</h5>
	<hr />
	<h5 class="text-primary">{shortUrl}</h5>
	<Button fullWidth on:click={handleCopy}>Copy</Button>
</div>
