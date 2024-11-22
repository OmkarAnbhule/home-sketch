import { setData } from "@/store/slices/fliterSlice"

export const fetchDisplayCards = (setLoading, dispatch) => {
    try {
        fetch('/api/v1/displayCenter', {
            method: 'GET',
            cache: 'default'
        })
            .then((res) => res.json())
            .then(({ data }) => {
                data.map((item, index) => {
                    if (item.garage > 1) {
                        item.garage = 'double'
                    }
                    else {
                        item.garage = 'single'
                    }
                })
                dispatch(setData(data))
            })
    }
    catch (e) {
        console.error(e)
    }
    finally {
        setLoading(false)
    }
}