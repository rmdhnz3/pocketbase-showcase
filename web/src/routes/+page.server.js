import { error } from '@sveltejs/kit'
import { SerializeNonPOJOs } from '$lib/utils'
export const load = ({ locals }) => {
    const fetchProject = async () => {
        try {
            const projects = await SerializeNonPOJOs(await locals.pb.collection('projects').getFullList())
            return projects
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }
    }

    return {
        projects: fetchProject()
    }
}