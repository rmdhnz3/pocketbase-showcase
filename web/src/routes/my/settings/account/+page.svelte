<script>
	import { invalidateAll } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';
	import { Modal, Input } from '$lib/components';
	let emailModalOpen;
	let usernameModalOpen;
	export let form;
	export let data;
	let loading;
	const submitUpdateEmail = () => {
		loading = true;
		emailModalOpen = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					emailModalOpen = false;
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
	const submitUpdateUsername = () => {
		loading = true;
		usernameModalOpen = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					usernameModalOpen = false;
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
	$: usernameModalOpen = false;
	$: emailModalOpen = false;
	$: errobjusername = form?.errors?.username;
	$: erroobjemail = form?.errors?.email;
</script>

<div class="flex flex-col w-full h-full space-y-12">
	<!-- Email -->
	<div class="w-full">
		<h3 class="text-2xl font-medium">Change Email Adress</h3>
		<div class="divider" />
		<Input id="email" label="Email" value={data?.user?.email} disabled />
		<Modal label="change-email" checked={emailModalOpen}>
			<span class="btn btn-primary" slot="trigger"> Change Email </span>
			<h3 slot="heading">Change your email adress</h3>
			<form action="?/updateEmail" class="space-y-2" method="POST" use:enhance={submitUpdateEmail}>
				<Input
					id="email"
					type="email"
					label="Your new email adress"
					required={true}
					value={form?.data?.email}
					disabled={loading}
					errors={erroobjemail}
				/>
				<button class="btn btn-primary w-full" disabled={loading}> Confirm email change </button>
			</form>
		</Modal>
	</div>
	<!-- Username -->
	<div class="w-full">
		<h3 class="text-2xl font-medium">Change Username</h3>
		<div class="divider" />
		<Input id="username" label="Username" value={data?.user?.username} disabled />
		<Modal label="change-username" checked={usernameModalOpen}>
			<span class="btn btn-primary" slot="trigger"> Change Username </span>
			<h3 slot="heading">Change your username</h3>
			<form
				action="?/updateUsername"
				class="space-y-2"
				method="POST"
				use:enhance={submitUpdateUsername}
			>
				<Input
					id="username"
					type="text"
					label="Your new username"
					required={true}
					value={form?.data?.username}
					errors={errobjusername}
					disabled={loading}
				/>
				<button class="btn btn-primary w-full" disabled={loading} type="submit">
					Confirm username change
				</button>
			</form>
		</Modal>
	</div>
</div>
