<script>
	import { getImageUrl } from '$lib/utils';
	import { fly } from 'svelte/transition';
	export let project;
</script>

<div
	class="card card-compact sm:w-72 bg-slate-800 shadow-xl"
	transition:fly={{ x: 200, duration: 300 }}
>
	<figure>
		<img
			src={project?.thumbnail
				? getImageUrl(project?.collectionId, project?.id, project?.thumbnail)
				: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${project?.name}`}
			alt="Project Thumbnail"
			id="project-thumbnail"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{project?.name}</h2>
		<p>{project?.tagline}</p>
		<div class="card-actions justify-end">
			<a href="/projects/{project?.id}/{project?.owner}" class="btn btn-primary">View Detail</a>
		</div>
	</div>
</div>
