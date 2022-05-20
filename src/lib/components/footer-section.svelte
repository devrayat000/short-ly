<script lang="ts">
	export let title: string;
</script>

<div>
	<h4>{title}</h4>
	<div class="flex flex-col items-center md:items-start gap-4 text-neutral-gray">
		<slot />
	</div>
</div>
