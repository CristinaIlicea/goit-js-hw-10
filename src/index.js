import axios from "axios";

axios.defaults.headers.common["live_s3wRHsU61cacfMUxuSyxBrZqdty1Yys6HG39g2nkSULSrRDvgau6zqCzTAucYOGM"] = "cheia ta";

const CatBreeds_URL = 'https://api.thecatapi.com/v1/breeds';

const postCatbreed = document.querySelector(".breed-select");

fetchCatBreed();

const renderCatBreed = () => {
    const BreedSelect = document.createElement('select');
    BreedSelect.append();
    return BreedSelect;
};

function fetchCatBreed() {
const queryParams = new URLSearchParams ({
    _limit: 1,
    _id: "id",
});

axios 
.get(`${CatBreeds_URL}/id?$${queryParams}`)
.then((Response)=>{
const postBreed = response.data.map((id) => renderCatBreed(id));
})

.catch((err) => console.log(err));
}






