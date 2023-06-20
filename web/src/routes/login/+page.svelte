<script>
	import { enhance } from '$app/forms';
	import { Input } from '$lib/components';
	import { toast } from 'svelte-french-toast';
	export let form;
	let loading = false;
	const submitLogin = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'failure':
					toast.error('Invalid Credentials');
					break;
				case 'error':
					toast.error(result.error.message);
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
</script>

<svelte:head>
	<title>Login Page</title>
</svelte:head>
<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Login to an existing account
	</h2>
	<p class="text-center mt-1">
		Didn't have a account ? <a
			href="/register"
			class="text-primary font-medium hover:cursor-pointer hover:underline"
		>
			Register here
		</a>
	</p>
	<form
		action="?/login"
		method="POST"
		class="flex flex-col items-center space-y-2 w-full pt-4"
		use:enhance={submitLogin}
	>
		<Input
			type="email"
			id="email"
			label="Email"
			value={form?.data?.email ?? ''}
			errors={form?.errors?.email}
			disabled={loading}
		/>
		<Input
			type="password"
			id="password"
			label="Password"
			value={form?.data?.password ?? ''}
			errors={form?.errors?.pasword}
			disabled={loading}
		/>

		<div class="w-full max-w-lg pt-2">
			<a href="/resetPassword" class="font-medium text-primary hover:cursor-pointer hover:underline"
				>Forget Password ?</a
			>
		</div>
		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn btn-primary w-full" disabled={loading}>Login</button>
		</div>
	</form>
</div>
