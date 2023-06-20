<script>
	import { enhance } from '$app/forms';
	import { Input, Textarea } from '$lib/components';
	import toast from 'svelte-french-toast';
	let loading;
	export let form;
	const submitNewProject = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'error':
					toast.error('Failed to create new project');
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
</script>

<svelte:head>
	<title>Add a new project</title>
</svelte:head>
<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
			use:enhance={submitNewProject}
		>
			<h3 class="text-3xl font-bold">What's this project will be ?</h3>
			<p class="mt-2 text-lg">
				Put the project name, tagline, link, and description in the form below
			</p>
			<Input
				id="name"
				label="Project name"
				disabled={loading}
				value={form?.data?.name}
				errors={form?.errors?.name}
			/>
			<Input
				id="tagline"
				label="Project tagline"
				disabled={loading}
				value={form?.data?.tagline}
				errors={form?.errors?.tagline}
			/>
			<Input
				id="url"
				label="Project url"
				disabled={loading}
				value={form?.data?.url}
				errors={form?.errors?.url}
			/>
			<Textarea
				id="description"
				label="Project Description"
				disabled={loading}
				value={form?.data?.description}
				errors={form?.errors?.description}
			/>
			<Input
				id="thumbnail"
				label="Thumbnail"
				type="file"
				disabled={loading}
				errors={form?.errors?.thumbnail}
			/>
			<div class="max-w-lg w-full pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg" disabled={loading}>
					Create Project
				</button>
			</div>
		</form>
	</div>
</div>
