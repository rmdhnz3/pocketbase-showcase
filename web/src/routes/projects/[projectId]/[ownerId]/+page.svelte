<script>
	import Textarea from '$lib/components/Textarea.svelte';
	import { fly } from 'svelte/transition';
	import { getImageUrl } from '$lib/utils';
	export let data;
</script>

<svelte:head>
	<title>Project {data?.project?.name}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8" transition:fly={{ y: 200, duration: 300 }}>
	<div class="flex items-center">
		<img
			class="w-10 h-10 rounded-full mr-2"
			src={data?.user?.avatar
				? getImageUrl(
						data?.user?.collectionId,
						data?.project?.owner,
						data?.project?.expand.owner.avatar
				  )
				: `https://ui-avatars.com/api/?name=${data?.user?.username}`}
			alt="Creator Avatar"
		/>
		<span class="text-lg font-semibold"
			>{data.project.expand.owner.username} <br /> {data.project.created.slice(0, 10)}
		</span>
	</div>

	<div class="my-8">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img
			class="w-full rounded"
			src={data?.project?.thumbnail
				? getImageUrl(data?.project?.collectionId, data?.project?.id, data?.project?.thumbnail)
				: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${data?.project?.name}`}
			alt="Project Image"
		/>
	</div>

	<h1 class="text-3xl font-bold my-2">{data.project.name}</h1>
	<input class="input input-bordered text-lg my-2" value={data.project.tagline} disabled />
	<p class="text-lg link link-hover my-2" href="/#">{data.project.url}</p>
	<p class="text-lg my-2">{data.project.description}</p>

	<div class="mt-8">
		<h2 class="text-2xl font-semibold mb-4">Comments</h2>
		<div class="space-y-4">
			{#each data.comments as item}
				<div class="bg-base-200 p-2 my-2 mx-2 mb-2 flex items-center rounded-lg">
					<div class="w-12 rounded-full">
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<img
							src={getImageUrl(
								item.expand.user.collectionId,
								item.expand.user.id,
								item.expand.user.avatar
							)}
							alt="Avatar Image"
							class="w-full h-full"
						/>
					</div>
					<div class="ml-2">
						<span class="text-sm"
							>By: {item.expand.user.username} at {item.expand.user.created.slice(0, 10)}
						</span>
						<p class="text-lg font-semibold">{item.comment}</p>
					</div>
				</div>
				<div class="divider" />
			{/each}
		</div>
	</div>

	{#if !data.user}
		<span class="text-red-500 text-xl font-semibold">Login to post comment!</span>
	{:else}
		<div class="mt-4 text-slate-300">
			<form action="?/postComment" method="POST" class="form-control w-full">
				<div class="mt-4">
					<input type="hidden" name="projectId" value={data?.project?.id} />
					<Textarea label="Comment" id="comment" placeholder="Write a comment here ..." />
					<button class="bg-blue-500 text-white rounded px-4 py-2 mt-2" type="submit">
						Post Comment
					</button>
				</div>
			</form>
		</div>
	{/if}
</div>
