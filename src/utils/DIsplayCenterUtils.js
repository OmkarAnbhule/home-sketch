export const fetchDisplayCards = (setDisplayCards, setLoading) => {
    try {
        fetch('/api/v1/displayCenter', {
            method: 'GET',
            cache: 'force-cache'
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