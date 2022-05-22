<script lang="ts">
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import type { Writable } from 'svelte/store';

	import Button from './button.svelte';

	const drawerToggle = getContext<Writable<boolean>>('drawer');

	function closeDrawer() {
		$drawerToggle = false;
	}
</script>

<div>
	{#if $drawerToggle}
		<div
			id="backdrop"
			class="fixed top-0 left-0 w-full h-full bg-transparent z-40"
			on:click={closeDrawer}
		/>
		<section
			transition:fly|local={{ x: window.outerWidth, easing: quintInOut, opacity: 0.4 }}
			role="menu"
			class="fixed top-20 left-0 h-56 w-full px-7 z-50"
		>
			<div class="bg-primary-bg rounded-lg px-5 py-8 flex flex-col items-center gap-4">
				<Button pill fullWidth variant="text" class="text-gray-50">Features</Button>
				<Button pill fullWidth variant="text" class="text-gray-50">Pricing</Button>
				<Button pill fullWidth variant="text" class="text-gray-50">Resources</Button>
				<hr class="self-stretch bg-neutral-gray-violet" />
				<Button pill fullWidth variant="text" class="text-gray-50">Login</Button>
				<Button pill fullWidth>Sign Up</Button>
			</div>
		</section>
	{/if}
</div>
