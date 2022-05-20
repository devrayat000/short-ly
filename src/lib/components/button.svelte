<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let pill: boolean = false,
		loading = false,
		fullWidth = false;

	interface ButtonEventMap {
		click: MouseEvent['detail'];
	}

	const dispatch = createEventDispatcher<ButtonEventMap>();

	function handleClick(e: MouseEvent) {
		dispatch('click', e.detail);
	}
</script>

<button
	class="bg-primary text-white px-7 py-2 font-medium"
	class:rounded-full={pill}
	class:rounded={!pill}
	class:w-full={fullWidth}
	on:click={handleClick}
	disabled={loading}
>
	<slot />
</button>
