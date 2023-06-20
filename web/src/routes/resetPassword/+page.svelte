<script>
	export let form;
</script>

<svelte:head>
	<title>Reset Password</title>
</svelte:head>
<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Fill the form below with your email
	</h2>
	<p class="text-center mt-1">we'll send a message to reset your password</p>
	<form action="?/reset" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
		<div class="form-control w-full max-w-md">
			<label for="email" class="label font-medium pb-1">
				<span class="label-text">Email</span>
			</label>
			<input type="email" name="email" class="input input-bordered w-full max-w-end" />
		</div>

		<div class="w-full max-w-md pt-2">
			<button type="submit" class="btn btn-primary w-full">Confirm</button>
		</div>
		{#if form?.sucess}
			<div class="alert alert-success shadow-lg w-full max-w-md">
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
				<span>Your email has been sended</span>
			</div>
		{/if}
	</form>
</div>
