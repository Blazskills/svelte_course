<script lang="ts">
	import { page } from '$app/stores';
	// console.log($page)
</script>

<div style="margin: 0px 30%;">
	<h1>+error.svelte in root /routes/product/[id]</h1>
	<h2>{$page.status}: {$page.error?.message}</h2>

	<h3>
		Code: {$page.error?.code}
	</h3>
</div>
