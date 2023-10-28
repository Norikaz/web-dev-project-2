import { GetTopAnimeResponse } from '../../../api/getTopAnime';

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

export const RESPONSIVE_GENRE_CAROUSEL = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 5,
	},
	mobile: {
		breakpoint: {
			max: 464,
			min: 0,
		},
		items: 3,
	},
	tablet: {
		breakpoint: {
			max: 1024,
			min: 464,
		},
		items: 3,
	},
};

export const extractGenres = (
	apiResponse: GetTopAnimeResponse[] | undefined
) => {
	return apiResponse?.map((manga: GetTopAnimeResponse) => {
		return manga.genres.slice(0, 5).join(', ');
	});
};
