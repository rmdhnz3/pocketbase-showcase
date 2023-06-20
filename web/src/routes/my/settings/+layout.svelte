<script>
	// export let data;
	import { page } from '$app/stores';
	const nav = [
		{
			title: 'Profile',
			href: '/my/settings/profile'
		},
		{
			title: 'Account',
			href: '/my/settings/account'
		},
		{
			title: 'Security',
			href: '/my/settings/security'
		}
	];
</script>

<head>
	<title>My Settings</title>
</head>
<div class="w-full h-full">
	<h3 class="text-2xl font-medium">Settings</h3>
	<div class="divider" />
</div>

<div class="flex w-full h-full px-2">
	<ul class="menu bg-base-100 w-56 p-2 rounded-box">
		{#each nav as navItem}
			<li>
				<a
					href={navItem.href}
					class="font-medium {$page.url.pathname == navItem.href ? 'active' : ''}"
					>{navItem.title}</a
				>
			</li>
		{/each}
	</ul>
	<div class="w-full">
		<slot />
	</div>
</div>
