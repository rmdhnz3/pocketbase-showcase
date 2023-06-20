import { error, redirect } from '@sveltejs/kit';

export const actions = {
    reset: async ({ locals, request }) => {
        const data = Object.fromEntries(await request.formData())
        try {
            await locals.pb.collection('users').requestPasswordReset(data.email);
            return {
                sucess: true
            }
        } catch (err) {
            console.log('Error :', err)
            throw error(400, 'Error occurred')
        }
    }
}