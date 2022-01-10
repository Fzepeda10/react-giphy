export const getGift = async (category) => {
    const baseUrl = 'https://api.giphy.com/v1/gifs/search?api_key=qmhWb8pnMpWhmEWO8uWtN9V2O7RNqP08&';
    const query = `q=${encodeURI(category)}&limit=10&rating=g`
    const url = `${baseUrl}${query}`
    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium?.url
        }
    });
}