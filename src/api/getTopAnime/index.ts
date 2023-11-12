import axios from 'axios';

export interface GetTopAnimeResponse {
	id: number;
	title: string;
	image: string;
	synopsis: string;
	genres: string[];
}

interface TopAnimeRawResponse {
	genres: { name: string }[];
	mal_id: number;
	title: string;
	images: { webp: { large_image_url: string } };
	synopsis: string;
}

// https://docs.api.jikan.moe/#tag/top/operation/getTopAnime -
// - returns top anime from AniList
const getTopAnime = () => {
	return axios.get('https://api.jikan.moe/v4/top/anime').then(response => {
		const formattedResponse: GetTopAnimeResponse[] = response.data.data.map(
			(anime: TopAnimeRawResponse) => {
				const animeGenres = anime.genres.map(
					(genre: { name: string }) => genre.name
				);
				const formattedManga: GetTopAnimeResponse = {
					id: anime.mal_id,
					title: anime.title,
					image: anime.images.webp.large_image_url,
					synopsis: anime.synopsis,
					genres: animeGenres,
				};
				return formattedManga;
			}
		);
		return formattedResponse.slice(0, 7);
	});
};

export default getTopAnime;
