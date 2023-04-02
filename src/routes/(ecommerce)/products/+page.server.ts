import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends }) => {
    const response = await fetch('/api/products');
    // fetch('/api/products')
    depends('app:productServerLoads');

    if (response.ok) {
        return {
            products: response.json()
            // products: response.json()
        }
    }
    const errorJSON = await response.json();
    throw error (response.status, errorJSON.message)
    // throw error (response.status, response.statusText)
}