<script lang="ts">
	//cspell:ignore dummyjson
	import { invalidate } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	

	$: products = data.products.products;

    // console.log(data);
</script>

<h2>All Online Trade</h2>


<button on:click={() =>{
	invalidate('app:productServerLoads');
	// invalidate((url)=>{
	// 	// console.log(url)
    //     return url.hostname === 'dummyjson.com';
    // })
}}>Re-run load function</button>

{#if products && products.length > 0}
	<ul>
		{#each products as product}
			<li>
				<img src={product.thumbnail} alt={product.title} />
				<h3>
					<a href="/product/{product.id}">{product.title}</a>
				</h3>
				<p>
					{product.description}
				</p>
			</li>
		{/each}
	</ul>
{/if}

<style>
	/* @media screen and (min-width: 800px) {
		img {
			margin: 0 auto;
            width: 500px;
		}
	} */

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(9, minmax(0, 1fr));
		gap: 30px;
	}

	img {
		width: 100%;
		background-size: cover;
	}
</style>
