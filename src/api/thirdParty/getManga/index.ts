import axios from 'axios';

export interface GetMangaSearchResponse {
	title: string;
	synopsis: string;
	image: string;
}

interface MangaSearchRawResponse {
	title: string;
	synopsis: string;
	images: { webp: { large_image_url: string } };
}

export enum GenreFilter {
	Action = '1',
	Drama = '3',
	SliceOfLife = '4',
	Supernatural = '7',
}

const getManga = (genre: GenreFilter) => {
	return axios
		.get(`https://api.jikan.moe/v4/manga?genres=${genre}`)
		.then(response => {
			const formattedResponse: GetMangaSearchResponse[] =
				response.data.data.map((manga: MangaSearchRawResponse) => {
					const formattedManga: GetMangaSearchResponse = {
						title: manga.title,
						synopsis: manga.synopsis,
						image: manga.images.webp.large_image_url,
					};
					return formattedManga;
				});
			return formattedResponse.slice(0, 15);
		});
};

// Newly added function to query a SINGLE manga/anime (param: animeTitle).
export const getSingleManga = (animeTitle: string) => {
	return axios
		.get(`https://api.jikan.moe/v4/manga?q=${encodeURIComponent(animeTitle)}`)
		.then(response => {
			const manga: MangaSearchRawResponse | undefined = response.data.data[0];
			if (manga) {
				const formattedManga: GetMangaSearchResponse = {
					title: manga.title,
					synopsis: manga.synopsis,
					image: manga.images.webp.large_image_url,
				};
				return formattedManga;
			}
			throw new Error('Anime not found');
		});
};

export default getManga;
