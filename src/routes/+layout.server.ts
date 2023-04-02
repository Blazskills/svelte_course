import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types'


export const load: LayoutServerLoad = ({ locals }) => {
    // const token = cookies.get('token')
    console.log(locals)
    // const user = { name: 'John', id: 1 };
    // throw error(401, 'Not auth')
    const user = locals.user;
    return {
        user
    }
}