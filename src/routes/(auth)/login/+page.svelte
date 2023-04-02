<script lang="ts">
	import type { ActionData } from './$types';
	import { page } from '$app/stores';
	import { enhance, applyAction } from '$app/forms';

	let isLoading = false;
	let error = '';
	export let form: ActionData;
</script>

<h1>Login Page</h1>


{#if error}
<p style="color: red;">{error}</p>
	
{/if}
<form
	method="POST"
	action="?/login"
	use:enhance={() => {
		isLoading = true;

		return ({ result, update }) => {
			isLoading = false;
			// update();
			if (result.type === 'failure' || result.type === 'redirect') {
				applyAction(result);
			}
			if (result.type === 'error') {
				error = result.error.message;
			}
		};
	}}
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
