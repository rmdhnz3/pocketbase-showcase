<script>
	export let value = '';
	export let placeholder = '';
	export let id;
	export let label;
	export let type = 'text';
	export let disabled = false;
	export let required = false;
	export let errors;
</script>

<div class="form-control w-full max-w-lg mb-2">
	<label for={id} class="label font-medium pb-1">
		<span class="label-text">{label}</span>
	</label>
	<input
		{type}
		{placeholder}
		{value}
		{disabled}
		{required}
		{id}
		name={id}
		class={type === 'file'
			? 'file-input file-input-bordered w-full w-max-lg bg-base-200'
			: 'input input-bordered w-full max-w-lg bg-base-200'}
	/>
	{#if errors}
		{#each errors as error}
			<label for={id} class="label py-0 pt-1">
				<span class="label-text-alt text-error">
					<strong> {error} </strong>
				</span>
			</label>
		{/each}
	{/if}
</div>
