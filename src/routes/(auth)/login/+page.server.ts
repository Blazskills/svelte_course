import { fail, redirect, type Actions } from "@sveltejs/kit";
// import { resolve } from "path";




export const actions: Actions = {
    login: async ({ request, cookies, url, locals }) => {
        const form = await request.formData();
        const username = form.get('username');
        const password = form.get('password');

        await new Promise(resolve => setTimeout(resolve, 1000));

        // throw new Error('Error');
        if (!username) {
            return fail(400, { usernameMissing: true })
        }
        if (!password) {
            return fail(400, { passwordMissing: true, username })
        }
        cookies.set('token', 'token_value', {
            path: '/'
        });
        //cspell:ignore ilesanmi
        locals.user = { name: 'Ilesanmi', id: 1 }
        throw redirect(303, url.searchParams.get('redirectTo') || '/')

    },

    logout: ({ cookies, url, locals }) => {
        cookies.delete('token', { path: '/' })
        locals.user = undefined
        throw redirect(303, url.searchParams.get('redirectTo') || '/')

    }
}