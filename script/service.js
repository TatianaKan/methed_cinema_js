const API_KEY = '9826ad135687e51456d834bf2a59d09e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

//trending/all/week?api_key=<<api_key>>//

const getData = (url) => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw `что-то пошло не так, ошибка ${response.status}`
  })
  .catch(err => console.error(err));

export const getTriends = async (type = 'all', period = 'day', page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
}