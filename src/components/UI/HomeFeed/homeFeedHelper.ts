import { getMangaListResponse } from '../../../api/getMangaList';

type Genre = {
	name: string;
};

export const RESPONSIVE = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 1,
	},
	mobile: {
		breakpoint: {
			max: 464,
			min: 0,
		},
		items: 1,
	},
	tablet: {
		breakpoint: {
			max: 1024,
			min: 464,
		},
		items: 1,
	},
};

export const extractGenres = (apiResponse: getMangaListResponse[]) => {
	return apiResponse.map((manga: getMangaListResponse) => {
		const genreNames = manga.genres.map((genre: Genre) => genre.name);
		return genreNames.slice(0, 5).join(', ');
	});
};
