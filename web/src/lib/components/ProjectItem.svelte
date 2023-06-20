<script>
	import { applyAction, enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import { Modal } from '$lib/components';
	export let project;
	import { getImageUrl } from '$lib/utils';
	import toast from 'svelte-french-toast';
	let modalOpen;
	let loading;
	$: modalOpen = false;
	const submitDeleteProject = () => {
		loading = true;
		modalOpen = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Project deleted successfully');
					await update();
					modalOpen = false;
					break;
				case 'error':
					toast.error('Cannot delete project');
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<div
	class="w-full h-28 flex items-center justify-between"
	transition:fly={{ y: 200, duration: 300 }}
>
	<div class="avatar">
		<div class="w-20 round">
			<img
				src={project?.thumbnail
					? getImageUrl(project?.collectionId, project?.id, project?.thumbnail, '80x80')
					: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${project?.name}`}
				alt="Project Thumbnail"
				id="project-thumbnail"
			/>
		</div>
	</div>
	<div class="flex flex-col w-full ml-4 h-full justify-center">
		<a href="/projects/{project.id}/{project.owner}" class="font-semibold text-lg">{project.name}</a
		>
		<p>{project.tagline}</p>
	</div>
	<div class="flex items-center justify-end w-full">
		<a href="/projects/{project.id}/edit" class="btn btn-outline">Edit Project</a>
		<Modal label={project.id} checked={modalOpen}>
			<span slot="trigger" class="btn btn-outline btn-error ml-2">Delete</span>
			<div slot="heading">
				<h3 class="text text-2xl">
					Delete {project.name}
				</h3>
				<p class="text-base font-normal mt-2">
					This project will be deleted and can't be restored !
				</p>
			</div>
			<div slot="actions" class="flex w-full items-center justify-center space-x-2">
				<label for={project.id} class="btn btn-outline btn-secondary" disabled={loading}
					>Cancel</label
				>
				<form action="?/deleteProject" method="POST" use:enhance={submitDeleteProject}>
					<input type="hidden" name="id" value={project.id} />
					<button type="submit" class="btn btn-error" disabled={loading}>Delete</button>
				</form>
			</div>
		</Modal>
	</div>
</div>
