export const getGift = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&rating=g&offset=0&lang=en&api_key=tD8fhyWntNoq6lZEvze2BDoOL9JrfE8J`
    const response = await fetch(url)
    const {data} = await response.json()
    const gifs = data.map(img => {
        return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
        }
    })
    return gifs
}