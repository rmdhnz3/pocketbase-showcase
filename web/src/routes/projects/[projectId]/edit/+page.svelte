<script>
	import { enhance } from '$app/forms';
	import { getImageUrl } from '$lib/utils.js';
	import { Icon, Trash } from 'svelte-hero-icons';
	import { Input, Textarea } from '$lib/components';
	import { invalidateAll } from '$app/navigation';
	export let data;
	export let form;
	let loading = false;
	const submitUpdateProject = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
</script>

<svelte:head>
	<title>Edit project {data?.project?.name}</title>
</svelte:head>
<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/update"
			method="POST"
			enctype="multipart/form-data"
			class="flex flex-col space-y-2 w-full items-center"
			use:enhance={submitUpdateProject}
		>
			<h3 class="text-3xl font-bold">Edit {form?.data?.name ?? data.project.name} project</h3>
			<Input
				id="name"
				label="Project Name"
				value={form?.data?.name ?? data.project.name}
				errors={form?.errors?.name}
			/>
			<Input
				id="tagline"
				label="Project Tagline"
				value={form?.data?.tagline ?? data.project.tagline}
				errors={form?.errors?.tagline}
			/>
			<Input
				id="url"
				label="Project Url"
				value={form?.data?.url ?? data.project.url}
				errors={form?.errors?.url}
			/>
			<Textarea
				id="description"
				label="Description"
				value={form?.data?.description ?? data.project.description}
				errors={form?.errors?.description}
			/>

			<div class="form-control w-full max-w-lg">
				<label for="thumbnail" class="label font-medium pb-1">
					<span class="label-text">Thumbnail</span>
				</label>
				{#if data.project.thumbnail}
					<label for="thumbnail" class="avatar w-20 hover:cursor-pointer">
						<label for="thumbnail" class="absolute -top-1.5 -right-1.5 hover:cursor-pointer">
							<button class="btn btn-error btn-sm btn-circle" formaction="?/deleteThumbnail">
								<Icon src={Trash} class="w-5 h-5 text-white" />
							</button>
						</label>
						<div class="w-20 rounded">
							<img
								src={getImageUrl(
									data.project.collectionId,
									data.project.id,
									data.project?.thumbnail,
									'80x80'
								)}
								alt="Project Thumbnail"
								id="project-thumbnail"
							/>
						</div>
					</label>
				{/if}
				<input
					type="file"
					name="thumbnail"
					id="thumbnail"
					class="file-input file-input-bordered w-full max-w-lg mt-2"
				/>
				{#if form?.errors?.thumbnail}
					{#each form?.errors?.thumbnail as error}
						<label for="thumbnail" class="label py-0 pt-1">
							<span class="label-text-alt text-error">
								<strong> {error} </strong>
							</span>
						</label>
					{/each}
				{/if}
			</div>
			<div class="w-full max-w-lg pt-3">
				<button class="btn btn-primary w-full max-w-lg" type="submit">Save Changes</button>
			</div>
		</form>
	</div>
</div>
