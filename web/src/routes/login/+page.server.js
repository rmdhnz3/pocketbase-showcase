import { error, fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { loginSchema } from '$lib/schemas';

export const actions = {
    login: async ({ request, locals }) => {
        const { formData, errors } = await validateData(await request.formData(), loginSchema);

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, '/my/projects/');
    },
    logout: async ({ locals }) => {
        locals.pb.authStore.clear();
        locals.user = undefined;
        throw redirect(303, '/login');
    }
};