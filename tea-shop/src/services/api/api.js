
const config={
    url: 'https://api.unsplash.com',
    token: '_-0C03mkOaFmFwtL-Hi6E0qqEZvucifh7PlV5QAriDw'
}

export const getSliderImages = async ( ) => {
    return  fetch(`${config.url}/search/photos?query=tea&per_page=15`,{
        method: 'GET',
        headers: {
            Authorization: `Client-ID ${config.token}`
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })

};

export const getCards = async ( ) => {
    return  fetch(`${config.url}/collections/72215166/photos?per_page=21`,{
        method: 'GET',
        headers: {
            Authorization: `Client-ID ${config.token}`
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })

};
