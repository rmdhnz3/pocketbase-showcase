import { error } from '@sveltejs/kit'
import { SerializeNonPOJOs } from '$lib/utils'

export const load = ({ locals }) => {
    const fetchUserProjects = async (userId) => {
        try {
            const projects = SerializeNonPOJOs(await locals.pb.collection('projects').getFullList({
                filter: `owner = "${userId}" `,
                sort: "-created"
            }))
            return projects
        } catch (err) {
            throw error(err.status, err.message)
        }
    }
    return {
        projects: fetchUserProjects(locals.user.id)
    }
}

export const actions = {
    deleteProject: async ({ locals, request }) => {
        const { id } = Object.fromEntries(await request.formData())
        try {
            await locals.pb.collection('projects').delete(id)
        } catch (error) {
            throw error(error.status, error.message)
        }
        return {
            success: true
        }
    }
}