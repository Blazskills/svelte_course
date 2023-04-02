// import { invalidate } from '$app/navigation';
import type { PageLoad} from './$types';


export const load:PageLoad = ({data,fetch, depends}) => {
    // fetch('https://dummyjson.com/products')
    // fetch('/api/products')
    // depends('app:products')
    
    // console.log(data)
    // throw new Error('Unexpected ooo')
    return {
        products: data.products
    };
}