import axios from 'axios';

const LOCAL_SERVER_URL_END_POINT = 'http://localhost:8080/get-review';

export interface ReviewResponse {
	content: string;
}

const getReviewByTitle = (title: string) => {
	return axios.get(`${LOCAL_SERVER_URL_END_POINT}?title=${title}`);
};

export default getReviewByTitle;
