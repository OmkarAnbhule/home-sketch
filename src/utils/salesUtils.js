import { setSales } from "@/store/slices/salesSlice"

export const fetchSales = (dispatch, setLoading) => {
    try {
        fetch('/api/v1/sales', {
            method: 'GET',
            cache: 'default'
        })
            .then((res) => res.json())
            .then(({ data }) => {
                dispatch(setSales(data))
            })
    }
    catch (e) {
        console.error(e)
    }
    finally {
        setLoading(false)
    }
}

export const fetchSaleById = (setSale, id, setLoading) => {
    try {
        fetch(`/api/v1/sale/${id}`, {
            method: 'GET',
            cache: 'default'
        })
            .then((res) => res.json())
            .then(({ data }) => {
                setSale(data)
            })
    }
    catch (e) {
        console.error(e)
    }
    finally {
        setLoading(false)
    }
}