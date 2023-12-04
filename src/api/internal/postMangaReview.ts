import axios from 'axios';
import { LOCAL_SERVER_URL_END_POINT } from './getMangaReviewsByTitle';

interface Review {
	content: string;
	mangaTitle: string;
}

const postReview = (reviewToUpload: Review) => {
	//Not wrapper in try catch since we dont have an internal logger
	//I dont want to expose any error on the console
	axios.post(LOCAL_SERVER_URL_END_POINT, reviewToUpload);
};

export default postReview;
