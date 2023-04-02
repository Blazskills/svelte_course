import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ fetch , locals}) => {
    const response = await fetch('https://dummyjson.com/products');
    console.log(locals)
    if (response.ok) {
        const resJSON = await response.json()
        return json(resJSON, {
            status: 200
        })
    }
    // console.log(response)

    // const products = await (await import('$lib/dummy-products.json')).default;

    throw error(response.status, response.statusText);


}

export const POST: RequestHandler = async ({ request }) => {
    const product = await request.json()
    if (!product.title) {
        throw error(400, 'Product title is required')
    }

    return json({ id: 1323, title: product.title })
}