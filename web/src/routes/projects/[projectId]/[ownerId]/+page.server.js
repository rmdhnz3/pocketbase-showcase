import { SerializeNonPOJOs } from '$lib/utils'
import { error, redirect } from '@sveltejs/kit'
export const load = ({ locals, params }) => {
    const fetchProject = async (projectId) => {
        try {
            const project = SerializeNonPOJOs(await locals.pb.collection('projects').getOne(projectId, {
                expand: 'owner'
            }))
            return project
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
    }


    const fetchComments = async (projectId) => {
        try {
            const comments = await SerializeNonPOJOs(await locals.pb.collection('comments').getFullList({
                filter: `project = "${projectId}"`,
                expand: 'user'
            }))
            return comments
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
    }

    return {
        project: fetchProject(params.projectId),
        comments: fetchComments(params.projectId),
    }
}

export const actions = {
    postComment: async ({ locals, request }) => {
        const body = await request.formData()
        body.append('user', locals.user.id)
        try {
            await locals.pb.collection('comments').create(body)
        } catch (err) {
            throw error(err.status, err.message)
        }
    }
}