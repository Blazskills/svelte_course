import type { PageServerLoad } from './$types'
import {error} from '@sveltejs/kit'


export const load: PageServerLoad = async ({ params }) => {

    const products = await (await import('$lib/dummy-products.json')).default;
    const product = products.products.find(p => p.id === +params.id);

    if(!product){
        throw error(404, {message:'Product not found', code:'Not_Found'})
    }
    return {
        product
    }
}