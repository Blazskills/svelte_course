<script lang="ts">


import type {PageData} from './$types'

export let data: PageData

$:product = data.product

</script>


<h1>Each product here</h1>



<img src={product?.thumbnail} alt={product?.title}>

<h1>
    {product?.title}
</h1>
    <p>
        {product?.description}
    </p>


<style>
    img{
        width: 30%;
    }
</style>