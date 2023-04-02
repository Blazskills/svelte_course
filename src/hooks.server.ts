import type { Handle, HandleFetch, HandleServerError } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
    const { locals, cookies, url } = event

    if (!url.pathname.startsWith('/api')) {
        const token = cookies.get('token');

        locals.user = token ? { name: 'Ilesanmi', id: 1 } : undefined
    }
    // console.log(event.url);
    const response = await resolve(event);
    return response
}

export const handleFetch: HandleFetch=({request,event,fetch})=>{
    if(request.url.startsWith('https://dummyjson.com/')){
        const cookies = event.request.headers.get('cookies')
        if(cookies){
            request.headers.set('cookies', cookies)
        }
    }
    return fetch(request)
}

export const handleError: HandleServerError = ({error, event})=>{
    console.log('This is coming from handleError.')
    console.log(error,event) //can be log or sent to sentry

    return{
        message: 'An unexpected error has occurred',
        code: 'UNEXPECTED'
    }
}