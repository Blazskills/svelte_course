<script lang="ts">
	import { page } from '$app/stores';
	// console.log($page)
</script>
<h1>+error.svelte in root /route</h1>
<h2>{$page.status}: {$page.error?.message}</h2>
<h2>code: {$page.error?.code}</h2>