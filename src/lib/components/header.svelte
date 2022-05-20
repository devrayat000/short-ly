<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Button from './button.svelte';

	const drawerToggle = getContext<Writable<boolean>>('drawer');
	function handleDrawerToggle() {
		drawerToggle.update((prev) => !prev);
	}
</script>

<header class="flex justify-between items-center">
	<section>
		<h1>Shortly</h1>
	</section>
	<nav class="md:flex-1 gap-5">
		<button
			id="burger"
			type="button"
			class="flex flex-col items-stretch justify-center gap-1.5 rounded-full p-3 md:hidden"
			on:click={handleDrawerToggle}
		>
			<span class="h-0.5 w-7 bg-gray-400 rounded-lg" />
			<span class="h-0.5 w-7 bg-gray-400 rounded-lg" />
			<span class="h-0.5 w-7 bg-gray-400 rounded-lg" />
		</button>
		<section class="hidden md:flex justify-between">
			<div>
				<Button variant="text" class="text-neutral-dark-blue">Features</Button>
				<Button variant="text" class="text-neutral-dark-blue">Pricing</Button>
				<Button variant="text" class="text-neutral-dark-blue">Resources</Button>
			</div>
			<div>
				<Button variant="text" class="text-neutral-dark-blue">Login</Button>
				<Button pill>Sign Up</Button>
			</div>
		</section>
	</nav>
</header>
