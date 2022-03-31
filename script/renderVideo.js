import { getTriends, getVideo } from "./service.js";
import renderCard from "./renderCard.js";

const filmWeek = document.querySelector('.film-week');


const firstRender = (data, { key }) => {

  const {
    vote_average: voteAverage,
    backdrop_path: backdropPath,
    name,
    original_name: originalName,
    title,
    original_title: originalTitle
  } = data;

  filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${voteAverage}">
    <div class="film-week__poster-wrapper">
        <img class="film-week__poster"
            src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdropPath}"
            alt="постер ${title || name}">
        <p class="film-week__title_origin">${originalTitle || originalName}</p>
    </div>
    <h2 class="film-week__title">${title || name}</h2>
    ${key ?
      `<a class="film-week__watch-trailer tube" 
         href="https://youtu.be/${key}"
         aria-label="смотреть трейлер"></a>` :
      ''}
  </div>
`
};

const renderVideo = async () => {
  const data = await getTriends();

  const [firstCard, ...otherCards] = data.results;
  otherCards.length = 12;

  const video = await getVideo(firstCard.id, firstCard.media_type);

  firstRender(firstCard, video.results[0]);

  renderCard(otherCards);
}


export default renderVideo;