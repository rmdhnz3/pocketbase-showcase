<script>
	import { invalidateAll } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';
	import { Input } from '$lib/components';
	let loading;
	export let form;
	const submitUpdatePassword = () => {
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
	<div class="w-full">
		<form
			action="?/updatePassword"
			method="POST"
			class="flex flex-col space-y-2 w-full"
			use:enhance={submitUpdatePassword}
		>
			<Input
				id="oldPassword"
				label="Old Password"
				type="password"
				required
				errors={form?.errors?.oldPassword}
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				required
				disabled={loading}
				errors={form?.errors?.password}
			/>
			<Input
				id="passwordConfirm"
				label="Confirm Password"
				type="password"
				required
				disabled={loading}
				errors={form?.errors?.passwordConfirm}
			/>
			<a href="/resetPassword" class="text-primary hover:cursor-pointer hover:underline"
				>I forgot my password</a
			>
			<div class="w-full max-w-lg pt-3">
				<button class="btn btn-primary w-full max-w-lg" type="submit" disabled={loading}>
					Update Password
				</button>
			</div>
		</form>
	</div>
</div>
