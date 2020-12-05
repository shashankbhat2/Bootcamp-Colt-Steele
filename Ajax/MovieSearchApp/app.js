const form = document.querySelector('#searchForm')
const cardImg = document.querySelector('.card-img');
form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log(res.data)
    makeImages(res.data);
})


const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image){
        cardImg.setAttribute('src', `${result.show.image.medium}`)   
        }
    }
}