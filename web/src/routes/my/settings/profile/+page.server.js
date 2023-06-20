import { error, fail } from '@sveltejs/kit'
import { updateProfileSchema } from '$lib/schemas'
import { validateData } from '$lib/utils'
import { serialize } from 'object-to-formdata'
export const actions = {
    updateProfile: async ({ request, locals }) => {
        let body = await request.formData()
        const avatarImage = body.get('avatar')

        if (avatarImage.size == 0) {
            body.delete('avatar')
        }

        const { formData, errors } = await validateData(body, updateProfileSchema)
        const { thumbnail, ...rest } = formData
        if (errors) {
            return fail(400, {
                data: rest,
                errors: errors.fieldErrors
            })
        }

        try {
            const { name, avatar } = await locals.pb.collection('users').update(locals?.user?.id, serialize(formData))
            locals.user.name = name
            locals.user.avatar = avatar

        } catch (err) {
            console.log('Error : ', err)

            throw error(400, 'Error updating profile')
        }

        return {
            success: true,
        }
    }
}