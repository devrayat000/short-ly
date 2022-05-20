<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let pill: boolean = false,
		loading = false,
		fullWidth = false,
		secondary = false;
	let clazz: string = '';

	export { clazz as class };
	interface ButtonEventMap {
		click: MouseEvent['detail'];
	}

	const dispatch = createEventDispatcher<ButtonEventMap>();

	function handleClick(e: MouseEvent) {
		dispatch('click', e.detail);
	}
</script>

<button
	class={`text-white px-7 py-2 font-medium ${clazz}`.trim()}
	class:rounded-full={pill}
	class:rounded={!pill}
	class:w-full={fullWidth}
	class:bg-primary-bg={secondary}
	class:bg-primary={!secondary}
	on:click={handleClick}
	disabled={loading}
>
	<slot />
</button>
