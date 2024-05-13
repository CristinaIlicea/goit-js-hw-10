import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_s3wRHsU61cacfMUxuSyxBrZqdty1Yys6HG39g2nkSULSrRDvgau6zqCzTAucYOGM";
const apiKey = 'live_s3wRHsU61cacfMUxuSyxBrZqdty1Yys6HG39g2nkSULSrRDvgau6zqCzTAucYOGM';
const CatBreeds_URL = 'https://api.thecatapi.com/v1/breeds';

const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data from API:', error);
      throw error;
    });
};
const fetchCatByBreed = breedId => {
  return axios
    .get(
      `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}&breed_ids=${breedId}`
    )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data from API:', error);
      throw error;
    });
};