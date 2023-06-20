<script>
	import { ProjectItem } from '$lib/components';

	export let data;
</script>

<head>
	<title>My Projects</title>
</head>
<div class="container">
	<h2 class="text-3xl font-bold">
		My Projects 😎
		<div class="w-full mt-4 flex flex-col items-center">
			{#if data.projects.length == 0}
				<p class="text-center text-3xl">Your project is empty 😢</p>
				<a href="/projects/new" class="btn btn-primary max-w-md mt-4">Add New Project 😃</a>
			{:else}
				{#each data.projects as project}
					<ProjectItem {project} />
					<div class="divider mt-0 mb-2" />
				{/each}
			{/if}
		</div>
	</h2>
</div>
