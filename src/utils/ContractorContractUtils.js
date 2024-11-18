export const fetchContactCards = (setDisplayCards, setLoading) => {
    try {
        fetch('/api/v1/contractorContact', {
            method: 'GET',
            cache: 'default'
        })
            .then((res) => res.json())
            .then(({ data }) => {
                setDisplayCards(data)
            })
    }
    catch (e) {
        console.error(e)
    }
    finally {
        setLoading(false)
    }
}