<script>
	// import { Tiptap } from '$lib/components';
	export let value = '';
	export let placeholder = '';
	export let id;
	export let label;
	export let disabled = false;
	export let required = false;
	export let errors;
</script>

<div class="form-contol w-full max-w-lg">
	<label for={id} class="label font-medium pb-1">
		<span class="label-text">{label}</span>
	</label>
	<textarea
		class="textarea textarea-bordered h-24 resize-none w-full bg-base-200"
		{disabled}
		{required}
		{id}
		{placeholder}
		{value}
		name={id}
	/>
	<!-- <Tiptap /> -->
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
