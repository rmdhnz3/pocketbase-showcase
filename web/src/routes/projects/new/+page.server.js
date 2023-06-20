import { error, redirect, fail } from '@sveltejs/kit'
import { validateData } from '$lib/utils'
import { newProjectSchema } from '$lib/schemas'
import { serialize } from 'object-to-formdata'
export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login')
    }
}

export const actions = {
    create: async ({ locals, request }) => {
        const body = await request.formData()
        const thumb = body.get('thumbnail')

        if (thumb.size == 0) {
            body.delete('thumbnail')
        }
        body.append('owner', locals.user.id)

        const { formData, errors } = await validateData(await body, newProjectSchema)
        const { thumbnail, ...rest } = formData

        if (errors) {
            return fail(400, {
                data: rest,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('projects').create(serialize(formData))
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
        throw redirect(303, '/my/projects')
    }
}