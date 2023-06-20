import { error, redirect, fail } from '@sveltejs/kit'
import { SerializeNonPOJOs, validateData } from '$lib/utils'
import { editProjectSchema } from '$lib/schemas'
import { serialize } from 'object-to-formdata'
export const load = async ({ locals, params }) => {

    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unauthorized')
    }

    try {
        const project = SerializeNonPOJOs(await locals.pb.collection('projects').getOne(params.projectId))
        if (locals.user.id == project.owner) {
            return { project }
        } else {
            throw error(403, 'forbidden')
        }
    } catch (err) {
        throw error(err.status, err.message)
    }
}

export const actions = {
    update: async ({ locals, params, request }) => {
        const body = await request.formData()
        const thumb = body.get('thumbnail')

        if (thumb.size === 0) {
            body.delete('thumbnail')
        }

        const { formData, errors } = await validateData(await body, editProjectSchema)
        const { thumbnail, ...rest } = formData

        if (errors) {
            return fail(400, {
                data: rest,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('projects').update(params.projectId, serialize(formData))
        } catch (err) {
            throw error(err.status, err.message)
        }
        throw redirect(303, `/my/projects`)
    },

    deleteThumbnail: async ({ locals, params }) => {
        try {
            await locals.pb.collection('projects').update(params.projectId, { thumbnail: null })
        } catch (err) {
            throw error(err.status, err.message)
        }
        return {
            success: true
        }
    }
}
