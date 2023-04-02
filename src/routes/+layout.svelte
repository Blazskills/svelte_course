<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	export let data: LayoutData;
	import type { ActionData } from './(auth)/login/$types';
	let isLoading = false;
	let error = '';
	let form: ActionData;

	const handleLoginEnhance: SubmitFunction = () => {
		isLoading = true;
		error = '';
		return ({ result }) => {
			isLoading = false;
			if (result.type === 'redirect') {
				form = null;
				applyAction(result);
			}

			if (result.type === 'error') {
				error = result.error.message;
			}

			if (result.type === 'failure') {
				form = result.data as ActionData;
			}
		};
	};
</script>

{#if data.user}
	<p>Logged in as {data.user.name}</p>
{/if}

<nav style="margin: -15px 70%; padding: 0px 5px;">
	<ul style="display: flex; list-style: none; gap: 10px;">
		<li>
			<a href="#/">en</a>
		</li>
		<li>
			<a href="#/">fr</a>
		</li>
		{#if !data?.user}
			<li>
				<a href="/login">Login</a>
			</li>
			<li>
				<a href="/register">Register</a>
			</li>
		{/if}
	</ul>
</nav>
{#if data.user}
	<form method="POST" action="/login?/logout&redirectTo={$page.url.pathname}" use:enhance>
		<button type="submit"> Logout </button>
	</form>
{/if}
<slot />

{#if !data.user && $page.url.pathname !== '/login'}
	{#if error}
		<p style="color: red;">{error}</p>
	{/if}
	<form
		method="POST"
		action="/login?/login&redirectTo={$page.url.pathname}"
		use:enhance={handleLoginEnhance}
	>
		<label for="username">Username</label><br />
		<input
			id="username"
			name="username"
			placeholder="Username"
			autocomplete="username"
			value={form?.username || ''}
		/>
		{#if form?.usernameMissing}
			<p style="color: red; margin: 0px;">Username is Required</p>
		{/if}
		<br /><br />
		<label for="password">Password</label><br />
		<input
			id="password"
			name="password"
			placeholder="Password"
			type="password"
			autocomplete="current-password"
		/>
		{#if form?.passwordMissing}
			<p style="color: red; margin: 0px;">Password is Required</p>
		{/if}
		<br /><br />

		<button type="submit" disabled={isLoading}>{isLoading ? 'Connecting...' : 'Login'}</button>
	</form>
{/if}
