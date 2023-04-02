<script lang="ts">
	import type { LayoutData } from './$types';

	// export let data: LayoutData;
</script>

<!-- {#if data.user}

<p>
	Logged in as {data.user.name}
</p>
	
{/if} -->

<nav style="margin: 0px 14%;">
	<ul style="display: flex; list-style: none; ">
		<li style="margin: 0 15px 0 0;">
			<a href="/">Home</a>
		</li>
		<li style="margin: 0 15px 0 0;">
			<a href="/products">All Products</a>
		</li>
	</ul>
</nav>

<slot />
