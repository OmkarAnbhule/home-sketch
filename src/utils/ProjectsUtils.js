import { setProjects } from "@/store/slices/projectSlice"

export const fetchProjects = (dispatch , setLoading) => {
    try {
        fetch('/api/v1/projects', {
            method: 'GET',
            cache: 'default'
        })
            .then((res) => res.json())
            .then(({ data }) => {
                dispatch(setProjects(data))
            })
    }
    catch (e) {
        console.error(e)
    }
    finally {
        setLoading(false)
    }
}