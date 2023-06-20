import { error, fail, redirect } from '@sveltejs/kit';
import { validateData, GenerateUsername } from '$lib/utils';
import { registerSchema } from '$lib/schemas';
export const actions = {
    register: async ({ locals, request }) => {
        const { formData, errors } = await validateData(await request.formData(), registerSchema)

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        let username = GenerateUsername(data.name.split(' ').join('')).toLowerCase()
        try {
            await locals.pb.collection('users').create({ username, ...formData });
            await locals.pb.collection('users').requestVerification(formData.email)
        } catch (err) {
            console.log('Error:', err);
            throw error(500, 'error occurred');
        }
        throw redirect(303, '/login');
    }
}