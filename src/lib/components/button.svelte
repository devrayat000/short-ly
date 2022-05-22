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

	$: cls = clsx(
		'inline-block text-white px-7 py-2 font-medium transition duration-150 ease-in-out',
		clazz,
		variant === 'text' && 'bg-transparent focus-visible:bg-slate-100/20 active:bg-slate-100/20',
		variant === 'filled' &&
			'bg-primary focus-visible:bg-primary/90 active:bg-primary/90 shadow-sm active:shadow',
		{
			['rounded-full']: pill,
			['rounded']: !pill,
			['bg-primary-bg']: secondary,
			['w-full']: fullWidth
		}
	);
	interface ButtonEventMap {
		click: {};
	}

	const dispatch = createEventDispatcher<ButtonEventMap>();

	function handleClick(e: MouseEvent) {
		e.preventDefault();
		dispatch('click', {});
	}
</script>

<button class={cls} on:click={handleClick} disabled={loading} type="button" {...$$restProps}>
	<slot />
</button>
