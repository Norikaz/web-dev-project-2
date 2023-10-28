export interface getMangaListResponse {
	id: number;
	title: string;
	image: string;
	synopsis: string;
	genres: {
		name: string;
	}[];
}
