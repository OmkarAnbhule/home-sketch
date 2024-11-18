export const fetchContactCards = (setDisplayCards, setLoading) => {
    try {
        fetch('/api/v1/contractorContact', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then(({ data }) => {
                console.log(data)
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