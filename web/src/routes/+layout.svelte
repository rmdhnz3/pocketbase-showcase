<script>
	import { Toaster } from 'svelte-french-toast';
	import { page } from '$app/stores';
	import '../app.postcss';
	import { getImageUrl } from '$lib/utils';
	export let data;

	const profile = [
		{
			title: 'Project',
			href: '/my/projects'
		},
		{
			title: 'Settings',
			href: '/my/settings/profile'
		}
	];
</script>

<div class="min-h-full">
	<nav class="navbar bg-base-200">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Pocketbase-Showcase</a>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-primary">Login</a>
					<a href="/register" class="btn btn-secondary">Register</a>
				</div>
			{:else}
				<div class="dropdown dropdown-end mr-4">
					<a href="/projects/new" class="btn btn-primary btn-outline">Add Project</a>
				</div>
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
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
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
					>
						{#each profile as profItem}
							<li>
								<a
									href={profItem.href}
									class="justify-between {$page.url.pathname == profItem.href ? 'active' : ''}"
									>{profItem.title}</a
								>
							</li>
						{/each}
						<li>
							<form action="/login?/logout" method="POST">
								<button type="submit" class="w-full text-start">Logout</button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</nav>
	<div class="py-8">
		<Toaster />
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8 text-slate-300">
			<slot />
		</div>
	</div>
</div>
