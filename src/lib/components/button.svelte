<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import clsx from 'clsx';

	export let pill: boolean = false,
		loading = false,
		fullWidth = false,
		secondary = false,
		variant: 'text' | 'filled' = 'filled';
	let clazz: string = '';

	export { clazz as class };

	const cls = clsx(
		'text-white px-7 py-2 font-medium transition',
		clazz,
		variant === 'text' && 'bg-transparent active:bg-slate-50/20',
		variant === 'filled' && 'bg-primary active:bg-primary/90',
		{
			['rounded-full']: pill,
			['rounded']: !pill,
			['bg-primary-bg']: secondary,
			['w-full']: fullWidth
		}
	);
	interface ButtonEventMap {
		click: MouseEvent['detail'];
	}

	const dispatch = createEventDispatcher<ButtonEventMap>();

	function handleClick(e: MouseEvent) {
		dispatch('click', e.detail);
	}
</script>

<button class={cls} on:click={handleClick} disabled={loading}>
	<slot />
</button>
