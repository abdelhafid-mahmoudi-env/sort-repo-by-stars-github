import axios from "axios";
import configs from "../configs";

export const fetchRepositories = async (page: number) => {
	try {
		const { data } = await axios.get(`${configs.BASE_GITHUB_API_URL}/${configs.GITHUB_API_SEARCH_QUERY}&per_page=8&page=${page}`);
		return data.items;
	} catch (error) {
        // handle the errors here
		// console.log(error);
	}
}