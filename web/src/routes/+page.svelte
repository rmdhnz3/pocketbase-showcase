<script>
	import { CardProject } from '$lib/components';
	export let data;
</script>

<svelte:head>
	<title>Recent Projects</title>
</svelte:head>
<div class="flex flex-col gap-3">
	<h1 class="text-xl font-bold">Recent Projects</h1>
	<div class="grid grid-cols-4 gap-2">
		{#each data?.projects as project}
			<CardProject {project} />
		{/each}
	</div>
</div>
