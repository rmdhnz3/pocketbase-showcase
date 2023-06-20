<script>
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { getImageUrl } from '$lib/utils.js';
	import { Icon, Pencil } from 'svelte-hero-icons';
	import { Input } from '$lib/components';
	export let data;
	export let form;
	let loading;
	$: proferror = form?.errors.avatar;
	$: namerror = form?.errors.name;
	const previewAvatar = (e) => {
		const target = e.target;
		const files = target.files;
		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-img');
			preview.src = src;
		}
	};

	const submitUpdateProfile = () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<div class="flex flex-col w-full h-full">
	<form
		action="?/updateProfile"
		class="flex flex-col space-y-2 w-full"
		enctype="multipart/form-data"
		method="POST"
		use:enhance={submitUpdateProfile}
	>
		<h3 class="text-2xl font-medium">Update Profile</h3>
		<div class="form-control w-full max-w-lg">
			<label for="avatar" class="label font-medium">
				<span class="label-text">Profile Picture </span></label
			>
			<label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer">
				<label for="avatar" class="absolute -bottom-0.5 -right-0.5">
					<span class="btn btn-circle btn-sm btn-secondary">
						<Icon src={Pencil} class="w-4 h-4" />
					</span>
				</label>
				<div class="w-32 rounded-full">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src={data?.user?.avatar
							? getImageUrl(data?.user?.collectionId, data?.user?.id, data?.user?.avatar)
							: `https://ui-avatars.com/api/?name=${data?.user?.username}`}
						alt="Avatar Image"
						id="avatar-img"
					/>
				</div>
			</label>

			<input
				type="file"
				name="avatar"
				id="avatar"
				value=""
				accept="image/*"
				hidden
				on:change={previewAvatar}
				disabled={loading}
			/>
			{#if proferror}
				{#each proferror as error}
					<label for="avatar" class="label py-0 pt-1">
						<span class="label-text-alt text-error">
							<strong> {error} </strong>
						</span>
					</label>
				{/each}
			{/if}
		</div>
		<Input
			id="name"
			label="Name"
			value={form?.data?.name ?? data?.user?.name}
			disabled={loading}
			errors={namerror}
		/>
		<div class="w-full max-w-lg pt-3">
			<button class="btn btn-primary w-full max-w-lg" disabled={loading}> Update Profile </button>
		</div>
	</form>
	{#if form?.success}
		<div class="alert alert-success mt-5">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Your profile is successfully updated !</span>
		</div>
	{/if}
</div>
